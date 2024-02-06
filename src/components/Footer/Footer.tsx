import { FOOTER_TEXT } from '../../constants/text';
import './Footer.module.scss';

export function Footer() {
    const { MOOD_RING_2024 } = FOOTER_TEXT;
    return (
        <footer>
            <p>{MOOD_RING_2024}</p>
        </footer>
    );
}
