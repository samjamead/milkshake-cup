'use client'

import { Loader } from 'lucide-react'
import { useState, useEffect } from 'react'

type RandomDrawProps = {
  names: string[]
  selectedNames: string[]
  groupName: string
  drawDone?: boolean
}

export default function SolariBoard({
  names,
  selectedNames,
  groupName,
  drawDone = false,
}: RandomDrawProps) {
  const [currentNameIndex, setCurrentNameIndex] = useState<number>(0)
  const [currentNames, setCurrentNames] = useState<string[]>(['', '', ''])
  const [drawing, setDrawing] = useState<boolean>(false)

  useEffect(() => {
    if (drawDone) {
      setCurrentNames(selectedNames)
      setCurrentNameIndex(selectedNames.length)
    }
  }, [drawDone, selectedNames])

  const startDraw = () => {
    if (drawing || currentNameIndex >= selectedNames.length) return
    setDrawing(true)

    let counter = 0
    const interval = setInterval(() => {
      setCurrentNames((prevNames) => {
        const updatedNames = [...prevNames]
        updatedNames[currentNameIndex] = names[counter % names.length]
        return updatedNames
      })
      counter++
    }, 50)

    setTimeout(() => {
      clearInterval(interval)
      setCurrentNames((prevNames) => {
        const updatedNames = [...prevNames]
        updatedNames[currentNameIndex] = selectedNames[currentNameIndex]
        return updatedNames
      })
      setCurrentNameIndex((prevIndex) => prevIndex + 1)
      setDrawing(false)
    }, 2500) // Simulates the draw time
  }

  return (
    <div className='flex items-center justify-start gap-4 rounded-md bg-purple-400/15 p-3'>
      <h2 className='font-semibold'>{groupName}</h2>
      {!drawDone ? (
        <button
          onClick={startDraw}
          className='flex h-8 w-28 items-center justify-center rounded bg-purple-500 px-2 py-1.5 text-center text-sm text-foreground transition duration-300 hover:bg-purple-600'
          disabled={drawing || currentNameIndex >= selectedNames.length}
        >
          {drawing ? <Loader className='animate-spin' size={16} /> : 'Draw'}
        </button>
      ) : (
        <div className='w-28' />
      )}
      <p className='w-24'>{currentNames[0] || 'Player 1'}</p>
      <p className='w-24'>{currentNames[1] || 'Player 2'}</p>
      <p className='w-24'>{currentNames[2] || 'Player 3'}</p>
    </div>
  )
}
