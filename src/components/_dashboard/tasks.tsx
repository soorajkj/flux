"use client";

import * as React from "react";
import {
  CalendarDays,
  Columns3,
  List,
  Plus,
  StretchHorizontal,
  Table,
} from "lucide-react";
import Button from "@/components/core/button";
import Sheet from "@/components/core/sheet";
import Tabs from "@/components/core/tabs";
import AddTodo from "@/components/dashboard/add-todo";
import TableView from "@/components/dashboard/table-view";

export default function Tasks() {
  return (
    <section className="relative mx-auto w-full max-w-screen-2xl py-12">
      <Tabs.TabsRoot defaultValue="table">
        <div className="mb-8 flex items-baseline gap-4">
          <Tabs.TabsList className="flex-1">
            <Tabs.TabsTrigger value="table">
              <Table width={16} height={16} />
              <span className="ml-2">Table</span>
            </Tabs.TabsTrigger>
            <Tabs.TabsTrigger value="list" disabled>
              <List width={16} height={16} />
              <span className="ml-2">List</span>
            </Tabs.TabsTrigger>
            <Tabs.TabsTrigger value="board" disabled>
              <Columns3 width={16} height={16} />
              <span className="ml-2">Board</span>
            </Tabs.TabsTrigger>
            <Tabs.TabsTrigger value="calendar" disabled>
              <CalendarDays width={16} height={16} />
              <span className="ml-2">Calendar</span>
            </Tabs.TabsTrigger>
            <Tabs.TabsTrigger value="timeline" disabled>
              <StretchHorizontal width={16} height={16} />
              <span className="ml-2">Timeline</span>
            </Tabs.TabsTrigger>
          </Tabs.TabsList>
          <div className="flex items-center gap-4">
            <Sheet.SheetRoot>
              <Sheet.SheetTrigger asChild>
                <Button className="h-7 space-x-1 px-2 text-sm">
                  <Plus width={16} height={16} />
                  <span>New</span>
                </Button>
              </Sheet.SheetTrigger>
              <Sheet.SheetContent
                side="right"
                className="w-full max-w-screen-md"
              >
                <AddTodo />
              </Sheet.SheetContent>
            </Sheet.SheetRoot>
          </div>
        </div>
        <Tabs.TabsContent value="table">
          <TableView />
        </Tabs.TabsContent>
        <Tabs.TabsContent value="list"></Tabs.TabsContent>
        <Tabs.TabsContent value="board"></Tabs.TabsContent>
        <Tabs.TabsContent value="calendar"></Tabs.TabsContent>
        <Tabs.TabsContent value="timeline"></Tabs.TabsContent>
      </Tabs.TabsRoot>
    </section>
  );
}
