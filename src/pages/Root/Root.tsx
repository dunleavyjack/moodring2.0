import { Outlet } from 'react-router-dom';
import { Navbar, Footer } from '../../components';
import styles from './Root.module.scss';

export function Root() {
    return (
        <div className={styles.root}>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}
