//  http://www.omdbapi.com/?i=tt3896198&apikey=36e8688e
import React from 'react';
import { useState, useEffect } from 'react';
import './App.css'
import SearchIcon from './search.svg'
import Card from './Card'
const API_URL = 'http://omdbapi.com?apikey=36e8688e'

// const movie1 = {
//     "Title": "Sex and the City",
//     "Year": "2008",
//     "imdbID": "tt1000774",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMTYyMzYxMjM3OF5BMl5BanBnXkFtZTcwNjg2OTA3MQ@@._V1_SX300.jpg"
// }

const App = () => {
    
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] =  useState([]);

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Godfather');
    }, []);
    
    return (
        <div className="app">
            <h1>FILMALICIOUS!!!</h1>

            <div className="search">
                <input
                    placeholder='Search for movies'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                 />

                 <img
                    src={SearchIcon} 
                    alt="Search"
                    onClick={() => searchMovies(searchTerm)}
                 />
            </div>{
                movies?.length > 0 ? (
                    <div className='container'>{
                            movies.map((movie) => (
                                <Card movie={movie} />
                            ))
                        }
                     </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found.</h2>
                    </div>
                )
            }        
        </div>
    );
}

export default App;