import { render, screen, getByAltText, getByText } from '@testing-library/react';
import App from '../App';
import Card from '../components/Card';

test('fe_heading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Search by Movies Name/i);
  expect(linkElement).toBeInTheDocument();
})

test('fe_moviepicture', () => {
    const movies = [
        {Title: 'Avengers: Endgame', Year: '2019', imdbID: 'tt4154796', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg'},
        {Title: 'Avengers: Infinity War', Year: '2018', imdbID: 'tt4154756', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg'},
        {Title: 'The Avengers', Year: '1961–1969', imdbID: 'tt0054518', Type: 'series', Poster: 'https://m.media-amazon.com/images/M/MV5BZWQwZTdjMD…jdlMDRlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg'}
      ];
  render(<Card movies={movies}/>);
const moviePicture1 = screen.getByAltText('Avengers: Endgame');
expect(moviePicture1).toBeInTheDocument();
});

test('fe_movietitle', () => {
    const movies = [
        {Title: 'Avengers: Endgame', Year: '2019', imdbID: 'tt4154796', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg'},
        {Title: 'Avengers: Infinity War', Year: '2018', imdbID: 'tt4154756', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg'},
        {Title: 'The Avengers', Year: '1961–1969', imdbID: 'tt0054518', Type: 'series', Poster: 'https://m.media-amazon.com/images/M/MV5BZWQwZTdjMD…jdlMDRlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg'}
      ];
  render(<Card movies={movies}/>);
const movietitle = screen.getByText('The Avengers');
expect(movietitle).toBeInTheDocument();
});
