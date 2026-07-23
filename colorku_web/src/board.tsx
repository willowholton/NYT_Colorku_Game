import { useState } from 'react'
import type { Puzzle } from './types'

interface CellProps {
    value: number;
    isGiven: boolean;
    isSelected: boolean;
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

export function Cell({ value, isGiven, isSelected, onClick} : CellProps) {
    return (
        <div className='cell' onClick={onClick}>
            {value}
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