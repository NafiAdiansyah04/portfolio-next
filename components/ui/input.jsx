import * as React from "react"

import { cn } from "@/lib/utils"

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "sku-input flex h-[48px] w-full rounded-lg font-light text-primary-text text-base placeholder:text-primary-text/45 outline-none px-4 py-5 transition-all duration-150",
        className
      )}
      {...props} />
  );
}

export { Input }
