import { createElement, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cx } from "~lib/utils";

type TitleStyleProps = VariantProps<typeof TitleStyles>;

interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    Omit<TitleStyleProps, "level" | "weight"> {
  variant: `${NonNullable<TitleStyleProps["level"]>}/${NonNullable<
    TitleStyleProps["weight"]
  >}`;
}

const Title = forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  const { variant, className, ...rest } = props;
  const [level, weight] = variant.split("/") as [
    TitleStyleProps["level"],
    TitleStyleProps["weight"]
  ];

  const Comp: any = `h${level}`;

  return (
    <Comp
      ref={ref}
      className={cx(TitleStyles({ level, weight, className }))}
      {...rest}
    />
  );
});

interface TextProps
  extends React.ButtonHTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof TextStyles> {
  code?: boolean;
  mark?: boolean;
  underline?: boolean;
  delete?: boolean;
  strong?: boolean;
  keyboard?: boolean;
  italic?: boolean;
}

const Text = forwardRef<HTMLParagraphElement, TextProps>((props, ref) => {
  const {
    children,
    mark,
    code,
    underline,
    delete: del,
    strong,
    keyboard,
    italic,
    ...rest
  } = props;

  const decorators = [
    { tag: "code", active: code },
    { tag: "mark", active: mark },
    { tag: "u", active: underline },
    { tag: "del", active: del },
    { tag: "strong", active: strong },
    { tag: "kbd", active: keyboard },
    { tag: "i", active: italic },
  ];

  const decoratedContent = decorators.reduce((content, { tag, active }) => {
    if (active) return createElement(tag, {}, content);
    return content;
  }, children);

  return (
    <p ref={ref} {...rest}>
      {decoratedContent}
    </p>
  );
});

const Link = () => {
  return <p></p>;
};

Title.displayName = "Title";
Text.displayName = "Text";

const Typography = { Title, Text, Link };

export default Typography;

const TitleStyles = cva(["tessract-title font-family-outfit"], {
  variants: {
    level: {
      1: "text-7xl",
      2: "text-6xl",
      3: "text-5xl",
      4: "text-4xl",
      5: "text-3xl",
      6: "text-2xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
});

const TextStyles = cva([""]);
