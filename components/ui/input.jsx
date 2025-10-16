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
        "flex h-[48px] rounded-md border border-white/10 focus:border-accent font-light bg-primary text-base placeholder:text-white/60 outline-none px-4 py-5",
        className
      )}
      {...props} />
  );
}

export { Input }
