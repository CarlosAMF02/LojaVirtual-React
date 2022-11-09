import { Header } from 'components/Header/Header'
import { Item } from 'components/Item/Item'
import { useDispatch, useSelector } from 'react-redux'
import { resetarCarrinho } from 'Store/reducers/carrinho'
import styles from './carrinho.module.scss'

export const Carrinho = () => {
    const dispatch = useDispatch()
    let total = 0
    const carrinho = useSelector(state => {
        const regexp = new RegExp(state.busca, 'i')
        const carrinhoReduce = state.carrinho.reduce((itens, itemCarrinho) => {
            const item = state.itens.find(item => item.id === itemCarrinho.id);

            total += item.preco * itemCarrinho.quantidade
            if (item.titulo.match(regexp))
            {
                itens.push({
                    ...item,
                    quantidade: itemCarrinho.quantidade
                })
            }
            return itens
        }, []);
        return carrinhoReduce;
    })
    return (
        <div>
            <Header titulo="Carrinho de Compras" descricao="Confira produtos que você adicionou ao carrinho." />
            <div className={styles.carrinho}>
                {carrinho.map(item => <Item key={item.id} {...item} carrinho />)}
                <div className={styles.total}>
                    <strong>Resumo da Compra</strong>
                    <span>Subtotal: <strong> R$ {total.toFixed(2)}</strong></span>
                </div>
                <button className={styles.finalizar} onClick={() => dispatch(resetarCarrinho())}>
                    Finalizar Compra
                </button>
            </div>
        </div>
    )
}