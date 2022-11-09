import {
    FaFacebook,
    FaTwitter,
    FaInstagram
 } from 'react-icons/fa'

import styles from './footer.module.scss'

const iconeProps = {
    color: 'white',
    size: 24
}

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <FaFacebook {...iconeProps} />
                <FaTwitter {...iconeProps} />
                <FaInstagram {...iconeProps} />
            </div>
            <span>Desenvolvido por Carlos.</span>
        </footer>
    )

}