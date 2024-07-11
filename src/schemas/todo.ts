import { z } from "zod";

export const Priorities = ["Low", "Medium", "High"] as const;
export const Statuses = ["Not started", "In progress", "Done"] as const;

export const TodoSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().optional(),
  dueDate: z.date({ required_error: "Due date is required" }),
  status: z.enum(Statuses, { required_error: "Must select status" }),
  priority: z.enum(Priorities, { required_error: "Select priority" }),
  document: z.any(),
  tags: z.array(z.string()).nonempty({ message: "Select Tag" }),
});
