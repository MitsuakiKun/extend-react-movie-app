import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from "../components/movieDetails/";
import PageTemplate from "../components/templateMoviePage";
import { getMovie } from '../api/tmdb-api'
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import { LanguageContext } from '../contexts/languageContext';

// import useMovie from "../hooks/useMovie"; 

const MoviePage = (props) => {
  const { id } = useParams();
  const { language } = useContext(LanguageContext);
  console.log(language)
  
  const { data: movie, error, isLoading, isError, refetch } = useQuery(
    ["movie", { id, language }],
    () => getMovie({ id }, language),  // Pass the language parameter here

    //TODO: 詳細画面のlanguageの値がうまく渡せていない？
  );

  useEffect(() => {
    refetch();
  }, [language, refetch]);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MoviePage;