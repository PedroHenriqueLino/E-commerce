import './ProductCard.css';
import {
    IconChevronLeft,
    IconChevronRight,
    IconArrowNarrowRight
} from '@tabler/icons-react';
//icons

//Search
import { useNavigate } from 'react-router-dom'

//React-router-dom
import { Link } from 'react-router-dom'
//Context

import { useContext, useRef } from "react"
import { ProductContext } from '../../Context/ProductContext';

const ProductCard = ({ adicionarCarrinho }) => {
    const { product } = useContext(ProductContext)

    //Rolagem dos card com chatGPT a baixo
    const cardsRef = useRef(null)
    const scrollCards = () => {
        cardsRef.current.scrollBy({
            left: 900,
            behavior: "smooth"
        })
    }
    const scrollCardsBack = () => {
        cardsRef.current.scrollBy({
            left: -900,
            behavior: "smooth"
        })
    }
    //Rolagem dos card com chatGPT a cima


    //Ofeta do dia a baixo
    const offers = product.filter(
        item => item.offerOfTheDay === true
    )

    const offerProduct = offers.length > 0
        ? offers[Math.floor(Math.random() * offers.length)]
        : null
    //Ofeta do dia a cima

    const navigate = useNavigate();

    return (
        <div className='product-card-content'>
            {/*Produtos mais vendos */}
            <div className="mais-vendidos-content">
                <h4>Mais Vendidos</h4>

                <div className="cards" ref={cardsRef}>
                    {product.map((product) => (

                        <div
                            className="info-card"
                            key={product.id}
                            onClick={() => {
                                navigate(`/produto/${product.id}`)
                                window.location.reload()
                            }}
                        >
                            <div
                                className="card-img"
                                style={{ backgroundImage: `url(${product.images[0]})` }}
                            ></div>

                            <p>{product.title}</p>

                            <div className="price">
                                R$<h4>{product.price}</h4>
                                <span>{product.sold}</span>
                            </div>

                            <span>Frete grátis</span>


                        </div>

                    ))}

                </div>

                <div className="mais-vendidos-arrow">
                    <button
                        className='btn-left'
                        onClick={scrollCardsBack}
                    ><IconChevronLeft /></button>

                    <button
                        className='btn-rght'
                        onClick={scrollCards}
                    ><IconChevronRight /></button>
                </div>

            </div>
            {/*Oferta do dia */}
            <div className="oferta-do-dia">

                <div
                    className="oferta-banner"
                    style={{ backgroundImage: `url("/homeimg.jpg")` }}
                    onClick={() => navigate('/product?categoria=perifericos')}
                />

                <div className="oferta-product">

                    <div className="product-left"  >
                        <h4>Oferta do dia</h4>

                        {offerProduct && (
                            <div
                                className="oferta-img"
                                style={{
                                    backgroundImage: `url(${offerProduct.images})`,
                                    cursor: 'pointer',
                                }}
                                onClick={() => {
                                    navigate(`/produto/${offerProduct.id}`)
                                    window.location.reload()
                                }}
                            />
                        )}
                    </div>

                    {offerProduct && (
                        <div className="oferta-info">
                            <h2>{offerProduct.title}</h2>
                            <span>R$ {offerProduct.price}</span>
                            <h1>    R$ {(offerProduct.price * 0.85).toFixed(2)}</h1>
                            <button
                                onClick={() => adicionarCarrinho(offerProduct.id)}
                            >Adicionar ao Carrinho</button>
                        </div>
                    )}


                </div>

                <p onClick={() => navigate('/product?oferta=true')} >
                    Ver todas ofertas <IconArrowNarrowRight stroke={2} />
                </p>
            </div>
            {/*card produtos */}
            <div className="products-grid">

                {[...product]
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 48)
                    .map((product) => (
                        <div
                            className="product-item"
                            key={product.id}
                            onClick={() => {
                                navigate(`/produto/${product.id}`)
                                window.location.reload()
                            }}>

                            <div
                                className="product-image"
                                style={{
                                    backgroundImage: `url(${product.images[0]})`
                                }}
                            ></div>

                            <p>{product.title}</p>

                            <div className="product-price">
                                R$<h4>{product.price}</h4>
                                <span>{product.sold}</span>
                            </div>

                            <span>Frete grátis</span>

                        </div>
                    ))}
                <Link to={'/product'}>
                    <stroke>Ver todos <IconArrowNarrowRight stroke={2} /> </stroke>
                </Link>
            </div>

        </div >
    )
}

export default ProductCard