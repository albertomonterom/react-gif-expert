import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

// Un hook no es más que una función
export const useFetchGifs = (category) => {
    
    // Prmero las imagesnes están en estado nulo
    const [images, setImages] = useState([]);

    // Cuando  cargo por  priemera vez es true
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        // Aquí react avisa que hubo un cambio y se
        // renderiza en GifGrid
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages();
    }, []);

    return {
        // images = images
        images,
        // isLoading = isLoading
        isLoading
    }
}