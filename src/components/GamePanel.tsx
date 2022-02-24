import styles from '../styles/GamePanel.module.css'
import { CurrentMatch } from './CurrentMatch';
import { NextGamesCard } from './NextGamesCard';

export function GamePanel() {
    return (
        <section className={styles.gamePanelContainer}>
            <div className={styles.titleGamePanel}>
                <span>Jogos de hoje</span>
                <p>Rodada #36 - 18/02/2022</p>
            </div>
            <div className={styles.gamePanelScrollArea}>
                <CurrentMatch />
                <p>Proximos Jogos</p>
                <NextGamesCard />
                <NextGamesCard />
                <NextGamesCard />
                <NextGamesCard />

            </div>
        </section>
    );
} 