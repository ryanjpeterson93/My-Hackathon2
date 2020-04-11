import React, {  useState, useEffect, } from "react";
import { Link, } from "react-router-dom";
import { Card, } from 'semantic-ui-react';

const Artist = (props) => {
  const { albums, setAlbums } = useState([]);
 
  const artist = {id: props.id, albums: props.albums, genre: props.genre, }

  // useEffect( () => {
  //   axios.get(`/api/artists/${artist.id}/albums`)
  //     .then(res => {
  //       setAlbums(res.data)
  //     })
  //     .catch(console.log)
  // }, []);

  // renderAlbums = () => {
  //   return albums.map ( album => (
      
  //   ))
  // }


  return (
    <>
      {/* <Card>
        <Card.Body>
          <Card.Header>Artist Name</Card.Header>
          <Card.Body>Albums: {props.albums}</Card.Body>
          <Card.Body>Genre: {props.genre}</Card.Body>
        </Card.Body>
      </Card> */}
      <br />
      <br />
    </>
  )
}

export default Artist;