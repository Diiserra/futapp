import styles from '../styles/UserProfile.module.css'

type UserProps = {
    srcImg: string;
    name: string;
    position: string;
}

export function UserProfile(props: UserProps) {
    return (
        <div className={styles.userprofileContainer}>
            <img src={props.srcImg} alt="Profile Image" />
            <div>
                <span>{props.name}</span>
                <p>{props.position}</p>
            </div>
            <span className="material-icons icons">expand_more</span>
        </div>
    );
}