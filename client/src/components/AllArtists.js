import React, { useEffect, useState, } from 'react';
import axios from 'axios';
import { Card, } from 'semantic-ui-react';
import Artist from './Artist';


const AllArtists = () => {
  const [ artists, setArtists ] = useState([]);

  useEffect( () => {
    axios.get('/api/movies')
      .then( (res) => {
        setArtists(res.data)
      })
      .catch(console.log)
  }, []);

  const renderArtists = () => {
    return artists.map( artist => (
      <Artist key={artist.id} {...artist} />
    ))
  };

  return(
    <div>
      <h1>All Artists</h1>
      {renderArtists()}
    </div>
  )

}

export default AllArtists;