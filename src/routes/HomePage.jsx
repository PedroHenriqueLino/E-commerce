//componentes
import BannerSlider from "../Components/BannerSlider/BannerSlider"
import ProductCard from "../Components/ProductCard/ProductCard"

//Função para adicionar id na local storage
import { adicionarCarrinho } from "./IndividualProductPage"
const HomePage = () => {

    return (
        <div className='home-content'>
            <BannerSlider />

            <div className="Product-card">
                <ProductCard
                    adicionarCarrinho={adicionarCarrinho}
                />
            </div>
        </div>
    )
}

export default HomePage