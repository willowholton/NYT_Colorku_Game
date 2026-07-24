import type { Page } from './types'

interface LandingPageProps {
    dateString: string;
    onSelectPage: (page: Page) => void;
}

export function LandingPage({ dateString, onSelectPage }: LandingPageProps) {
    return (
        <div className='landing'>
            <div className='header'>{dateString}</div>
            <div className='difficulty-buttons'>
                <button className='difficulty-button' onClick={() => onSelectPage('easy')}>Easy</button>
                <button className='difficulty-button' onClick={() => onSelectPage('medium')}>Medium</button>
                <button className='difficulty-button' onClick={() => onSelectPage('hard')}>Hard</button>
            </div>
        </div>
    )
}
