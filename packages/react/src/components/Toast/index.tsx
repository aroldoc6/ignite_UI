/* eslint-disable prettier/prettier */
import * as ToastPrimitive from "@radix-ui/react-toast";
import { ComponentProps } from "react";
import { X } from "phosphor-react";
import {
  ToastRoot,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastViewport,
} from "./styles";

export type ToastProps = ComponentProps<typeof ToastRoot> & {
  title: string;
  description?: string;
};

export function Toast({ title, description, ...props }: ToastProps) {
  return (
    <ToastPrimitive.Provider>
      <ToastRoot {...props}>
        <ToastTitle>{title}</ToastTitle>
        {description && <ToastDescription>{description}</ToastDescription>}

        <ToastClose>
          <X weight="light" size={20} />
        </ToastClose>
      </ToastRoot>
      <ToastViewport />
    </ToastPrimitive.Provider>
  );
}

Toast.displayName = "Toast";
