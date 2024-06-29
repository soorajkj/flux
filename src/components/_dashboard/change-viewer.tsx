"use client";

import * as React from "react";
import {
  CalendarDays,
  Columns3,
  List,
  StretchHorizontal,
  Table,
} from "lucide-react";
import Tabs from "@/components/core/tabs";
import AddTodo from "@/components/dashboard/add-todo";
import { columns } from "@/components/dashboard/columns";
import ViewBoard from "@/components/dashboard/view-board";
import ViewCalendar from "@/components/dashboard/view-calendar";
import ViewList from "@/components/dashboard/view-list";
import ViewTable from "@/components/dashboard/view-table";
import ViewTimeline from "@/components/dashboard/view-timeline";

interface View {
  view: string;
  icon: React.ReactElement;
  component: React.ReactNode;
}

interface ChangeViewerProps {
  todos: any[];
}

export default function ChangeViewer({ todos }: ChangeViewerProps) {
  const views: View[] = [
    {
      view: "table",
      icon: <Table />,
      component: <ViewTable columns={columns} data={todos} />,
    },
    { view: "list", icon: <List />, component: <ViewList /> },
    { view: "board", icon: <Columns3 />, component: <ViewBoard /> },
    {
      view: "timeline",
      icon: <StretchHorizontal />,
      component: <ViewTimeline />,
    },
    { view: "calendar", icon: <CalendarDays />, component: <ViewCalendar /> },
  ];
  return (
    <React.Fragment>
      <div className="my-8 flex items-center justify-between">
        <h2 className="text-3xl font-semibold text-neutral-50">Tweede</h2>
        <div className="flex items-center gap-2">
          <AddTodo />
        </div>
      </div>
      <Tabs.TabsRoot defaultValue={views[0].view}>
        <Tabs.TabsList>
          {views.map((view, i) => (
            <Tabs.TabsTrigger key={i} value={view.view}>
              <div className="flex select-none items-center gap-2">
                {React.cloneElement(view.icon, { className: "w-4 h-4" })}
                <span className="capitalize">{view.view}</span>
              </div>
            </Tabs.TabsTrigger>
          ))}
        </Tabs.TabsList>
        {views.map((view, i) => (
          <Tabs.TabsContent key={i} value={view.view} className="my-0">
            {view.component}
          </Tabs.TabsContent>
        ))}
      </Tabs.TabsRoot>
    </React.Fragment>
  );
}
