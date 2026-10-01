import './style/Carrinho.css';
import { IconTrash } from '@tabler/icons-react';

import { useNavigate } from 'react-router-dom';


//Context
import { useContext, useState } from 'react';
import { ProductContext } from '../Context/ProductContext';

const Carrinhopage = () => {
    const { product } = useContext(ProductContext)

    const navigate = useNavigate();

    //Pegando id da local storage
    const [carrinho, setCarrinho] = useState(
        JSON.parse(localStorage.getItem('cart')) || []
    )

    const produtosCarrinho = product.filter((produto) =>
        carrinho.includes(produto.id)
    )

    function removerCarrinho(id) {
        const novoCarrinho = carrinho.filter(item => item !== id)

        localStorage.setItem('cart', JSON.stringify(novoCarrinho))

        setCarrinho(novoCarrinho)
    }
    //selecionar todos
    const [selecionarTodos, setSelecionarTodos] = useState(false)
    const [selecionados, setSelecionados] = useState([])

    function selecionarTodosProdutos(e) {
        if (e.target.checked) {
            setSelecionados(produtosCarrinho.map(produto => produto.id))
        } else {
            setSelecionados([])
        }
    }

    function selecionarProduto(id) {
        setSelecionados((atual) => {
            if (atual.includes(id)) {
                return atual.filter(item => item !== id)
            }

            return [...atual, id]
        })
    }
    //quantidades de produtos
    const [quantidades, setQuantidades] = useState(
        JSON.parse(localStorage.getItem('quantidades')) || {}
    )

    const quantidadeSelecionada = selecionados.reduce(
        (total, id) => total + (quantidades[id] || 1),
        0
    )

    //Resumo carrinho
    const totalCompra = selecionados.reduce((total, id) => {
        const produto = produtosCarrinho.find(produto => produto.id === id)

        if (!produto) return total

        const quantidade = quantidades[id] || 1

        return total + (produto.price * quantidade)
    }, 0)

    return (
        <div className='carrinho-content'>

            <div className="carrinho-produtos">

                <div className="selecionar-todos">
                    <input
                        type="checkbox"
                        checked={
                            selecionados.length === produtosCarrinho.length &&
                            produtosCarrinho.length > 0
                        }
                        onChange={selecionarTodosProdutos}
                    />

                    <span>Selecionar todos</span>
                </div>

                <div className="lista-produtos">
                    {produtosCarrinho.map((produto) => (
                        <div className='list-content' key={produto.id}>

                            <input
                                className="lista-checkbox"
                                type="checkbox"
                                checked={selecionados.includes(produto.id)}
                                onChange={() => selecionarProduto(produto.id)}
                            />
                            <div
                                className="lista-img"
                                style={{
                                    backgroundImage: `url(${produto.images[0]})`
                                }}
                                onClick={() => {
                                    navigate(`/produto/${produto.id}`)
                                    window.location.reload()
                                }}
                            ></div>

                            <div className="lista-detalhes">

                                <div className="lista-info">
                                    <h4
                                        onClick={() => {
                                            navigate(`/produto/${produto.id}`)
                                            window.location.reload()
                                        }}
                                    >{produto.title}</h4>

                                    <IconTrash
                                        stroke={1}
                                        onClick={() => removerCarrinho(produto.id)}
                                    />
                                </div>

                                <div className="lista-arrow">

                                    <div className="arrow-calc">
                                        <button
                                            onClick={() => {
                                                const novaQuantidade = Math.max(
                                                    1,
                                                    (quantidades[produto.id] || 1) - 1
                                                )

                                                setQuantidades({
                                                    ...quantidades,
                                                    [produto.id]: novaQuantidade
                                                })

                                                localStorage.setItem(
                                                    'quantidades',
                                                    JSON.stringify({
                                                        ...quantidades,
                                                        [produto.id]: novaQuantidade
                                                    })
                                                )
                                            }}
                                        >
                                            -
                                        </button>

                                        <span>
                                            {quantidades[produto.id] || 1}
                                        </span>

                                        <button
                                            onClick={() => {
                                                const novaQuantidade = (quantidades[produto.id] || 1) + 1

                                                setQuantidades({
                                                    ...quantidades,
                                                    [produto.id]: novaQuantidade
                                                })

                                                localStorage.setItem(
                                                    'quantidades',
                                                    JSON.stringify({
                                                        ...quantidades,
                                                        [produto.id]: novaQuantidade
                                                    })
                                                )
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>

                                    <span>+50 disponíveis</span>
                                </div>

                            </div>
                            <div className="lista-preco">
                                <h4>R$ {produto.price}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="carrinho-resumo">
                <h2>Resumo da compra</h2>

                <div className="comprar">
                    <div className="info">
                        <h3>Total</h3>

                        <span>R$ {totalCompra.toFixed(2)}</span>
                    </div>
                    <div className="arrow">
                        <button>Continuar ({quantidadeSelecionada})</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carrinhopage