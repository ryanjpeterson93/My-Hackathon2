import React from 'react';
import { Header, } from 'semantic-ui-react';
import MovieForm from '../forms/MovieForm'
import ArtistForm from '../forms/ArtistForm'

const Home = () => (
  <>
  {/* <Header as="h3" textAlign="center">ABC</Header> */}
  <ArtistForm/>
  <MovieForm />
  </>
)
export default Home;