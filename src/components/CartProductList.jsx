import React, { useState } from "react";
//import movies from "../data/movies.json";
import Movie from "./Movie";
import axios from "axios";
import { useEffect } from "react";

function CartProductList({ title, rating, page, setPage }) {
  // const [filteredMovies, setfilteredMovies] = useState([]);
  // const [totalPages, setTotalPages] = useState(0);

  // useEffect(() => {
  //   const url = title
  //     ? `https://api.themoviedb.org/3/movie/?api_key=${process.env.REACT_APP_TMDB_API}&sort_by=popularity.desc&query=${title}&page=${page}`
  //     : `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_API}&language=en-US&sort_by=popularity.desc&vote_average.gte=${rating}&page=${page}`;
  //   const fetchData = async () => {
  //     const { data } = await axios({
  //       method: "GET",
  //       url: url,
  //     });
  //     setTotalPages(data.total_pages);
  //     if (page > 1) {
  //       console.log(filteredMovies);
  //       setfilteredMovies([...filteredMovies, ...data.results]);
  //     } else {
  //       setfilteredMovies(data.results);
  //     }
  //   };
  //   fetchData();
  // }, [title, rating, page]);

  const data = [
    {
      id: 1,
      name: "Sabanera",
      price: "550",
      image:
        "https://cultocafe.uy/wp-content/uploads/2020/03/DSC09435-600x750.jpg",
    },
    {
      id: 2,
      name: "Mamba Negra",
      price: "750",
      image:
        "https://cultocafe.uy/wp-content/uploads/2020/03/DSC09429-600x750.jpg",
    },
    {
      id: 3,
      name: "Naja",
      price: "650",
      image:
        "https://cultocafe.uy/wp-content/uploads/2020/03/DSC09428-600x750.jpg",
    },
    {
      id: 4,
      name: "Cascabel",
      price: "500",
      image:
        "https://cultocafe.uy/wp-content/uploads/2020/03/DSC09427-600x750.jpg",
    },
  ];

  return (
    <div>
      <div className="container">
        <div className="row">
          {data.length > 0 ? (
            data.map((product) => (
              <div className="col-md-3">
                <Movie movie={movie} key={movie.id} />
              </div>
            ))
          ) : (
            <p className="text-center">Lo siento no hay peliculas</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartProductList;
