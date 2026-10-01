import './NavBar.css';

//icons
import {
    IconShoppingCart,
    IconHome,
    IconMenu2,
    IconBrandShopee,
    IconSearch,
    IconDiscount2,
    IconDeviceDesktop,
    IconDeviceMobile,
    IconCpu,
    IconDeviceGamepad2,
    IconTools
} from '@tabler/icons-react';
//icons

//React-router
import { Link } from 'react-router-dom';

//Search
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

//Context
import { useContext } from 'react';
import { ProductContext } from '../../Context/ProductContext';

const NavBar = () => {
    //Context
    const { product } = useContext(ProductContext)

    //Search
    const [search, setSearch] = useState('')
    const navigate = useNavigate()
    const suggestions = product.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    )

    //menu mobile
    const [menuOpen, setMenuOpen] = useState(false)
    const [selectedMenu, setSelectedMenu] = useState(null)


    return (
        <div className='nav-content'>


            <div className="nav-search">
                <Link to={'/'}>
                    <div className="logo">
                        <IconBrandShopee stroke={1.2} />
                        <span>Compre <br></br> Já</span>
                    </div>
                </Link>

                <div className="input">
                    < IconSearch stroke={1} />
                    <input
                        type="text"
                        placeholder="Pesquisar..."
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                window.location.href = `/product?busca=${encodeURIComponent(search)}`
                            }
                        }}
                    />

                    {
                        search && suggestions.length > 0 && (
                            <div className="search-suggestions">

                                {suggestions.slice(0, 5).map((item) => (

                                    <div
                                        key={item.id}
                                        onClick={() =>
                                            window.location.href = `/product?busca=${encodeURIComponent(item.title)}`
                                        }
                                    >
                                        {item.title}
                                    </div>

                                ))}

                            </div>
                        )
                    }
                </div>


                <div
                    className="nav-banner"
                    style={{
                        backgroundImage: "url('https://smartkartapp.com/uploads/fashion1.png')"
                    }}
                ></div>

                <div className="nav-mobile-arrow">
                    <IconMenu2
                        stroke={1}
                        size={30}
                        onClick={() => setMenuOpen(!menuOpen)}
                    />
                    <Link to={'carrinho'}>
                        <IconShoppingCart stroke={1} size={30} />
                    </Link>
                </div>
            </div>

            <div className="nav-actions" >
                <ul>
                    <li onClick={() => navigate('/product?oferta=true')}>
                        Ofertas
                    </li>
                    <li onClick={() => navigate('/product?categoria=perifericos')}>
                        Perifericos
                    </li>
                    <li onClick={() => navigate('/product?categoria=acessorios')}>
                        Acessórios
                    </li>
                    <li onClick={() => navigate('/product?categoria=celulares')}>
                        Celulares
                    </li>
                    <li onClick={() => navigate('/product?categoria=informatica')}>
                        Informatica
                    </li>
                    <li onClick={() => navigate('/product?categoria=games')}>
                        Games
                    </li>
                </ul>

                <Link to={'carrinho'}>
                    <span className="carrinho-icon" >
                        <IconShoppingCart stroke={1} size={30} />
                    </span>
                </Link>
            </div >

            {/*nav mobile */}
            {menuOpen && (
                <div className="mobile-menu">

                    <ul>


                        <li
                            className={selectedMenu === 'inicio' ? 'selected' : ''}
                            onClick={() => {
                                setSelectedMenu('inicio')
                                navigate('/')
                                setMenuOpen(false)
                            }}>
                            <IconHome stroke={1.3} />   Inicio
                        </li>
                        <li
                            className={selectedMenu === 'ofertas' ? 'selected' : ''}
                            onClick={() => {
                                setSelectedMenu('ofertas')
                                navigate('/product?oferta=true')
                                setMenuOpen(false)
                            }}>
                            <IconDiscount2 stroke={1.3} />  Ofertas
                        </li>

                        <li
                            className={selectedMenu === 'perifericos' ? 'selected' : ''}
                            onClick={() => {
                                setSelectedMenu('perifericos')
                                navigate('/product?categoria=perifericos')
                                setMenuOpen(false)
                            }}>
                            <IconDeviceDesktop stroke={1.3} />   Periféricos
                        </li>

                        <li
                            className={selectedMenu === 'acessorios' ? 'selected' : ''}
                            onClick={() => {
                                setSelectedMenu('acessorios')
                                navigate('/product?categoria=acessorios')
                                setMenuOpen(false)
                            }}>
                            <IconTools stroke={1.3} />    Acessórios
                        </li>

                        <li
                            className={selectedMenu === 'celulares' ? 'selected' : ''}
                            onClick={() => {
                                setSelectedMenu('celulares')
                                navigate('/product?categoria=celulares')
                                setMenuOpen(false)
                            }}>
                            <IconDeviceMobile stroke={1.3} />      Celulares
                        </li>

                        <li
                            className={selectedMenu === 'informatica' ? 'selected' : ''}
                            onClick={() => {
                                setSelectedMenu("informatica")
                                navigate('/product?categoria=informatica')
                                setMenuOpen(false)
                            }}>

                            <IconCpu stroke={1.3} />   Informática
                        </li>

                        <li
                            className={selectedMenu === 'games' ? 'selected' : ''}
                            onClick={() => {
                                setSelectedMenu("games")
                                navigate('/product?categoria=games')
                                setMenuOpen(false)
                            }}>
                            <IconDeviceGamepad2 stroke={1.3} />  Games
                        </li>

                    </ul>

                </div>
            )
            }

        </div >
    )
}

export default NavBar