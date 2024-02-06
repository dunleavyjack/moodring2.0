import { NAVBAR_TEXT } from '../../constants/text';
import { AppLink } from '../../components';
import styles from './Navbar.module.scss';

export function Navbar() {
    const { MOOD_RING, ABOUT } = NAVBAR_TEXT;

    return (
        <nav className={styles.nav}>
            <h1>{MOOD_RING}</h1>
            <div>
                <AppLink to="/about" displayText={ABOUT} />
            </div>
        </nav>
    );
}
