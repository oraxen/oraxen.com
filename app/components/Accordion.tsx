// Tremor Accordion [v0.0.1]

import * as AccordionPrimitives from "@radix-ui/react-accordion";
import { RiAddLine } from "@remixicon/react";
import React from "react";

import { cx } from "../lib/utils";

const Accordion = AccordionPrimitives.Root;

Accordion.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Trigger>
>(({ className, children, ...props }, forwardedRef) => (
  <AccordionPrimitives.Header className="flex">
    <AccordionPrimitives.Trigger
      className={cx(
        // base
        "group flex flex-1 cursor-pointer items-center justify-between py-3 text-left text-sm font-medium leading-none",
        // text color
        "text-[var(--foreground)]",
        // disabled
        "data-[disabled]:text-[var(--foreground-secondary)] data-[disabled]:cursor-default",
        //focus
        "focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-500",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <RiAddLine
        className={cx(
          // base
          "size-5 shrink-0 transition-transform duration-150 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:-rotate-45",
          // text color
          "text-[var(--foreground-secondary)]",
          // disabled
          "group-data-[disabled]:text-gray-400"
        )}
        aria-hidden="true"
        focusable="false"
      />
    </AccordionPrimitives.Trigger>
  </AccordionPrimitives.Header>
));

AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Content>
>(({ className, children, ...props }, forwardedRef) => (
  <AccordionPrimitives.Content
    ref={forwardedRef}
    className={cx(
      "transform-gpu data-[state=closed]:animate-accordionClose data-[state=open]:animate-accordionOpen"
    )}
    {...props}
  >
    <div
      className={cx(
        // base
        "overflow-hidden pb-4 text-sm",
        // text color
        "text-[var(--foreground-secondary)]",
        className
      )}
    >
      {children}
    </div>
  </AccordionPrimitives.Content>
));

AccordionContent.displayName = "AccordionContent";

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitives.Item>
>(({ className, ...props }, forwardedRef) => (
  <AccordionPrimitives.Item
    ref={forwardedRef}
    className={cx(
      // base
      "overflow-hidden border-b first:mt-0",
      // border color (use theme subtle border for both light and dark)
      "border-[var(--border-subtle)]",
      className
    )}
    tremor-id="tremor-raw"
    {...props}
  />
));

AccordionItem.displayName = "AccordionItem";

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
