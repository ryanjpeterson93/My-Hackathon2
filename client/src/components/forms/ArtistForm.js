import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";
import {AuthContext,} from "../../providers/AuthProvider";

const ArtistForm = (props) => {
  const { user } = useContext(AuthContext)
  const [name, setName] = useState('')
  const [albums, setAlbums] = useState('')
  const [genre, setGenre] = useState('')
  const [user_id, setUser_id] = useState('');


  const artist = { name:name, albums: albums, genre: genre }


  useEffect ( () => {
    if (props.id) {
      setName(props.name)
      setAlbums(props.albums)
      setGenre(props.genre)
      setUser_id(user.id)
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (props.editArtist) {
      props.editArtist(props.id, artist, user.id)
      // toggle form after info is submitted
      props.toggleEdit()
    } else {
      axios.post(`/api/users/${user.id}/artists`, artist)
        .then( res => {
          props.addArtist(res.data)
          props.toggleForm();
        })
    }
  };

    return (
      <>
        <Form onSubmit={handleSubmit}>
          <Form.Input
            label="Name"
            placeholder="Name"
            name="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Input
            label="Album"
            placeholder="Album"
            name="albums"
            required
            value={albums}
            onChange={(e) => setAlbums(e.target.value)}
          />
          <Form.Input
            label="Genre"
            placeholder="Genre"
            name="genre"
            required
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <Button color="green" type="submit">Submit</Button>
        </Form>
      </>
    );
};

export default ArtistForm;
