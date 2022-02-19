import styles from '../styles/CurrentMatch.module.css'
import { TeamCard } from './TeamCard'

export function CurrentMatch() {
    return (
        <div className={styles.currentMatchContainer}>
            <TeamCard />
            <div className={styles.scoreCard}>
                <h1>Placar</h1>
                <span>0 X 0</span>
                <strong>10:00</strong>
                <button>Iniciar Partida</button>
            </div>
            <TeamCard />
        </div>
    );
} 