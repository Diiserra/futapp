import { PlayerListIten } from "./PlayerListIten";
import styles from '../styles/PlayersList.module.css'

export function PlayersList() {
    return (
        <section className={styles.playerslistContainer}>
            <span>Jogadores</span>
            <PlayerListIten srcImg="http://github.com/Diiserra.png" nickName="Serra" />
            <PlayerListIten srcImg="http://github.com/Diiserra.png" nickName="Serra" />
            <PlayerListIten srcImg="http://github.com/Diiserra.png" nickName="Serra" />

            <input type="text" placeholder="Insira um novo jogador" />
        </section>
    );

}