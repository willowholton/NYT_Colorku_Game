import { useState } from 'react'
import './App.css'
import type { PuzzleData } from './types'
import puzzleData from './data/puzzles.json'
import { Board, Header } from './board'


function App() {
  const [count, setCount] = useState(0)
  const data: PuzzleData = puzzleData
  const dateString = data.day + ' ' + data.displayDate
  console.log(data)
  return (
    <div className='app-container'>
      <Header datestring={dateString} />
      <Board puzzle={data.easy}/> 
    </div>
  )
}

export default App
