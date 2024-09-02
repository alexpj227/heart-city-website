import React from 'react';
import styles from './Footer.module.css';
import { PRIVACY_URL, TERMS_OF_USE_URL } from '../../App';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p>&copy; 2024 Heart City. All rights reserved.</p>
            <nav>
                <a href={PRIVACY_URL}>Privacy Policy</a> | <a href={TERMS_OF_USE_URL}>Terms of Service</a>
            </nav>
        </footer>
    );
};

export default Footer;
