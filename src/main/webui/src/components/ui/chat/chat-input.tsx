import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import * as React from "react"

type ChatInputProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  className?: string
}

const ChatInput = React.forwardRef<HTMLTextAreaElement, ChatInputProps>(
  ({ className, ...props }, ref) => (
    <Textarea
      autoComplete="off"
      ref={ref}
      name="message"
      className={cn(
        "bg-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-full max-h-40 w-full resize-none items-center rounded-md px-4 py-3 text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
)
ChatInput.displayName = "ChatInput"

export { ChatInput }
