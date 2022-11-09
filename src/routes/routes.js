import { PaginaInicial } from 'components/PaginaInicial/PaginaInicial'
import { Carrinho } from 'pages/Carrinho/Carrinho'
import { Categoria } from 'pages/Categoria/Categoria'
import { Home } from 'pages/Home/Home'
import {
    BrowserRouter,
    Route,
    Routes
} from 'react-router-dom'

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<PaginaInicial />}>
                    <Route index element={<Home />} />
                    <Route path='/categoria/:nomeCategoria' element={<Categoria />} />
                    <Route path='carrinho' element={<Carrinho />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}