'use client'

import { useEffect } from 'react'

export interface BubblesProps {
  /** Número de bolhas */
  count?: number
  /** Tamanho máximo da bolha em px */
  maxSize?: number
  /** Velocidade (duração) da animação de subida em segundos */
  riseSpeed?: number
}

const Bubbles: React.FC<BubblesProps> = ({
  count = 6,
  maxSize = 250,
  riseSpeed = 3.5,
}) => {
  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const bubbles = document.querySelectorAll('.bubble') as NodeListOf<HTMLElement>
    // biome-ignore lint/complexity/noForEach: <explanation>
    bubbles.forEach((bubble) => {
      // Tamanho aleatório entre 50px e maxSize
      const size = 50 + Math.random() * (maxSize - 50)
      bubble.style.width = `${size}px`
      bubble.style.height = `${size}px`

      // Posição horizontal aleatória e inicia no topo
      bubble.style.left = `${Math.random() * 100}%`
      bubble.style.top = '0px'

      // z-index randômico entre 0 e 50
      bubble.style.zIndex = `${Math.floor(Math.random() * 51)}`

      // Define duração e delay da animação com base em riseSpeed
      bubble.style.animationDuration = `${riseSpeed}s`
      bubble.style.animationDelay = `${-Math.random() * riseSpeed}s`

      // Opacidade baseada no tamanho
      bubble.style.opacity = `${0.95 - (size / maxSize) * 0.35}`

      // Movimento lateral aleatório
      bubble.style.setProperty('--direction', `${Math.random() > 0.5 ? 1 : -1}`)
      bubble.style.setProperty('--offset', `${10 + Math.random() * 20}px`)
    })
  }, [count, maxSize, riseSpeed])

  return (
    <div className="absolute inset-0 pointer-events-none">
      {Array.from({ length: count }).map((_, i) => (
        <div
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={i}
          className="bubble absolute bg-white/10 shadow-lg transition-opacity duration-300"
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default Bubbles