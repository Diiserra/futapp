import styles from '../styles/TeamCard.module.css'
import { TeamPlayer } from './TeamPlayer';

export function TeamCard() {
    return (
        <div className={styles.teamCardContainer}>
            <h1>Equipe #1</h1>
            <div className={styles.playersArea}>
                <TeamPlayer srcImg='http://github.com/Diiserra.png' nickName='Diego Serra' />
                <TeamPlayer srcImg='http://github.com/Diiserra.png' nickName='Diego Serra' />
                <TeamPlayer srcImg='http://github.com/Diiserra.png' nickName='Diego Serra' />
                <TeamPlayer srcImg='http://github.com/Diiserra.png' nickName='Diego Serra' />
            </div>
        </div>
    );
}