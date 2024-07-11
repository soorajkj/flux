"use client";

import * as React from "react";
import { Priorities, Statuses, TodoSchema } from "@/schemas/todo";
import { ColumnDef } from "@tanstack/react-table";
import { format } from "date-fns";
import {
  Calendar,
  CircleDot,
  Heading1,
  Loader,
  MoreHorizontal,
  MoveUpRight,
  Star,
  Tag,
  Text,
  Trash2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/core/button";
import Checkbox from "@/components/core/checkbox";
import Dropdown from "@/components/core/dropdown";

const StatusesRec: Record<(typeof Statuses)[number], string> = {
  "Not started": "bg-purple-500 text-purple-800",
  "In progress": "bg-blue-500 text-blue-800",
  Done: "bg-green-500 text-green-800",
};

const PrioritiesRec: Record<(typeof Priorities)[number], string> = {
  Low: "bg-sky-500",
  Medium: "bg-green-500",
  High: "bg-red-500",
};

export const columns: ColumnDef<typeof TodoSchema>[] = [
  {
    id: "select",
    header: ({ table }) => {
      const isAllSelected = table.getIsAllPageRowsSelected();
      const isSomeSelected =
        table.getIsSomePageRowsSelected() && !isAllSelected;

      return (
        <Checkbox
          checked={(isSomeSelected && "indeterminate") || isAllSelected}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      );
    },
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
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
    cell: ({ row }) => {
      return (
        <p className="w-full max-w-60 truncate">{row.getValue("title")}</p>
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
    cell: ({ row }) => {
      return (
        <p className="w-full max-w-96 truncate">
          {row.getValue("description")}
        </p>
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
      const status = row.getValue("status") as (typeof Statuses)[number];

      return (
        <p
          className={cn(
            "inline-flex items-center space-x-2 whitespace-nowrap rounded-full bg-opacity-30 px-2 py-0.5 leading-none",
            StatusesRec[status]
          )}
        >
          <span
            className={cn(
              "inline-block size-2 rounded-full",
              StatusesRec[status]
            )}
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
          <span className="leading-none">Due Date</span>
        </div>
      );
    },
    cell: ({ row }) => {
      return <p>{format(new Date(row.getValue("dueDate")), "MMM d, yyyy")}</p>;
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
      const priority = row.getValue("priority") as (typeof Priorities)[number];
      return (
        <p
          className={cn(
            "inline-flex rounded bg-opacity-30 px-2 py-0.5 leading-none text-zinc-300",
            PrioritiesRec[priority]
          )}
        >
          {priority}
        </p>
      );
    },
  },
  {
    accessorKey: "todoTags",
    header: () => {
      return (
        <div className="flex items-center gap-2">
          <Tag className="h-4 w-4" />
          <span className="leading-none">Tags</span>
        </div>
      );
    },
    cell: ({ row }) => {
      const tags = row.getValue("todoTags") as {
        id: string;
        tag: { name: string };
      }[];
      return (
        <div className="flex flex-wrap gap-2">
          {tags?.map((_, i: number) => (
            <p
              key={i}
              className="rounded bg-blue-600 bg-opacity-80 px-2 py-1 leading-none text-white"
            >
              {_.tag.name}
            </p>
          ))}
        </div>
      );
    },
  },
  {
    id: "actions",
    cell: () => {
      return (
        <Dropdown.DropdownRoot>
          <Dropdown.DropdownTrigger asChild>
            <Button variant="ghost" className="h-7 w-7 space-x-0 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </Dropdown.DropdownTrigger>
          <Dropdown.DropdownContent align="end">
            <Dropdown.DropdownItem className="space-x-2">
              <MoveUpRight className="h-4 w-4" />
              <span>Open / Edit</span>
            </Dropdown.DropdownItem>
            <Dropdown.DropdownItem className="space-x-2">
              <Star className="h-4 w-4" />
              <span>Add to Favorites</span>
            </Dropdown.DropdownItem>
            <Dropdown.DropdownItem className="space-x-2">
              <Trash2 className="h-4 w-4" />
              <span>Delete</span>
            </Dropdown.DropdownItem>
          </Dropdown.DropdownContent>
        </Dropdown.DropdownRoot>
      );
    },
    enableHiding: false,
  },
];
