import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({
  className,
  ...props
}) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "sku-input flex min-h-[80px] w-full rounded-lg py-4 px-4 text-base text-primary-text placeholder:text-primary-text/45 disabled:cursor-not-allowed disabled:opacity-50 resize-none transition-all duration-150",
        className
      )}
      {...props} />
  );
}

export { Textarea }
