import * as React from "react";
import { ArrowUpRight, Ellipsis, Star, Trash2 } from "lucide-react";
import Table from "@/components/core/table";
import Button from "../core/button";
import Checkbox from "../core/checkbox";
import Dropdown from "../core/dropdown";

const invoices = [
  {
    Title: "Write project proposal",
    Description: "",
    Status: "In Progress",
    Due: "2024-07-01",
    Proirity: "Low",
    Tags: ["Development", "AI", "Personal"],
  },
  {
    Title: "Schedule kick-off meeting",
    Description: "Schedule meeting with rp team",
    Status: "Not Started",
    Due: "2024-07-15",
    Proirity: "Low",
    Tags: ["Development", "AI", "Personal"],
  },
  {
    Title: "Review research results",
    Description: "Open AI integration with Tweede webapp",
    Status: "Completed",
    Due: "2024-06-25",
    Proirity: "Low",
    Tags: ["Development", "AI", "Personal"],
  },
  {
    Title: "Learn ReactJS, NextJS and prepare for full-time frontend interview",
    Description:
      "The modern web development landscape is dominated by powerful frameworks and libraries that streamline the creation of dynamic and responsive user interfaces. Among these, ReactJS and NextJS stand out as essential tools for frontend developers. Mastering these technologies not only enhances your ability to build sophisticated web applications but also prepares you for the competitive world of full-time frontend development roles. This guide is designed to provide a detailed roadmap for learning ReactJS and NextJS, coupled with effective strategies to excel in frontend interviews.",
    Status: "In Progress",
    Due: "2024-07-01",
    Proirity: "Low",
    Tags: ["Development", "AI", "Personal"],
  },
];

export default function TableView() {
  return (
    <Table.TableRoot>
      <Table.TableHeader>
        <Table.TableRow>
          <Table.TableHead></Table.TableHead>
          <Table.TableHead>Title</Table.TableHead>
          <Table.TableHead>Description</Table.TableHead>
          <Table.TableHead>Status</Table.TableHead>
          <Table.TableHead>Due</Table.TableHead>
          <Table.TableHead>Priority</Table.TableHead>
          <Table.TableHead>Tags</Table.TableHead>
          <Table.TableHead></Table.TableHead>
        </Table.TableRow>
      </Table.TableHeader>
      <Table.TableBody>
        {invoices.map((invoice, i) => (
          <Table.TableRow key={i}>
            <Table.TableCell>
              <Checkbox />
            </Table.TableCell>
            <Table.TableCell>
              <span className="block max-w-72 truncate">{invoice.Title}</span>
            </Table.TableCell>
            <Table.TableCell>
              <span className="block max-w-72 truncate">
                {invoice.Description}
              </span>
            </Table.TableCell>
            <Table.TableCell>
              <span className="rounded-full bg-yellow-500/20 px-1.5 py-0.5 text-xs text-zinc-800 dark:bg-yellow-500/20 dark:text-white">
                {invoice.Status}
              </span>
            </Table.TableCell>
            <Table.TableCell>{invoice.Due}</Table.TableCell>
            <Table.TableCell>
              <span className="rounded-full bg-emerald-500/20 px-1.5 py-0.5 text-xs text-zinc-800 dark:bg-emerald-500/20 dark:text-white">
                {invoice.Proirity}
              </span>
            </Table.TableCell>
            <Table.TableCell>
              {invoice.Tags.map((tag) => (
                <span
                  key={tag}
                  className="mr-2 rounded-full bg-violet-500/20 px-1.5 py-0.5 text-xs text-zinc-800 dark:bg-violet-500/20 dark:text-white"
                >
                  {tag}
                </span>
              ))}
            </Table.TableCell>
            <Table.TableCell>
              <Dropdown.DropdownRoot>
                <Dropdown.DropdownTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex h-7 w-7 items-center justify-center p-0"
                  >
                    <Ellipsis width={16} height={16} />
                  </Button>
                </Dropdown.DropdownTrigger>
                <Dropdown.DropdownContent side="bottom" align="end">
                  <Dropdown.DropdownItem>
                    <Star width={16} height={16} />
                    <span className="ml-2">Add to Favorites</span>
                  </Dropdown.DropdownItem>
                  <Dropdown.DropdownItem>
                    <Trash2 width={16} height={16} />
                    <span className="ml-2">Delete</span>
                  </Dropdown.DropdownItem>
                  <Dropdown.DropdownSeparator />
                  <Dropdown.DropdownItem>
                    <ArrowUpRight width={16} height={16} />
                    <span className="ml-2">Open</span>
                  </Dropdown.DropdownItem>
                </Dropdown.DropdownContent>
              </Dropdown.DropdownRoot>
            </Table.TableCell>
          </Table.TableRow>
        ))}
      </Table.TableBody>
    </Table.TableRoot>
  );
}
