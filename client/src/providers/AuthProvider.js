import React from "react";
import axios from "axios";

export const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  state = { user: null, };

  handleRegister = (user, history) => {
    axios.post("/api/auth", user)
      .then( res => {
        this.setState({ user: res.data.data, });
        history.push("/");
      })
    .catch( res => {
      console.log(res);
    })
  }
  
  handleLogin = (user, history) => {
    axios.post("/api/auth/sign_in", user)
      .then( res => {
        this.setState({ user: res.data.data, });
        history.push("/");
      })
      .catch( res => {
        console.log(res);
      })
  }
  handleUpdate = (user, history) => {
    axios.put("/api/auth", user)
      .then(res => {
        this.setState({ user: res.data.data, });
        history.push('/userpage')
      })
  }
  
  handleLogout = (history) => {
    axios.delete("/api/auth/sign_out")
      .then( res => {
        this.setState({ user: null, });
        history.push('/login');
      })
      .catch( res => {
        console.log(res);
      })
  }

  handleDelete = (user, history)=>{
    axios.delete('api/auth', user)
    .then(res => {
      this.setState({ user: null, });
        history.push('/login');
    })
  }
  
  render() {
    return (
      <AuthContext.Provider value={{
        ...this.state,
        authenticated: this.state.user !== null,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        handleUpdate: this.handleUpdate,
        handleDelete: this.handleDelete,
        setUser: (user) => this.setState({ user, }),
      }}>
        { this.props.children }
      </AuthContext.Provider>
    )
  }
};

export default AuthProvider;
