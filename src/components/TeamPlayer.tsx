import styles from '../styles/TeamPlayer.module.css'

type PlayerProps = {
    srcImg: string;
    nickName: string;
}

export function TeamPlayer(props: PlayerProps) {
    return (
        <div className={styles.teamPlayerContainer}>
            <div>
                <img src={props.srcImg} alt="Player" />
                <span>{props.nickName}</span>
            </div>
            <span className="material-icons icons">close</span>
        </div>
    );
}