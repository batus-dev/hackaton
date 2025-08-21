import { Pill } from './Pill'
import { Play, Heart, Star, Download } from 'lucide-react'

export function FlowStyleGuide() {
  return (
    <div className="p-8 space-y-12 max-w-6xl mx-auto">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-flow-primary to-flow-primary-dark bg-clip-text text-transparent">
          Flow Design System
        </h1>
        <p className="text-text-dim text-lg">
          Componentes y estilos inspirados en el diseño de Flow
        </p>
      </div>

      {/* Colors */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Colores</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="card-flow text-center">
            <div className="w-full h-16 bg-flow-primary rounded-lg mb-3"></div>
            <p className="text-sm font-medium">Flow Primary</p>
            <p className="text-xs text-text-dim">#21DBAA</p>
          </div>
          <div className="card-flow text-center">
            <div className="w-full h-16 bg-flow-primary-dark rounded-lg mb-3"></div>
            <p className="text-sm font-medium">Flow Primary Dark</p>
            <p className="text-xs text-text-dim">#57dfb7</p>
          </div>
          <div className="card-flow text-center">
            <div className="w-full h-16 bg-bg-surface rounded-lg mb-3 border border-border-color"></div>
            <p className="text-sm font-medium">Surface</p>
            <p className="text-xs text-text-dim">#1A1B1F</p>
          </div>
          <div className="card-flow text-center">
            <div className="w-full h-16 bg-bg-surface-2 rounded-lg mb-3"></div>
            <p className="text-sm font-medium">Surface 2</p>
            <p className="text-xs text-text-dim">#222326</p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Botones</h2>
        <div className="flex flex-wrap gap-4">
          <button className="btn-flow btn-flow-primary">
            <Play className="w-4 h-4" />
            Primary Button
          </button>
          <button className="btn-flow btn-flow-secondary">
            <Heart className="w-4 h-4" />
            Secondary Button
          </button>
          <button className="btn-flow btn-flow-ghost">
            <Star className="w-4 h-4" />
            Ghost Button
          </button>
          <button className="btn-flow btn-flow-icon">
            <Download className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Pills */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Pills</h2>
        <div className="flex flex-wrap gap-3">
          <Pill emoji="😂" text="Tengo ganas de reirme un rato" />
          <Pill emoji="🤯" text="Necesito algo emocionante" selected />
          <Pill emoji="🥹" text="Estoy para un buen drama" />
          <Pill emoji="🍿" text="Quiero una miniserie atrapante" removable />
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Cards</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card-flow">
            <h3 className="text-lg font-semibold mb-2">Card Normal</h3>
            <p className="text-text-dim">Esta es una card normal con el estilo de Flow.</p>
          </div>
          <div className="card-flow-highlight">
            <h3 className="text-lg font-semibold mb-2">Card Destacada</h3>
            <p className="text-text-dim">Esta es una card destacada con efectos especiales.</p>
          </div>
          <div className="card-flow card-flow-interactive">
            <h3 className="text-lg font-semibold mb-2">Card Interactiva</h3>
            <p className="text-text-dim">Esta card tiene efectos hover mejorados.</p>
          </div>
        </div>
      </section>

      {/* Inputs */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Inputs</h2>
        <div className="space-y-4 max-w-md">
          <input 
            type="text" 
            placeholder="Input normal" 
            className="input-flow"
          />
          <textarea 
            placeholder="Textarea con estilo Flow" 
            className="input-flow h-24 resize-none"
          />
        </div>
      </section>

      {/* Badges */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Badges</h2>
        <div className="flex flex-wrap gap-3">
          <span className="badge-flow">Default</span>
          <span className="badge-flow-success">Success</span>
          <span className="badge-flow-warning">Warning</span>
          <span className="badge-flow-error">Error</span>
        </div>
      </section>

      {/* Progress */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Progress</h2>
        <div className="space-y-4">
          <div className="progress-flow">
            <div className="progress-flow-bar" style={{ width: '75%' }}></div>
          </div>
          <div className="progress-flow">
            <div className="progress-flow-bar" style={{ width: '45%' }}></div>
          </div>
        </div>
      </section>

      {/* Animations */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Animaciones</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card-flow animate-flow-fade-in">
            <p className="text-center">Fade In</p>
          </div>
          <div className="card-flow animate-flow-slide-in">
            <p className="text-center">Slide In</p>
          </div>
          <div className="card-flow animate-flow-pulse">
            <p className="text-center">Pulse</p>
          </div>
          <div className="card-flow animate-flow-glow">
            <p className="text-center">Glow</p>
          </div>
        </div>
      </section>
    </div>
  )
}
