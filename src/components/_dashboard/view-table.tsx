"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";
import Button from "@/components/core/button";
import Dropdown from "@/components/core/dropdown";
import Input from "@/components/core/input";
import Table from "@/components/core/table";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export default function ViewTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <React.Fragment>
      <div className="flex items-center justify-end gap-4 py-4">
        <Input
          placeholder="Search something..."
          value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
          onChange={(event) => {
            table.getColumn("title")?.setFilterValue(event.target.value);
          }}
          className="ml-auto max-w-96 dark:bg-transparent"
        />
        <Dropdown.DropdownRoot>
          <Dropdown.DropdownTrigger asChild>
            <Button variant="outline">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </Dropdown.DropdownTrigger>
          <Dropdown.DropdownContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <Dropdown.DropdownCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </Dropdown.DropdownCheckboxItem>
                );
              })}
          </Dropdown.DropdownContent>
        </Dropdown.DropdownRoot>
      </div>
      <Table.TableRoot>
        <Table.TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Table.TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Table.TableHead>
                );
              })}
            </Table.TableRow>
          ))}
        </Table.TableHeader>
        <Table.TableBody>
          {data && table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <Table.TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <Table.TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Table.TableCell>
                ))}
              </Table.TableRow>
            ))
          ) : (
            <Table.TableRow>
              <Table.TableCell
                colSpan={columns.length}
                className="h-24 text-center"
              >
                No results.
              </Table.TableCell>
            </Table.TableRow>
          )}
        </Table.TableBody>
      </Table.TableRoot>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}
