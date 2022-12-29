import { useState } from "react"

export const AddCategory = ( { onNewCategory } ) => {

    const [inputValue, setinputValue] = useState('Paulo Londra');

    const onInputChange = ( { target } ) => {
        // console.log( target.value );
        setinputValue( target.value );
    }

    const onSubmit = (event) => {
        event.preventDefault();
        // console.log(inputValue);

        //Evita que insertemos categorias vacias
        if( inputValue.trim().length <= 1) return;

        //Hace que nuestra barra de busqueda se borre sola
        setinputValue('');

        // setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim() );
    }


    return (
        // <form onSubmit={ (event) => onSubmit(event) }>
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }
                // onChange={ (event) => onInputChange(event) }
                onChange={ onInputChange }
            />
        </form>
    )
}
