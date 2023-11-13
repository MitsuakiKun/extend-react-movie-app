const titles = {
  "en-US": {
    discoverMovies: "Discover Movies",
    upcomingMovies: "Upcoming Movies",
    favoriteMovies: "Favorite Movies",
    filterMovies: "Filter the Movies.",
    waitingMovieDetails: "Waiting for movie details",
    overview: "Overview",
    Reviews: "Reviews",
    home: "Home",
    favorites: "Favorites",
    upcoming: "Upcoming",
    tmdbClient: "TMDB Client",
    menubar: "All you ever wanted to know about Movies!",
    genre: "Genre",
    search: "Search field",
    moreInfo: "More info...",
    min: "min.",
    released: "Released",
    productionCountries: "Production Countries",
    reviewBy: "Review By:",
    author: "Author",
    excerpt: "Excerpt",
    more: "More",
  },
  "ja-JA": {
    discoverMovies: "映画を探索",
    upcomingMovies: "公開予定の映画",
    favoriteMovies: "お気に入りの映画",
    filterMovies: "映画を絞り込む",
    waitingMovieDetails: "映画の詳細を待っています",
    overview: "概要",
    Reviews: "レビュー",
    home: "ホーム",
    favorites: "お気に入り",
    upcoming: "公開予定",
    tmdbClient: "TMDB クライアント",
    menubar: "映画に関するすべての情報がここに！",
    genre: "ジャンル",
    search: "検索",
    moreInfo: "詳細...",
    min: "分",
    released: "リリース日",
    productionCountries: "製作国",
    reviewBy: "レビュー者:",
    author: "著者",
    excerpt: "抜粋",
    more: "詳細",
  },
};

export const getString = (language, key) => {
  if (titles[language] && titles[language][key]) {
    return titles[language][key];
  }

  // Fallback to English if the language or key is not found
  return titles["en-US"][key];
};