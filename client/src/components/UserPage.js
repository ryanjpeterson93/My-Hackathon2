import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import axios from 'axios'

class UserPage extends React.Component {

  renderMovies = () => {
    return (
      <div style={style.categoryHolder}>
        <div style={style.header}>
          <h3 style={{fontSize:'2vw'}}>Your Movies</h3>
        </div>
        <div>
          <h6>Nothing to show</h6>
        </div>
      </div>
    )
  }

  renderArtists = () => {
    return (
      <div style={style.categoryHolder}>
        <div style={style.header}>
          <h3 style={{fontSize:'2vw'}}>Your Artist</h3>
        </div>
        <div>
          <h6>Nothing to show</h6>
        </div>
      </div>
    )
  }

  renderBooks = () => {
    return (
      <div style={style.categoryHolder}>
        <div style={style.header}>
          <h3 style={{fontSize:'2vw'}}>Your Books</h3>
        </div>
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
          <h1 style={{fontSize:'3vw'}}>{user.email}</h1>
          <h3 style={{fontSize:'2vw'}}>{user.location}</h3>
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
    borderRadius: '10px',
    boxShadow: '0px 5px 5px #999',
    margin: '3%',
    padding: '0px',
    textAlign: 'center',
  },
  userHolder: {
    borderRadius: '20px',
    boxShadow: '0px 5px 5px #999',
    margin: '3%',
    padding: '2%',
  },
  header: {
    backgroundColor: '#666',
    color: 'white',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    padding: '1%'
  }
}

export default ConnectedUserPage