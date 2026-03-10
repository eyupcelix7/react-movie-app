/* eslint-disable no-unused-vars */
import { useState } from "react";
const movieList = [
    {
        Id: "769",
        Title: "GoodFellas",
        Year: "1990",
        Poster:
            "https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    },
    {
        Id: "120",
        Title: "The Lord of the Rings",
        Year: "2001",
        Poster:
            "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    },
    {
        Id: "27205",
        Title: "Inception",
        Year: "2010",
        Poster:
            "https://image.tmdb.org/t/p/original/ljsZTbVsrQSqZgWeep2B1QiDKuh.jpg",
    },
    {
        Id: "105",
        Title: "Back to the Future",
        Year: "1985",
        Poster:
            "https://image.tmdb.org/t/p/original/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
    },
];
const selectedMovieList = [
    {
        Id: "769",
        Title: "GoodFellas",
        Year: "1990",
        Poster:
            "https://image.tmdb.org/t/p/original/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
        Duration: 120,
        Rating: 7.4
    },
    {
        Id: "120",
        Title: "The Lord of the Rings",
        Year: "2001",
        Poster:
            "https://image.tmdb.org/t/p/original/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
        Duration: 125,
        Rating: 9.0
    }

]

const getAverage = (array) => 
    array.reduce((sum,value) => sum + value, 0) / array.length;
function App() {
    const [movies, setMovies] = useState(movieList);
    const [selectedMovies, setSelectedMovies] = useState(selectedMovieList);
    const [isOpen1, setIsOpen1] = useState(true);
    const [isOpen2, setIsOpen2] = useState(true);
    
    const avgRating = getAverage(selectedMovieList.map((m) => m.Rating));
    const avgDuration = getAverage(selectedMovieList.map((m) => m.Duration));
    return (
        <>
            <nav className="bg-primary text-white p-2">
                <div className="container">
                    <div className="row align-items-center ">
                        <div className="col-4">Movie App</div>
                        <div className="col-4">
                            <input type="text" className="form-control" placeholder="Film Ara" />
                        </div>
                        <div className="col-4 text-end">
                            <strong>5</strong> Kayıt Bulundu
                        </div>
                    </div>
                </div>
            </nav>
            <main className="container">
                <div className="row mt-2">
                    <div className="col-md-9">
                        <div className="movie-list">
                            <button className="btn btn-sm btn-outline-primary mb-2" onClick={() => setIsOpen1((val) => !val)}>
                                {
                                    isOpen1 ? (
                                        <i className="bi bi-chevron-up"></i>
                                    ) : (                                        
                                        <i className="bi bi-chevron-down"></i>
                                    )
                                }
                            </button>
                            {isOpen1 && (
                                <div className="row row-cols-1 row-cols-md-3 row-cols-xl-4 g-4">
                                    {
                                        movies.map((movie) => (
                                            <div className="col mb-2" key={movie.Id}>
                                                <div className="card">
                                                    <img className="card-img-top" src={movie.Poster} alt={movie.Title} />
                                                    <div className="card-body">
                                                        <h6 className="card-title">{movie.Title}</h6>
                                                        <div>
                                                            <i className="bi bi-calendar2-date me-1"></i>
                                                            <span>{movie.Year}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="movie-list">
                            <button className="btn btn-sm btn-outline-primary mb-2" onClick={() => setIsOpen2((val) => !val)}>
                                {
                                    isOpen2 ? (
                                        <i className="bi bi-chevron-up"></i>
                                    ) : (                                        
                                        <i className="bi bi-chevron-down"></i>
                                    )
                                }
                            </button>
                            {
                                isOpen2 &&
                                <>
                                    <div className="card mb-2">
                                        <div className="card-body">
                                            <h5>Listem [{selectedMovies.length}] film</h5>
                                            <div className="d-flex justify-content-between">
                                                <p>
                                                    <i className="bi bi-star-fill text-warning me-1"></i>
                                                    <span>{avgRating.toFixed(2)}</span>
                                                </p>
                                                <p>
                                                    <i className="bi bi-hourglass-split text-warning me-1"></i>
                                                    <span>{avgDuration.toFixed(0)} dk</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    {selectedMovies.map((movie) => (
                                        <div className="card mb-2" key={movie.Id}>
                                            <div className="row">
                                                <div className="col-4">
                                                    <img src={movie.Poster} alt={movie.Title} className="img-fluid rounded-start" />
                                                </div>
                                                <div className="col-8">
                                                    <div className="card-body">
                                                        <h6 className="card-title">{movie.Title}</h6>
                                                        <div className="d-flex justify-content-between">
                                                            <p>
                                                                <i className="bi bi-star-fill text-warning me-1"></i>
                                                                <span>{movie.Rating}</span>
                                                            </p>
                                                            <p>
                                                                <i className="bi bi-hourglass text-warning me-1"></i>
                                                                <span>{movie.Duration} dk</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </>
                            }
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default App