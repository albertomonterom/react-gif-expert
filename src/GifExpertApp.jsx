import { useState } from "react";
// Por default busca el index
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState(['One Punch']);

    const onAddCategory = newCategory => {

        // Si la categoría ya existe no hacer nada, si no 
        // agregarla
        if( categories.includes( newCategory ) ) return;

        setCategories([newCategory, ...categories]);
    }
    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>
        
            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories }
                // cuando hay un nuevo valor
                // onNewCategory es un prop

                // Es como si dihera funcion (newCategory) {}
                onNewCategory={ newCategory => onAddCategory(newCategory) }
            />

            {/* Listado de Gif */}

            {/* No usar el indice */}
            { 
                categories.map(category => (
                    <GifGrid key={ category } 
                                category={ category } />)
                ) 
            }
        </>
    )
}