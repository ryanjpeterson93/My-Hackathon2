import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import axios from 'axios'

class UserPage extends React.Component {

  renderMovies = () => {
    return (
      <div style={style.categoryHolder}>
        <h3>Your Movies</h3>
        <div>
          <h6>Nothing to show</h6>
        </div>
      </div>
    )
  }

  renderArtists = () => {
    return (
      <div style={style.categoryHolder}>
        <h3>Your Artist</h3>
        <div>
          <h6>Nothing to show</h6>
        </div>
      </div>
    )
  }

  renderBooks = () => {
    return (
      <div style={style.categoryHolder}>
        <h3>Your Books</h3>
        <div>
          <h6>Nothing to show</h6>
        </div>
      </div>
    )
  }

  render() {
    const { auth: { user, handleLogout, } } = this.props;
    return (
      <div>
        <div style={style.userHolder}>
          <h1>{user.email}</h1>
          <h3>{user.location}</h3>
        </div>
        {this.renderMovies()}
        {this.renderArtists()}
        {this.renderBooks()}

      </div>
    )
  }
}
class ConnectedUserPage extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <UserPage {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

const style = {
  categoryHolder: {
    borderRadius: '20px',
    boxShadow: '0px 7px 10px #333',
    margin: '3%',
    padding: '1%',
    textAlign: 'center'
  },
  userHolder: {
    borderRadius: '20px',
    boxShadow: '0px 7px 10px #333',
    margin: '3%',
    padding: '1%',
  }
}

export default ConnectedUserPage