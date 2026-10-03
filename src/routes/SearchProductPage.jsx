import { useSearchParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { ProductContext } from '../Context/ProductContext';

const SearchProductPage = () => {

    const { product } = useContext(ProductContext);

    const [searchParams] = useSearchParams();

    const busca = searchParams.get('busca');
    const oferta = searchParams.get('oferta');
    const categoria = searchParams.get('categoria');

    const produtosFiltrados = product.filter((item) => {

        if (busca) {
            return item.title.toLowerCase().includes(busca.toLowerCase());
        }

        if (categoria) {
            return item.category === categoria;
        }

        if (oferta) {
            return item.offerOfTheDay === true;
        }

        return true;
    });

    const navigate = useNavigate();

    return (
        <div
            className="products-grid"
            style={{ marginTop: '10px' }}
        >

            {produtosFiltrados.map((product) => (

                <div
                    className="product-item"
                    key={product.id}
                    onClick={() => {
                        navigate(`/produto/${product.id}`);
                    }}
                >

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

        </div>
    );
};

export default SearchProductPage;