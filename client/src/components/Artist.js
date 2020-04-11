import React, {  useState, useEffect, useContext } from "react";
import { Card, Button, } from 'semantic-ui-react';
import ArtistForm from '../components/forms/ArtistForm';
import { AuthContext, } from "../providers/AuthProvider";


const Artist = (props) => {
  const { albums, setAlbums } = useState([]);
  const { user } = useContext(AuthContext)
  const [editing, setEditing] = useState(false);
 
  const artist = {id: props.id, albums: props.albums, genre: props.genre, name: props.name, }

  const renderAlbums = () => {
    console.log(props.albums.length)
    for (let i = 0; i < props.albums.length - 1; i++) {
      return (<Card.Content>{props.albums[i]}</Card.Content>)
    }
  }

  return (
    <Card>
      <Card.Header>{props.name}</Card.Header>
      <Card.Content>Genre: {props.genre}</Card.Content>
      <Card.Content>Albums: {renderAlbums()}</Card.Content>
      <Button color="blue" onClick={() => setEditing(!editing)}>Edit</Button>
      <Button color="red" onClick={() => props.deleteArtist(props.id, user.id)}>Delete</Button>
      { editing && <ArtistForm toggleEdit={setEditing} editArtist={props.editArtist} {...props} />}
    </Card>
  )
}

export default Artist;