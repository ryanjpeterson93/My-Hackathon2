import React from "react";
import axios from "axios";
import { Form, Button } from "semantic-ui-react";

class ArtistForm extends React.Component {
  state = { albums:"", genre:"", name:"" };

  

  render() {
    const { albums, genre, name } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
        <Form.Input
            label="Name"
            placeholder="Name"
            required
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Albums"
            placeholder="Albums"
            required
            name="album"
            value={albums}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Genre"
            placeholder="Genre"
            required
            name="genre"
            value={genre}
            onChange={this.handleChange}
          />
          <Button type="submit">add</Button>
        </Form>
      </>
    );
  }
}
export default ArtistForm;