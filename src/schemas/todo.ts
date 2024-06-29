import { z } from "zod";

export const PRIORITIES = ["Low", "Medium", "High"] as const;
export const STATUSES = ["Not started", "In progress", "Done"] as const;

export const TodoSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().optional(),
  due: z.date({ required_error: "Due date is required" }),
  status: z.enum(STATUSES, { required_error: "Must select status" }),
  priority: z.enum(PRIORITIES, { required_error: "Select priority" }),
});
