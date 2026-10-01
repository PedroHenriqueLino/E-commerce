import './BannerSlider.css';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
//icons

//Context
import { useContext, useState, useEffect } from 'react';
import { PromotionBannerContext } from '../../Context/PromotionBanner';
const BannerSlider = () => {
    const { banner: promotions } = useContext(PromotionBannerContext)

    const [current, setCurrent] = useState(0)
    const [direction, setDirection] = useState('next')

    const nextBanner = () => {
        setCurrent(current + 1);
        setDirection('next')

        if (current + 1 >= promotions.length) {
            setCurrent(0);
        }
    }

    const prevBanner = () => {
        setCurrent(current - 1);
        setDirection('prev')

        if (current - 1 < 0) {
            setCurrent(promotions.length - 1);
        }
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current => {
                if (current + 1 >= promotions.length) {
                    return 0;
                }

                return current + 1;
            });
        }, 7000);

        return () => clearInterval(interval);
    }, [promotions]);

    if (promotions.length === 0) {
        return null;
    }

    return (
        <div className='bannerslider-content'>
            <div className="banners">

                {promotions.map((promotion, index) => (
                    <img
                        key={promotion.id}

                        src={promotion.image}

                        alt="Banner promocional"
                        className={`

                            ${index === current ? 'active' : ''}

                            ${index === current ? direction : ''}

                        `}
                    />
                ))}

                <div className="banner-arrows">
                    <button
                        className='btn-left'
                        onClick={prevBanner}
                    >
                        <IconChevronLeft />
                    </button>

                    <button
                        className='btn-right'
                        onClick={nextBanner}
                    >
                        <IconChevronRight />
                    </button>
                </div>

                <div className="banner-indicators">
                    {promotions.map((promotion, index) => (
                        <span
                            key={promotion.id}
                            className={index === current ? 'active' : ''}
                        ></span>
                    ))}
                </div>

            </div>


        </div>
    )
}

export default BannerSlider