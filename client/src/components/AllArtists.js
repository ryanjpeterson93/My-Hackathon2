import React, { useState, useEffect, } from 'react';
import axios from "axios"
import Artist from './Artist';
import {Button} from 'semantic-ui-react';
import ArtistForm from '../components/forms/ArtistForm';



const AllArtists = () => {
  const [artists, setArtists] = useState([]);
  const [showForm, setShowForm] = useState(false)
  

  useEffect(() => {
    axios.get("/api/artists/all_artists")
      .then(res => {
        setArtists(res.data)
        console.log(res.data)
      })
  }, []);

  const addArtist = (artist) => {
    setArtists([artist, ...artists])
  };

  const deleteArtist = (id, user_id) => {
    axios.delete(`/api/users/${user_id}/artists/${id}`)
      .then( res => {
        setArtists(artists.filter( (artist) => artist.id !== id))
      })
  }

  const editArtist = (id, artist, user_id) => {
    axios.put(`api/users/${user_id}/artists/${id}`, artist)
      .then( res => {
        const updateArtist = artists.map( artist => {
          if(artist.id === id)
            return res.data
          return artist;
        })
        setArtists(updateArtist)
      })
  }

  const renderArtists = () => {
    return artists.map( artist => (
      <Artist key={artist.id} {...artist} editArtist={editArtist} deleteArtist={deleteArtist} />
    ))
  };

  const handleClick = (e) => {
    setShowForm(!showForm);
    console.log('click')
    console.log(showForm)
  }

  return (
    <div>
      <h1 align="center">All Artists</h1>
      <hr />
      <Button color="blue" onClick={handleClick}>{showForm ? "Close Add Form" : "Show Add Form"}</Button>
      {showForm && <ArtistForm addArtist={addArtist} toggleForm={setShowForm} />}
      <br />
      <br />
      {renderArtists()}
    </div>
  );
};

export default AllArtists;