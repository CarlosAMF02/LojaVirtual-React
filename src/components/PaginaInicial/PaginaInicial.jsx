import { Outlet } from 'react-router-dom'

import { Navbar } from 'components/Navbar/Navbar'
import styles from './paginainicial.module.scss'
import { Footer } from 'components/Footer/Footer'

export const PaginaInicial = () => {

    return (
        <div className={styles.container}>
            <Navbar />
            <div className={styles['container-outlet']}>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}