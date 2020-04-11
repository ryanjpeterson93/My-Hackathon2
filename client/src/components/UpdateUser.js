import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';

class UpdateUser extends React.Component {
  state = {name: this.props.auth.user.name, location: this.props.auth.user.location};

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, location, name } = this.state;
    const { auth: { handleUpdate, }, history, } = this.props;
    handleUpdate({ email, name, location },history);
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const {location, name } = this.state;

    return (
      <Segment basic>
        <Header as='h1' textAlign='center'>Register</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Name"
            required
            autoFocus
            name='name'
            value={name}
            placeholder='Name'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Location"
            required
            name='location'
            value={location}
            placeholder='Location'
            onChange={this.handleChange}
          />
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
      </Segment>
    )
  }
}

export default class ConnectedUpdateUser extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <UpdateUser {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}