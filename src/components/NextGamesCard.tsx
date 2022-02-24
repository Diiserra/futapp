import styles from '../styles/NextGamesCard.module.css'

export function NextGamesCard() {
    return (
        <div className={styles.nextGamesContainer}>
            <div className={styles.nextTeamContainer}>
                <img src="https://www.escudosfc.com.br/images/bragantino.png" alt="" />
                <span>Equipe #3</span>
                <span>VS</span>
                <img src="https://www.escudosfc.com.br/images/nautico.png" alt="" />
                <span>Equipe #4</span>
            </div>
            <div>
                <span className="material-icons icons">schedule</span>
                <span>08:00</span>
            </div>
            <div>
                <span className="material-icons icons">calendar_today</span>
                <span>02/02/2022</span>
            </div>
            <div>
                <span>Ver detalhes</span>
                <span className="material-icons greenIcon">arrow_forward</span>
            </div>
        </div>
    );
}