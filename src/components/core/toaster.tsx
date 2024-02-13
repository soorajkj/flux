"use client";

import { useToast } from "~hooks/use-toast";
import Toast from "~components/core/toast";

export default function Toaster() {
  const { toasts } = useToast();

  return (
    <Toast.ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast.ToastRoot key={id} {...props}>
            <div className="grid gap-1">
              {title && <Toast.ToastTitle>{title}</Toast.ToastTitle>}
              {description && (
                <Toast.ToastDescription>{description}</Toast.ToastDescription>
              )}
            </div>
            {action}
            <Toast.ToastClose />
          </Toast.ToastRoot>
        );
      })}
      <Toast.ToastViewport />
    </Toast.ToastProvider>
  );
}
