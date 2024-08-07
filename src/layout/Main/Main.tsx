import { useState } from "react";
import { Movie } from "../../interfaces/Movie.interface";
import axios, { AxiosError } from "axios";
import { Movies } from "../../components/Movies/Movies";
import { ISearch } from "../../interfaces/Search.interface";
import Search from "../../components/Search/Search";
function Main() {
    const [movies, setMovies] = useState<Movie[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();
	
	const searchMovies = async (str?: string, type: string = 'all') => {
        
        try {
            const {data} = await axios.get<ISearch>( `https://www.omdbapi.com/?apikey=78584b3c&s=${str == undefined ? 'Avengers' : `${str}`}/${type !== 'all' ? `&type=${type}`: ''}`);
				if (data.Response === 'True'){setMovies(data.Search);}
				else {setMovies([]);}
            setIsLoading(false);
				
			
			
        } catch (e) {
            console.error(e);
			if (e instanceof AxiosError) {
				setError(e.message);
			}
            setIsLoading(false);
			return;
        }
    };



    return <>
			
		<div>
		<Search searchMovies = {searchMovies}/>
			{error && <>{error}</>}
			{!isLoading && ((movies.length > 0)|| movies == undefined)  && <Movies movies={movies} />}
			{isLoading && <>Загружаем продукты...</>}
			{!isLoading && movies.length === 0 && <>Не найдено фильмов по запросу</>}
		</div>
		
    </>
}

export default Main