import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const PromotionBannerContext = createContext();

export const PromotionBannerProvider = ({ children }) => {

    const [banner, setBanner] = useState([]);

    const getbanner = async () => {

        console.log("entrou no getItems");

        const response = await axios.get(
            "https://e-commerce-74ck.onrender.com/promotions"
        );

        setBanner(response.data);
    };

    useEffect(() => {

        getbanner();

    }, []);

    return (
        <PromotionBannerContext.Provider value={{ banner }}>
            {children}
        </PromotionBannerContext.Provider>
    );
};