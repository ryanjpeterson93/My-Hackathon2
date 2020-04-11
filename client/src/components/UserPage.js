import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import axios from 'axios'
import { Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class UserPage extends React.Component {
  state = {
    books: [],
    artist: [],
    movies: [],
    firstCall: false
  }

  deleteUser = () => {
    const { auth: { user, handleDelete, } , history} = this.props;
    handleDelete(user,history )
  }

  deleteItem = (category, id) => {
    const { auth: { user, handleDelete, } , history} = this.props;
    axios.delete(`/api/users/${user.id}/${category}/${id}`)
  }

  updateItem = (category, id) => {

  }

  getAllItems = (id) => {
    axios.get(`/api/users/1/artists`).then(res => this.setState({ artist: res.data }))
    axios.get(`/api/users/1/movies`).then(res => this.setState({ movies: res.data }))
    axios.get(`/api/users/1/books`).then(res => this.setState({ books: res.data }))
    this.setState({ firstCall: true })
  }

  renderMovies = () => {
    const { movies } = this.state
    return (
      <div style={style.categoryHolder}>
        <div style={style.header}>
          <div>
            <h3 style={{ fontSize: '2vw' }}>Your Movies</h3>
          </div>
          <div>
            <Button style={style.button}>Add A Movie</Button>
            <div>
                
            </div>
          </div>
        </div>
        <div>
          {this.renderItem(movies, 'movies')}
        </div>
      </div>
    )
  }

  renderItem = (category, name) => {
    if (category.length === 0) {
      return (
        <div style={{ padding: '1%' }}>
          <h1 style={{ fontSize: '1vw' }}>NOTHING TO SHOW</h1>
        </div>
      )
    }
    else {
      if (name === 'movies') {
        return (
          <div>
            {category.map(item => {
              return (
                <div style={style.item}>
                  <div style={{ width: '50%' }}>
                    <h2 style={{ marginBottom: '2%' }}>{item.title}</h2>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <h5 style={{ margin: '0px' }}>Summary</h5>
                        <h6 style={{ margin: '0px' }}>{item.summary}</h6>
                        <h5 style={{ margin: '0px' }}>Genre</h5>
                        <h6 style={{ margin: '0px' }}>{item.genre}</h6>
                      </div>
                      <div>
                        <h5 style={{ margin: '0px' }}>Runtime</h5>
                        <h6 style={{ margin: '0px' }}>{item.run_time}</h6>
                        <h5 style={{ margin: '0px' }}>Rating</h5>
                        <h6 style={{ margin: '0px' }}>{item.rating}</h6>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button style={{ color: 'red' }}  onClick={()=>{name, item.id }} compact><Icon name='trash alternate' />Delete</Button>
                    <Button style={{ color: 'white', backgroundColor: 'blue' }} compact><Icon name='edit' />Edit</Button>
                  </div>
                </div>
              )
            })}
          </div>
        )
      }
      else if (name === 'books') {
        return (
          <div>
            {category.map(item => {
              return (
                <div style={style.item}>
                  <div style={{ width: '50%' }}>
                    <h2 style={{ marginBottom: '2%' }}>{item.title}</h2>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div>
                        <h5 style={{ margin: '0px' }}>Author</h5>
                        <h6 style={{ margin: '0px' }}>{item.author}</h6>
                        <h5 style={{ margin: '0px' }}>Summary</h5>
                        <h6 style={{ margin: '0px' }}>{item.summary}</h6>
                      </div>
                      <div>
                        <h5 style={{ margin: '0px' }}>Genre</h5>
                        <h6 style={{ margin: '0px' }}>{item.genre}</h6>
                      </div>
                    </div>
                  </div>
                  <div>
                    <Button style={{ color: 'red' }} onClick={()=>{name, item.id }} compact><Icon name='trash alternate' />Delete</Button>
                    <Button style={{ color: 'white', backgroundColor: 'blue' }} compact><Icon name='edit' />Edit</Button>
                  </div>
                </div>
              )
            })}
          </div>
        )
      }
      else {
        return (
          <div>
            {category.map(item => {
              return (
                <div style={style.item}>
                  <div style={{ width: '50%' }}>
                    <h2 style={{ marginBottom: '2%' }}>{item.name}</h2>
                    <div >
                      <h5 style={{ margin: '0px' }}>Genre</h5>
                      <h6 style={{ margin: '0px' }}>{item.genre}</h6>
                      <h5 style={{ margin: '0px' }}>Albums</h5>
                      <h6 style={{ margin: '0px' }}>{item.albums}</h6>
                    </div>
                  </div>
                  <div>
                    <Button style={{ color: 'red' }} compact><Icon name='trash alternate' />Delete</Button>
                    <Button style={{ color: 'white', backgroundColor: 'blue' }} compact><Icon name='edit' />Edit</Button>
                  </div>
                </div>
              )
            })}
          </div>
        )
      }
    }
  }

  renderArtists = () => {
    const { artist } = this.state
    return (
      <div style={style.categoryHolder}>
        <div style={style.header}>
          <div>
            <h3 style={{ fontSize: '2vw' }}>Your Artists</h3>
          </div>
          <div>
            <Button style={style.button}>Add An Artist</Button>
          </div>
        </div>
        <div>
          {this.renderItem(artist, 'artists')}
        </div>
      </div>
    )
  }

  renderBooks = () => {
    const { books } = this.state
    return (
      <div style={style.categoryHolder}>
        <div style={style.header}>
          <div>
            <h3 style={{ fontSize: '2vw' }}>Your Books</h3>
          </div>
          <div>
            <Button style={style.button}>Add A Book</Button>
          </div>
        </div>
        <div>


          {this.renderItem(books, 'books')}
        </div>
      </div>
    )
  }

  render() {
    const { auth: { user, } } = this.props;
    if (!this.state.firstCall) { this.getAllItems(user.id) }
    return (
      <div>
        <div style={style.userHolder}>
          <div>
            <h1 style={{ fontSize: '3vw' }}>{user.name}</h1>
            <h3 style={{ fontSize: '2vw' }}>Email:{user.email}</h3>
            <h3 style={{ fontSize: '2vw' }}>Location:{user.location}</h3>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <Button onClick={this.deleteUser} style={{ color: 'red', borderRadius: '20px', fontSize: '1.5vw' }}>Delete</Button>
            </div>
            <div>
              <Link to='/updateuser'> <Button style={{ color: 'white', backgroundColor: 'blue', borderRadius: '20px', fontSize: '1.5vw' }}>Update</Button></Link>
            </div>
          </div>
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
    backgroundColor: '#e3e3e3'
  },
  userHolder: {
    borderRadius: '20px',
    boxShadow: '0px 5px 5px #999',
    margin: '3%',
    padding: '2%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  header: {
    backgroundColor: '#666',
    color: 'white',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    padding: '1%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  button: {
    borderRadius: '20px',
    fontSize: '1vw'
  },
  item: {
    backgroundColor: 'white',
    boxShadow: '0px 2px 10px #999',
    margin: '1% 3%',
    padding: '2%',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'space-between',
  }
}

export default ConnectedUserPage