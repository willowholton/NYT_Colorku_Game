export interface Puzzle {
    given: number[][];
    solution: number[][];
}

export interface PuzzleData {
    day: string;
    date: string;
    easy: Puzzle;
    medium: Puzzle;
    hard: Puzzle;
}
