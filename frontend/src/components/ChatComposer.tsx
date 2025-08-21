import { useState, useRef } from 'react'
import { SendIcon, SparklesIcon } from './Icons'

interface ChatComposerProps {
  onSend: (message: string) => void
  isLoading: boolean
}

const SUGGESTION_PILLS = [
  '😂 Tengo ganas de reirme un rato',
  '🤯️ Necesito algo emocionante para el fin de semana',
  '🥹 Estoy para un buen drama',
  '🍿 Quiero una miniserie atrapante para maratonear'
]

export default function ChatComposer({ onSend, isLoading }: ChatComposerProps) {
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  const handlePillClick = (text: string) => {
    setInputValue(text)
    inputRef.current?.focus()
  }

  const handleSend = () => {
    const text = inputValue.trim()
    if (!text || isLoading) return
    onSend(text)
    setInputValue('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="fixed left-0 right-0 bottom-0 z-50 backdrop-blur-md border-t border-border composer-bg">
      <div className="max-w-container mx-auto px-4 py-3 pb-[calc(12px+env(safe-area-inset-bottom))]">
        {/* Suggestion Pills */}
        <div className="flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide">
          {SUGGESTION_PILLS.map((pill, index) => (
            <button
              key={index}
              onClick={() => handlePillClick(pill)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handlePillClick(pill)
                }
              }}
              className="flex-shrink-0 px-3 py-2 rounded-full text-sm border bg-surface-2 border-border text-text-dim hover:bg-surface hover:border-text-dim transition-all duration-150 snap-start min-w-max"
              role="button"
              tabIndex={0}
              aria-pressed="false"
              aria-label={`Usar sugerencia: ${pill}`}
            >
              {pill}
            </button>
          ))}
        </div>

        {/* Input Container */}
        <div className="relative flex items-center bg-surface border border-border rounded-full shadow-1 overflow-hidden">
          <div className="flex items-center pl-4">
            <SparklesIcon className="text-text-dim" size={20} />
          </div>
          <input
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="¿Para qué estás hoy?"
            className="flex-1 px-4 py-4 bg-transparent text-text placeholder-text-dim focus:outline-none"
            disabled={isLoading}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || !inputValue.trim()}
            className="m-2 p-3 bg-brand hover:bg-brand-press disabled:opacity-50 disabled:cursor-not-allowed text-bg rounded-full transition-all duration-150 shadow-1 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Enviar"
          >
            <SendIcon size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}