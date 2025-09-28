import { analysisControllerApi } from "@/api"
import { Button } from "@/components/ui/button"
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble"
import { ChatInput } from "@/components/ui/chat/chat-input"
import { ChatMessageList } from "@/components/ui/chat/chat-message-list"
import {
  ExpandableChatFooter,
  ExpandableChatHeader,
} from "@/components/ui/chat/expandable-chat"
import { LucideEraser, Send } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface Message {
  role: "user" | "assistant"
  content: string
}

const reactions: [number, string][] = [
  [0.5, "😄"],
  [0.05, "🙂"],
  [-0.05, "😐"],
  [-0.5, "🙁"],
]

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [input, setInput] = useState("")

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!input || !input.trim()) return
    setIsLoading(true)

    const userMessage: Message = { role: "user", content: input }
    let selectedReaction = "😠"

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    analysisControllerApi
      .analyzeText({
        queries: { text: input },
      })
      .then((polarityScore) => {
        for (const [threshold, reaction] of reactions) {
          if (polarityScore.compound > threshold) {
            selectedReaction = reaction
            break
          }
        }

        const botMessage: Message = {
          role: "assistant",
          content: `El análisis de sentimientos indica que tu mensaje es: ${selectedReaction}`,
        }

        setMessages((prev) => [...prev, botMessage])
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const formRef = useRef<HTMLFormElement>(null)

  // Scroll to bottom when messages change
  useEffect(() => {
    const $button = document.getElementById("scroll-to-bottom-button")
    if ($button) {
      $button.click()
    }
  }, [messages])

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if (isLoading || !input) return
      handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>)
    }
  }

  return (
    <div className="mx-auto flex h-svh max-h-svh max-w-7xl flex-col px-4 pb-4">
      <ExpandableChatHeader className="flex-col justify-center gap-2 text-center">
        <h1 className="text-4xl font-bold">Análisis de Sentimientos</h1>
        <p>Escribe cualquier mensaje para analizar su sentimiento</p>
        <div className="flex items-center gap-2 pt-2">
          <Button variant="secondary" onClick={() => setMessages([])}>
            Limpiar Chat <LucideEraser className="ml-2" />
          </Button>
        </div>
      </ExpandableChatHeader>
      <div className="min-h-0 flex-1">
        <ChatMessageList
          className="bg-muted/25 flex min-h-0 flex-1 overflow-y-auto"
          smooth
        >
          {/* Initial message */}
          <ChatBubble variant="received">
            <ChatBubbleAvatar src="" fallback="🤖" />
            <ChatBubbleMessage>
              Hola, soy tu asistente de análisis de sentimientos. Escribe algo y
              te diré si es positivo, negativo o neutral.
            </ChatBubbleMessage>
          </ChatBubble>

          {/* Messages */}
          {messages &&
            messages.map((message, index) => (
              <ChatBubble
                key={index}
                variant={message.role == "user" ? "sent" : "received"}
              >
                <ChatBubbleAvatar
                  src=""
                  fallback={message.role == "user" ? "👨🏽" : "🤖"}
                />
                <ChatBubbleMessage
                  variant={message.role == "user" ? "sent" : "received"}
                >
                  {message.content}
                </ChatBubbleMessage>
              </ChatBubble>
            ))}

          {/* Loading */}
          {isLoading && (
            <ChatBubble variant="received">
              <ChatBubbleAvatar src="" fallback="🤖" />
              <ChatBubbleMessage isLoading />
            </ChatBubble>
          )}
        </ChatMessageList>
      </div>
      <ExpandableChatFooter className="bg-muted/25">
        <form
          ref={formRef}
          className="relative flex gap-2"
          onSubmit={handleSubmit}
        >
          <ChatInput
            value={input}
            onChange={handleInputChange}
            onKeyDown={onKeyDown}
            className="bg-background min-h-12 shadow-none"
          />
          <Button
            className="absolute top-1/2 right-2 -translate-y-1/2 transform"
            type="submit"
            size="icon"
            disabled={isLoading || !input || !input.trim()}
          >
            <Send className="size-4" />
          </Button>
        </form>
      </ExpandableChatFooter>
    </div>
  )
}
