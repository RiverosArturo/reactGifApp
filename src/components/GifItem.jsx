
export const GifItem = ({ title, url, id }) => {
    // console.log(props);
    // console.log(img);
    // console.log( { title, url, id } );
    return (
        <div className="card">
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}
