"use client";

import * as React from "react";
import { PRIORITIES, STATUSES, TodoSchema } from "@/schemas/todo";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import { Calendar, CircleDot, Heading1, Loader, Tag, Text } from "lucide-react";
import { cn } from "@/lib/utils";

const statuses: Record<(typeof STATUSES)[number], string> = {
  "Not started": "bg-purple-500",
  "In progress": "bg-blue-500",
  Done: "bg-green-500",
};

const priorities: Record<(typeof PRIORITIES)[number], string> = {
  Low: "bg-sky-500",
  Medium: "bg-green-500",
  High: "bg-red-500",
};

export const columns: ColumnDef<typeof TodoSchema>[] = [
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2"
          onClick={() => {
            column.toggleSorting(column.getIsSorted() === "asc");
          }}
        >
          <Heading1 className="h-4 w-4" />
          <span className="leading-none">Title</span>
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: () => {
      return (
        <div className="flex items-center gap-2">
          <Text className="h-4 w-4" />
          <span className="leading-none">Description</span>
        </div>
      );
    },
  },
  {
    accessorKey: "status",
    header: () => {
      return (
        <div className="flex items-center gap-2">
          <Loader className="h-4 w-4" />
          <span className="leading-none">Status</span>
        </div>
      );
    },
    cell: ({ row }) => {
      const status = row.getValue("status") as (typeof STATUSES)[number];

      return (
        <p
          className={cn(
            "inline-flex items-center space-x-2 rounded-full bg-opacity-40 px-2 py-0.5 leading-none text-neutral-300",
            statuses[status]
          )}
        >
          <span
            className={cn("inline-block size-2 rounded-full", statuses[status])}
          ></span>
          <span>{status}</span>
        </p>
      );
    },
  },
  {
    accessorKey: "dueDate",
    header: () => {
      return (
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          <span className="leading-none">Due</span>
        </div>
      );
    },
    cell: ({ row }) => {
      return format(new Date(row.getValue("dueDate")), "MMM d, yyyy");
    },
  },
  {
    accessorKey: "priority",
    header: () => {
      return (
        <div className="flex items-center gap-2">
          <CircleDot className="h-4 w-4" />
          <span className="leading-none">Priority</span>
        </div>
      );
    },
    cell: ({ row }) => {
      const priority = row.getValue("priority") as (typeof PRIORITIES)[number];
      return (
        <p
          className={cn(
            "inline-flex rounded bg-opacity-40 px-2 py-0.5 leading-none text-neutral-300",
            priorities[priority]
          )}
        >
          {priority}
        </p>
      );
    },
  },
  {
    accessorKey: "tags",
    header: () => {
      return (
        <div className="flex items-center gap-2">
          <Tag className="h-4 w-4" />
          <span className="leading-none">Tags</span>
        </div>
      );
    },
    cell: () => {
      return (
        <div className="flex flex-wrap gap-2">
          {["Peronal", "Work", "Coding"].map((_, i) => (
            <p
              key={i}
              className="rounded bg-sky-500 bg-opacity-40 px-2 py-0.5 leading-none text-neutral-300"
            >
              {_}
            </p>
          ))}
        </div>
      );
    },
  },
];
