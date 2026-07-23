import { useState } from 'react'
import type { Puzzle } from './types'

interface CellProps {
    value: number;
    isGiven: boolean;
    isSelected: boolean;
    isNeighbor: boolean;
    isMatch: boolean;
    onClick: () => void;
}

interface HeaderProps {
  datestring: string;
}

export function Header({ datestring }: HeaderProps) {
    return (
        <div className='header'>
            {datestring}
        </div>
    )
}

export function Cell({ value, isGiven, isSelected, isNeighbor, isMatch, onClick} : CellProps) {
    return (
        <div className={`cell ${isSelected ? 'selected' : ''} ${isNeighbor ? 'neighbor' : ''} ${isMatch ? 'match' : ''}`} onClick={onClick}>
            {(value !== 0) && (value)}
        </div>
    )
}

export function Board({ puzzle }: { puzzle : Puzzle }) {
    const [board, setBoard] = useState<number[][]>(puzzle.given)
    const [selected, setSelected] = useState<{ row: number; col: number} | null>(null)
    return (
        <div className='board'>
            {board.map((row, rowIdx) =>  (
                <div key = {rowIdx} className='row'>
                    {row.map((value, colIdx) => (
                        <Cell
                            key={colIdx}
                            value={value}
                            isGiven={puzzle.given[rowIdx][colIdx] !== 0}
                            isSelected={(selected?.row === rowIdx) && (selected?.col === colIdx)}
                            isNeighbor={
                                (selected !== null) && (
                                    rowIdx === selected.row || colIdx === selected.col || 
                                    ((Math.floor(rowIdx / 3) === Math.floor(selected.row / 3)) && (Math.floor(colIdx / 3) === Math.floor(selected.col / 3))) &&
                                    !((rowIdx === selected.row) && (colIdx === selected.col))
                                )
                            }
                            isMatch={
                                (selected !== null) && (value !== 0) && (board[selected.row][selected.col] ===  value)
                            }
                            onClick={() => {setSelected({ row: rowIdx, col: colIdx })}
                            }
                        />
                    ))}
                </div>
            ))}
        <div className='gridlines' />
        </div>
    )
}