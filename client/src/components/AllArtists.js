import React, { useState, useEffect, } from 'react';
import axios from "axios"
import Artist from './Artist';



const AllArtists = () => {
  const [artists, setArtists] = useState([]);
  

  useEffect(() => {
    axios.get("/api/all_artists")
      .then(res => {
        setArtists(res.data)
        console.log(res.data)
      })
  }, []);


  const renderArtists = () => {
    return artists.map( artist => (
      // <Artist key={artist.id} {...artist} />
      artist.genre
    ))
  };

  return (
    <div>
      <h1 align="center">All Artists</h1>
      <hr />
      {renderArtists()}
    </div>
  );
};

export default AllArtists;