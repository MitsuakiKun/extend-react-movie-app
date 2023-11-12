import React from "react";
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToMustWatchesIcon from '../components/cardIcons/addToMustWatches';

const UpcomingMoviesPage = () => {
  const { data, error, isLoading, isError } = useQuery('upcoming', getUpcomingMovies);

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  const movies = data.results;
  const mustWatches = movies.filter(m => m.mustWatch)
  localStorage.setItem('mustWatches', JSON.stringify(mustWatches))
   
  const selectFavorite = () => true;

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      action={(movie) => {
        return <AddToMustWatchesIcon movie={movie} />
      }}
    />
  );
};
  
export default UpcomingMoviesPage;