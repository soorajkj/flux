"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("px-3 py-3", className)}
      classNames={{
        nav: "flex items-center",
        caption: "relative flex items-center text-zinc-300 mb-2",
        caption_label: "flex-1 text-center",
        nav_button: "h-7 w-7 p-0",
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        head: "text-zinc-300",
        head_row: "font-medium",
        head_cell: "size-8 font-normal",
        cell: "size-8 text-zinc-400 rounded-sm",
        day: "flex items-center justify-center size-8 leading-none rounded",
        day_today: "size-8 bg-red-500 text-zinc-50 !rounded-full",
        day_selected: "bg-blue-500 text-zinc-50",
        day_hidden: "invisible",
        ...classNames,
      }}
      components={{
        IconLeft: ({}) => <ChevronLeft className="h-4 w-4" />,
        IconRight: ({}) => <ChevronRight className="h-4 w-4" />,
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export default Calendar;
