"use client";

import * as React from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Check, X as RemoveIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Badge from "@/components/core/badge";
import Command from "@/components/core/command";

type MultiSelectProps = {
  values: string[];
  onValuesChange: (_value: string[]) => void;
  loop?: boolean;
} & React.ComponentPropsWithoutRef<typeof CommandPrimitive>;

interface MultiSelectContextProps {
  value: string[];
  onValueChange: (_value: any) => void;
  open: boolean;
  setOpen: (_value: boolean) => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
}

const MultiSelectContext = React.createContext<MultiSelectContextProps | null>(
  null
);

const useMultiSelect = () => {
  const context = React.useContext(MultiSelectContext);
  if (!context) {
    throw new Error("useMultiSelect must be used within MultiSelectProvider");
  }
  return context;
};

const MultiSelectRoot = ({
  values: value,
  onValuesChange: onValueChange,
  loop = false,
  className,
  children,
  dir,
  ...props
}: MultiSelectProps) => {
  const [inputValue, setInputValue] = React.useState("");
  const [open, setOpen] = React.useState<boolean>(false);
  const [activeIndex, setActiveIndex] = React.useState<number>(-1);

  const onValueChangeHandler = React.useCallback(
    (val: string) => {
      if (value.includes(val)) {
        onValueChange(value.filter((item: string) => item !== val));
      } else {
        onValueChange([...value, val]);
      }
    },
    [onValueChange, value]
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const moveNext = () => {
        const nextIndex = activeIndex + 1;
        setActiveIndex(
          nextIndex > value.length - 1 ? (loop ? 0 : -1) : nextIndex
        );
      };

      const movePrev = () => {
        const prevIndex = activeIndex - 1;
        setActiveIndex(prevIndex < 0 ? value.length - 1 : prevIndex);
      };

      if ((e.key === "Backspace" || e.key === "Delete") && value.length > 0) {
        if (inputValue.length === 0) {
          if (activeIndex !== -1 && activeIndex < value.length) {
            onValueChange(
              value.filter((item: any) => item !== value[activeIndex])
            );
            const newIndex = activeIndex - 1 < 0 ? 0 : activeIndex - 1;
            setActiveIndex(newIndex);
          } else {
            onValueChange(
              value.filter((item: any) => item !== value[value.length - 1])
            );
          }
        }
      } else if (e.key === "Enter") {
        setOpen(true);
      } else if (e.key === "Escape") {
        if (activeIndex !== -1) {
          setActiveIndex(-1);
        } else {
          setOpen(false);
        }
      } else if (dir === "rtl") {
        if (e.key === "ArrowRight") {
          movePrev();
        } else if (e.key === "ArrowLeft" && (activeIndex !== -1 || loop)) {
          moveNext();
        }
      } else {
        if (e.key === "ArrowLeft") {
          movePrev();
        } else if (e.key === "ArrowRight" && (activeIndex !== -1 || loop)) {
          moveNext();
        }
      }
    },
    [value, dir, activeIndex, loop, inputValue.length, onValueChange]
  );

  return (
    <MultiSelectContext.Provider
      value={{
        value,
        onValueChange: onValueChangeHandler,
        open,
        setOpen,
        inputValue,
        setInputValue,
        activeIndex,
        setActiveIndex,
      }}
    >
      <Command.CommandRoot
        onKeyDown={handleKeyDown}
        className={cn(
          "flex flex-col space-y-2 overflow-visible bg-transparent",
          className
        )}
        dir={dir}
        {...props}
      >
        {children}
      </Command.CommandRoot>
    </MultiSelectContext.Provider>
  );
};

const MultiSelectTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { value, onValueChange, activeIndex } = useMultiSelect();

  const mousePreventDefault = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "border-muted bg-background flex flex-wrap gap-1 rounded-lg border p-1 py-2",
        className
      )}
      {...props}
    >
      {value?.map((item, index) => (
        <Badge
          key={item}
          className={cn(
            "flex items-center gap-1 rounded-xl px-1",
            activeIndex === index && "ring-muted-foreground ring-2 "
          )}
          variant={"secondary"}
        >
          <span className="text-xs">{item}</span>
          <button
            aria-label={`Remove ${item} option`}
            aria-roledescription="button to remove option"
            type="button"
            onMouseDown={mousePreventDefault}
            onClick={() => onValueChange(item)}
          >
            <span className="sr-only">Remove {item} option</span>
            <RemoveIcon className="hover:stroke-destructive h-4 w-4" />
          </button>
        </Badge>
      ))}
      {children}
    </div>
  );
});

MultiSelectTrigger.displayName = "MultiSelectTrigger";

const MultiSelectInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => {
  const { setOpen, inputValue, setInputValue, activeIndex, setActiveIndex } =
    useMultiSelect();
  return (
    <CommandPrimitive.Input
      {...props}
      ref={ref}
      value={inputValue}
      onValueChange={activeIndex === -1 ? setInputValue : undefined}
      onBlur={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onClick={() => setActiveIndex(-1)}
      className={cn(
        "placeholder:text-muted-foreground ml-2 flex-1 bg-transparent outline-none",
        className,
        activeIndex !== -1 && "caret-transparent"
      )}
    />
  );
});

MultiSelectInput.displayName = "MultiSelectInput";

const MultiSelectContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ children }, ref) => {
  const { open } = useMultiSelect();
  return (
    <div ref={ref} className="relative">
      {open && children}
    </div>
  );
});

MultiSelectContent.displayName = "MultiSelectContent";

const MultiSelectList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, children }, ref) => {
  return (
    <Command.CommandList
      ref={ref}
      className={cn(
        "scrollbar-thin scrollbar-track-transparent scrollbar-thumb-muted-foreground dark:scrollbar-thumb-muted scrollbar-thumb-rounded-lg bg-background border-muted absolute top-0 z-10 flex w-full flex-col gap-2 rounded-md border p-2 shadow-md transition-colors",
        className
      )}
    >
      {children}
      <Command.CommandEmpty>
        <span className="text-muted-foreground">No results found</span>
      </Command.CommandEmpty>
    </Command.CommandList>
  );
});

MultiSelectList.displayName = "MultiSelectList";

const MultiSelectItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  { value: string } & React.ComponentPropsWithoutRef<
    typeof CommandPrimitive.Item
  >
>(({ className, value, children, ...props }, ref) => {
  const { value: Options, onValueChange, setInputValue } = useMultiSelect();

  const mousePreventDefault = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const isIncluded = Options?.includes(value);
  return (
    <Command.CommandItem
      ref={ref}
      {...props}
      onSelect={() => {
        onValueChange(value);
        setInputValue("");
      }}
      className={cn(
        "flex cursor-pointer justify-between rounded-md px-2 py-1 transition-colors ",
        className,
        isIncluded && "cursor-default opacity-50",
        props.disabled && "cursor-not-allowed opacity-50"
      )}
      onMouseDown={mousePreventDefault}
    >
      {children}
      {isIncluded && <Check className="h-4 w-4" />}
    </Command.CommandItem>
  );
});

MultiSelectItem.displayName = "MultiSelectItem";

const MultiSelect = {
  MultiSelectRoot,
  MultiSelectTrigger,
  MultiSelectInput,
  MultiSelectContent,
  MultiSelectList,
  MultiSelectItem,
};

export default MultiSelect;
