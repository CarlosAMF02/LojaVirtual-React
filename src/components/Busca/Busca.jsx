import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom';
import { mudarBusca, resetarBusca } from 'Store/reducers/busca';
import styles from './busca.module.scss'

export const Busca = () => {
    const dispatch = useDispatch();
    const busca = useSelector(state => state.busca)
    const location = useLocation()

    useEffect(() => {
       dispatch(resetarBusca())
    }, [location, dispatch]);
    return (
        <div className={styles.busca}>
            <input 
                className={styles.input} 
                placeholder='O que você procura?'
                value={busca}
                onChange={evento => dispatch(mudarBusca(evento.target.value))}
            />
        </div>
    )
}