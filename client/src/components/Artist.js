import React, {  useState, useEffect, } from "react";
import { Link, } from "react-router-dom";
import { Card, } from 'semantic-ui-react';
import axios from 'axios';

const Artist = (props) => {
  const { albums, setAlbums } = useState([]);
 
  const artist = {id: props.id, albums: props.albums, genre: props.genre, }
 

  const renderAlbums = () => {
    albums = props.albums

    let albumsShow = albums.map((str) => ({ name: str}));

    albumsShow.map(album=>{
     
      <>
      {album.name}
      </>
    
    })

    // const renderArtists = () => {
    //   return artists.map( artist => (
    //     <Artist key={artist.id} {...artist} />
    //   ))
    // };
    // return( albums.forEach( album => {
    //   return "album"
    // }));
  };
  

  return (
    
    <Card>
      <Card.Header>Artist</Card.Header>
      <Card.Content>Genre: {}</Card.Content>
      <Card.Content>Albums: {renderAlbums()}</Card.Content>
    </Card>
  )
}

export default Artist;