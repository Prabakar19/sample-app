const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "5b21ca3ee7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentailRate: 2.5,
    publishDate: "2018-01-03T19:04:28.8092",
    liked: true,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    genre: { _id: "5b21ca3ee7f6fbccd471818", name: "Action" },
    numberInStock: 5,
    dailyRentailRate: 2.5,
    liked: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Hangover",
    genre: { _id: "5b21ca3ee7f6fbccd471819", name: "Comedy" },
    numberInStock: 3,
    dailyRentailRate: 2.6,
    liked: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471818",
    title: "American Pie",
    genre: { _id: "5b21ca3ee7f6fbccd471819", name: "Comedy" },
    numberInStock: 4,
    dailyRentailRate: 2.5,
    liked: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "Twlight",
    genre: { _id: "5b21ca3ee7f6fbccd471820", name: "Romance" },
    numberInStock: 5,
    dailyRentailRate: 2.5,
    liked: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd471820",
    title: "GetOut",
    genre: { _id: "5b21ca3ee7f6fbccd471821", name: "Thriller" },
    numberInStock: 8,
    dailyRentailRate: 3.5,
    liked: false,
  },
  {
    _id: "5b21ca3eeb7f6fbccd4718121",
    title: "Airplane",
    genre: { _id: "5b21ca3ee7f6fbccd471819", name: "Comedy" },
    numberInStock: 7,
    dailyRentailRate: 3.5,
    liked: false,
  },
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find((m) => m._id === id);
}
