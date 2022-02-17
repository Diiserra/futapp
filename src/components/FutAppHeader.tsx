import { UserProfile } from "./UserProfile";


export function FutAppHeader() {
    return (
        <header className="futapp-header">
            <div>
                <img src="" alt="FutApp" />
                <a href="#">Jogos</a>
                <a href="#">Membros</a>
                <a href="#">Estatísticas</a>
                <a href="#">Financeiro</a>
            </div>
            <div>
                <span className="material-icons icons">notifications_none</span>
                <span className="material-icons icons">mail_outline</span>
                <span className="material-icons icons">favorite_border</span>
                <UserProfile srcImg="http://github.com/Diiserra.png" name="Diego Serra" position="Jogador" />
            </div>
        </header>
    );
}