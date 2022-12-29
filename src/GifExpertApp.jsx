import { useState } from "react"
import { AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Paulo Londra']);

    const onAddCategory = ( newCategory ) => {
        //console.log( newCategory );

        //retorna vacio si la categoria ya existe, sirve si solo es una linea de codigo en el if
        if( categories.includes( newCategory ) ) return;
        //console.log('Valorant');
        //No usar push hasta entenderlo bien
        //categories.push('Valorant');
        // Forma 1 de hacerlo
        setCategories( [ newCategory, ...categories ] );
        //Forma 2
        // setCategories( cat => [ ...categories, 'Valorant' ] );

    }
    return (
        <>
            {/* Titulo */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={ setCategories } 
                // onNewCategory = { event => onAddCategory(event) }
                onNewCategory = { onAddCategory }
            />

            {/* Listado de Gif (items/trajetas)
            <button onClick={ onAddCategory }>Agregar</button> */}
            { 
                // categories.map( category => {
                //     return (
                //         <div key={ category }>
                //             <h3>{ category }</h3>
                //             <li>{category}</li>
                //         </div>
                //     )
                // })
                //Forma simple/////////////////////
                // categories.map( category => (
                //     <div key={ category }>
                //         <h3>{ category }</h3>
                //         <li>{category}</li>
                //     </div>
                // ))

                //Forma simple usando el componente GifGrid//////
                categories.map( category => (
                    //Llamamos nuestro componente GifGrid
                    < GifGrid 
                        key={ category }
                        category={ category } />
                ))
            }
            
                {/* Gif Item */}
        </>
    )
}
