/* eslint-disable prettier/prettier */
import { Button, Toast, ToastProps } from "@ignite-ui/react";
import { Meta, StoryObj } from "@storybook/react";
import { useEffect, useRef, useState } from "react";

const DemoToast = (props: ToastProps) => {
  const [isOpen, setOpen] = useState(false);

  const timeRef = useRef(0);

  useEffect(() => {
    return () => clearTimeout(timeRef.current);
  }, []);

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(false);
          window.clearTimeout(timeRef.current);
          timeRef.current = window.setTimeout(() => setOpen(true), 100);
        }}
      >
        Agendar
      </Button>
      <Toast open={isOpen} onOpenChange={setOpen} {...props} />
    </div>
  );
};
export default {
  title: "Form/Toast",
  component: DemoToast,
  args: {
    title: "Agendamento realizado",
    description: "Terça-feira, 20 de dezembro as 08:00 Am",
  },
} as Meta<ToastProps>;

export const Primary: StoryObj<ToastProps> = {};
