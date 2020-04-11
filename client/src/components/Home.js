import React from 'react';
import { Header, } from 'semantic-ui-react';
import AllArtists from './AllArtists';
import AllBooks from './AllBooks';
import AllMovies from './AllMovies';

const Home = () => (
  <>
  <Header as="h1" textAlign="center">Welcome to SOCIAL MEDIA!</Header>
  <h3>Add Movies, Books, and Artists you love to your profile.</h3>
  <AllArtists />
  <AllBooks />
  <AllMovies />
  </>
)

export default Home;