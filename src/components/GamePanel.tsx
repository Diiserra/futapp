import styles from '../styles/GamePanel.module.css'
import { CurrentMatch } from './CurrentMatch';

export function GamePanel() {
    return (
        <section className={styles.gamePanelContainer}>
            <div>
                <span>Jogos de hoje</span>
                <span>Rodada #36 - 18/02/2022</span>
            </div>
            <div className={styles.gamePanelScrollArea}>
                <CurrentMatch />

            </div>
        </section>
    );
} 