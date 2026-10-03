import './style/IndividualProduct.css';

import {
    IconChevronLeft,
    IconChevronRight
} from '@tabler/icons-react';

import toast from 'react-hot-toast';

import { useState, useEffect, useRef, useContext } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import axios from 'axios';

import { ProductContext } from '../Context/ProductContext';

// Salvando id na local storage

export function adicionarCarrinho(id) {

    const carrinho = JSON.parse(localStorage.getItem('cart')) || [];

    carrinho.push(id);

    localStorage.setItem('cart', JSON.stringify(carrinho));

    toast.success('Produto adicionado ao carrinho!', {
        duration: 5000
    });
}

const IndividualProductPage = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const [product, setProduct] = useState(null);

    const getProduct = async () => {

        const response = await axios.get(
            `https://e-commerce-74ck.onrender.com/products/${id}`
        );

        setProduct(response.data);
    };

    useEffect(() => {

        getProduct();

    }, [id]);

    // Individual img

    const [selectedImage, setSelectedImage] = useState(0);

    // Produtos relacionados

    const { product: products } = useContext(ProductContext);

    const relatedProducts = product
        ? products.filter(
            item =>
                item.category === product.category &&
                item.id !== product.id
        )
        : [];

    // Rolagem dos cards

    const cardsRef = useRef(null);

    const scrollCards = () => {

        cardsRef.current.scrollBy({
            left: 900,
            behavior: "smooth"
        });

    };

    const scrollCardsBack = () => {

        cardsRef.current.scrollBy({
            left: -900,
            behavior: "smooth"
        });

    };

    return (

        <div>

            {product &&

                <div className="individual-product-content">

                    <div className="individual-box">

                        <div className="individual-img-select">

                            <div className="individual-img-select">

                                {product.images.map((image, index) => (

                                    <div
                                        key={index}
                                        className={`individual-img-option ${selectedImage === index ? 'selected' : ''
                                            }`}
                                        onClick={() => setSelectedImage(index)}
                                        style={{
                                            backgroundImage: `url(${image})`
                                        }}
                                    >
                                    </div>

                                ))}

                            </div>

                        </div>

                        <div
                            className="individual-img"
                            style={{
                                backgroundImage: `url(${product.images[selectedImage]})`
                            }}
                        >
                        </div>

                        <div className="individual-info">

                            <div className="product-meta">

                                <span>{product.category}</span>

                                <span>|</span>

                                <span>{product.sold}</span>

                            </div>

                            {product.offerOfTheDay === true && (
                                <h5>Mais vendido</h5>
                            )}

                            <h2>{product.title}</h2>

                            <span className="old-price">
                                R$ {product.price}
                            </span>

                            <h1>
                                R$ {(product.price * 0.82).toFixed(2)}
                            </h1>

                            <div className="individual-description">

                                <p>{product.description.title}</p>

                                <ul>

                                    {product.description.items.map((item, index) => (

                                        <li key={index}>
                                            {item}
                                        </li>

                                    ))}

                                </ul>

                            </div>

                        </div>

                        <div className="individual-actions">

                            <button className="buy-now">
                                Comprar agora
                            </button>

                            <button
                                className="add-cart"
                                onClick={() => adicionarCarrinho(product.id)}
                            >
                                Adicionar ao carrinho
                            </button>

                            <div className="store-info">

                                <div
                                    className="store-img"
                                    style={{
                                        backgroundImage: `url(${product.images[0]})`
                                    }}
                                >
                                </div>

                                <div className="store-overlay">

                                    <h3>{product.store}</h3>

                                    <span>{product.sold}</span>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Produtos relacionados */}

                    <div className="produtos-relacionados-content">

                        <h4>Produtos relacionados</h4>

                        <div
                            className="produtos-relacionados-cards"
                            ref={cardsRef}
                        >

                            {relatedProducts.map((item) => (

                                <div
                                    className="produto-relacionado-card"
                                    key={item.id}
                                    onClick={() => {
                                        navigate(`/produto/${item.id}`);
                                    }}
                                >

                                    <div
                                        className="produto-relacionado-img"
                                        style={{
                                            backgroundImage: `url(${item.images[0]})`
                                        }}
                                    >
                                    </div>

                                    <p>{item.title}</p>

                                    <div className="produto-relacionado-price">

                                        R$<h4>{item.price}</h4>

                                        <span>{item.sold}</span>

                                    </div>

                                    <span>Frete grátis</span>

                                </div>

                            ))}

                        </div>

                        <div className="produtos-relacionados-arrow">

                            <button
                                className="produto-relacionado-left"
                                onClick={scrollCardsBack}
                            >
                                <IconChevronLeft />
                            </button>

                            <button
                                className="produto-relacionado-right"
                                onClick={scrollCards}
                            >
                                <IconChevronRight />
                            </button>

                        </div>

                    </div>

                </div>

            }

        </div>
    );
};

export default IndividualProductPage;