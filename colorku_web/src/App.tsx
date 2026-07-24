import { useState } from 'react'
import './App.css'
import type { PuzzleData, Page } from './types'
import { Board } from './board'
import { LandingPage } from './landing'
import puzzleData from './data/puzzles.json'



function App() {
  const data: PuzzleData = puzzleData
  const datestring = data.day + ' ' + data.displayDate

  const [currentPage, setCurrentPage] = useState<Page>('landing')

  if (currentPage === 'landing') {
    return <LandingPage dateString={datestring} onSelectPage={setCurrentPage} />
  }

  return <Board puzzle={data[currentPage]} onBack={() => setCurrentPage('landing')} />
}

export default App
