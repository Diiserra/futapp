import styles from '../styles/PlayerListIten.module.css'

type PlayerProps = {
    srcImg: string;
    nickName: string;
}

export function PlayerListIten(props: PlayerProps) {
    return (
        <div className={styles.playerlistItenContainer}>
            <div>
                <img src={props.srcImg} alt="Player" />
                <span>{props.nickName}</span>
            </div>
            <span className="material-icons icons">close</span>
        </div>
    );
}