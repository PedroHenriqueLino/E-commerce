//react-router-dom
import { useSearchParams } from 'react-router-dom'

import { useNavigate } from 'react-router-dom';
//Context
import { useContext } from "react"
import { ProductContext } from '../Context/ProductContext';

const SearchProductPage = () => {
    const { product } = useContext(ProductContext)

    //Search
    const [searchParams] = useSearchParams()
    const busca = searchParams.get('busca')
    const oferta = searchParams.get('oferta')

    //navlinkSearch
    const categoria = searchParams.get('categoria')

    const produtosFiltrados = product.filter((item) => {

        if (busca) {
            return item.title.toLowerCase().includes(busca.toLowerCase())
        }

        if (categoria) {
            return item.category === categoria
        }

        if (oferta) {
            return item.offerOfTheDay === true
        }

        return true
    })

    //navigate
    const navigate = useNavigate()

    return (

        <div className="products-grid"
            style={{ marginTop: '10px' }}
        >

            {produtosFiltrados.map((product) => (
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

        </div>

    )
}

export default SearchProductPage