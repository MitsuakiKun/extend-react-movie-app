import React, { useContext, useEffect } from 'react';
import { getUpcomingMovies } from "../api/tmdb-api";
import PageTemplate from "../components/templateMovieListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import AddToMustWatchesIcon from '../components/cardIcons/addToMustWatches';
import { LanguageContext } from '../contexts/languageContext';

const UpcomingMoviesPage = (props) => {
  const { language } = useContext(LanguageContext);
 
  const { data, error, isLoading, isError, refetch } = useQuery('upcoming', () => getUpcomingMovies(language));

  useEffect(() => {
      refetch();
  }, [language, refetch]);

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