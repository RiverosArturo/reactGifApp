import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";



export const GifGrid = ({ category }) => {

    //Optimizando codigo |custom hook|
    const { images, isLoading } = useFetchGifs( category );
    //console.log({ isLoading });

    //Antes de optimizar codigo lo pasamos a nuestro hook useFetchGifs

    return (
        <>
            <h3> { category } </h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
                //isLoading esta en true
                //FORMA 2
                // isLoading
                // ?( <h2>Cargando...</h2> )
                // : null //isLoading esta en false
            }
            {/* Con className ponemos la clase de css que vamos a utilizar en nuestro div */}
            <div className="card-grid">
                {   
                    //sin destructurar objeto/arreglo
                    images.map( img => (
                    //Desestructurando objeto/arreglo
                    // images.map( ({id, title}) => (
                        //<li key={ id }>{ title }</li>

                        <GifItem 
                            key={ img.id }
                            // img={ img } 
                            // title={ img.title}
                            // url={ img.url}  
                            //Con { ...img } mandamos todas las propiedades de nuestra img a nuestro componente GifItem
                            {...img}    
                        />

                    ))
                }
            </div>

        </>
    )
}
