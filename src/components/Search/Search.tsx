
import {  useState } from "react";
import { SearchProps } from "./Search.props";

function Search(props: SearchProps) {
    const [search, setSearch] = useState<string>('');
	const [type, setType] = useState<string>('all');

    const handleKey = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            props.searchMovies(search, type);
        }
    };
    const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
            setType(event.target.dataset.type || 'all'); // Убедитесь, что есть значение по умолчанию
            props.searchMovies(search, event.target.dataset.type || 'all');
    
    };
    
    return <>
   
   <div className="row">
                <div className="input-field ">
                    <input
                        className="validate"
                        placeholder="search"
                        type="search"
                        value={search}
                        onChange={(event) =>
                            setSearch(event.target.value)
                        }
                        onKeyDown={handleKey}
                    />
                    <button
                        className="btn blue darken-2 search-btn"
                        onClick={() =>{
                            props.searchMovies(search, type);
                        }
                        }
                    >
                        Search
                    </button>
                </div>

                <div className="search-radio">
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="all"
                            onChange={handleFilter}
                            checked={type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="movie"
                            onChange={handleFilter}
                            checked={type === 'movie'}
                        />
                        <span>Movies only</span>
                    </label>
                    <label>
                        <input
                            className="with-gap"
                            name="type"
                            type="radio"
                            data-type="series"
                            onChange={handleFilter}
                            checked={type === 'series'}
                        />
                        <span>Series only</span>
                    </label>
                </div>
            </div>
    </>
}

export default Search