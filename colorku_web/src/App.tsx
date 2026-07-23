import { useState } from 'react'
import './App.css'
import type { PuzzleData } from './types'
import puzzleData from './data/puzzles.json'
import { Board } from './board'



function App() {
  const [count, setCount] = useState(0)
  const data: PuzzleData = puzzleData
  console.log(data)
  return <Board puzzle={data.easy} />
}

export default App
