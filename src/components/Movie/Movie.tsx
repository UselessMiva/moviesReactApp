
import {MovieProps}  from "./Movie.props";
function Movie(props: MovieProps) {
    return (
    <div id={props.imdbID} className='card movie'>
            <div className='card-image waves-effect waves-block waves-light'>
                {props.Poster === 'N/A' ? (
                    <img
                        className='activator'
                        src={`https://via.placeholder.com/300x400?text=${props.Title}`}
                    />
                ) : (
                    <img className='activator' src={props.Poster} />
                )}
            </div>
            <div className='card-content'>
                <span className='card-title activator grey-text text-darken-4'>
                    {props.Title}
                </span>
                <p>
                    {props.Year} <span className='right'>{props.Type}</span>
                </p>
            </div>
        </div>
    
            )
}

export default Movie