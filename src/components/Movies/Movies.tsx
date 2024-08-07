import  Movie  from '../Movie/Movie';
import { MoviesProps } from './Movies.props';
import styles from './Movies.module.css'
function Movies(props: MoviesProps) {
    const { movies = [] } = props;

    return (
        <div className={styles['movies']}>
            {!movies.length ? (
                <h4>Nothing found</h4>
            ): (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ) }
        </div>
    );
}
export { Movies };