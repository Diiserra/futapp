
import styles from '../styles/PlayersList.module.css'

export function PlayersList() {
    return (
        <section className={styles.playerslistContainer}>
            <div>
                <span>Jogadores</span>
                <input type="text" placeholder="Insira um novo jogador" />
            </div>
            <div className={styles.playerslistScrollArea}>

            </div>
        </section>
    );

}