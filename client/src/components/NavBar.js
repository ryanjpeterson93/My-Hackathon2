import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <>
          <Menu.Menu position='left'>
            <Link to='/all_artists'>
              <Menu.Item
                name='artists'
                id='artists'
                active={this.props.location.pathname === '/all_artists'}
              />
            </Link>
            <Link to='/all_movies'>
              <Menu.Item
                name='movies'
                id='movies'
                active={this.props.location.pathname === '/all_movies'}
              />
            </Link>
            <Link to='/all_books'>
              <Menu.Item
                name='books'
                id='books'
                active={this.props.location.pathname === '/all_books'}
              />
            </Link>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Link to='/userpage'>
              <Menu.Item
                name={`${user.name}`}
                id='userpage'
                active={this.props.location.pathname === '/userpage'}
              />
            </Link>
            <Menu.Item
              name='logout'
              onClick={() => handleLogout(this.props.history)}
            />
          </Menu.Menu>
        </>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link>
          {this.rightNavItems()}
        </Menu>
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <Navbar {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);