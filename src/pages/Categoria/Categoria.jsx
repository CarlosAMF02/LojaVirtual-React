import { Header } from "components/Header/Header"
import { Item } from "components/Item/Item"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import styles from './categoria.module.scss'


export const Categoria = () => {
    const { nomeCategoria } = useParams()
    const { categoria, itens } = useSelector(state =>
        {
            const regexp = new RegExp(state.busca, 'i')

            return { 
                categoria: state.categorias.find(categoria => categoria.id === nomeCategoria),
                itens: state.itens.filter(item => item.categoria === nomeCategoria && item.titulo.match(regexp))
            }
        }
    )
    const { nome, descricao, header } = categoria
    return (  
        <div>
            <Header titulo={nome} descricao={descricao} imagem={header} />
            <div className={styles.itens}>
                {itens?.map(item => <Item key={item.id} {...item} />)}
            </div>
        </div>
    )
}