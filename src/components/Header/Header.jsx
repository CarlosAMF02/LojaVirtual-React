import styles from './header.module.scss'

export const Header = ({titulo, descricao, imagem, className = ''}) => {

    return (
        <header className={`${styles.header} ${className}`}>
            <div className={styles['header-texto']}>
                <h1>{titulo}</h1>
                <h2>{descricao}</h2>
            </div>
            {imagem && 
                <div className={styles['header-imagem']}>
                    <img
                        alt={titulo}
                        src={imagem}
                    />
                </div>
            }
        </header>
    )
}