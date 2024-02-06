import { Link } from 'react-router-dom';
import styles from './AppLink.module.scss';

type AppLinkProps = {
    to: string;
    displayText: string;
};

export function AppLink({ to, displayText }: AppLinkProps) {
    return (
        <Link to={to} className={styles.link}>
            {displayText}
        </Link>
    );
}
