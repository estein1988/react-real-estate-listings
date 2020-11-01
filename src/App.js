import React, { Component } from 'react';
// import CardsContainer from './components/CardsContainer'
import GoogleMap from './components/GoogleMap'
// import FavoritesContainer from './components/FavoritesContainer'
import './App.css';

class App extends Component {
  
  state = {
    homes: [],
    profiles: [],
    favorites: []
  }

  componentDidMount(){
    fetch('http://127.0.0.1:8000/homes/')
      .then(response => response.json())
      .then(homeData => { this.setState( {homes: homeData} ) })

    fetch('http://127.0.0.1:8000/profiles/')
      .then(response => response.json())
      .then(profileData => { this.setState( {profiles: profileData} ) })

    fetch('http://127.0.0.1:8000/favorites/')
      .then(response => response.json())
      .then(favoriteData => { this.setState( {favorites: favoriteData} ) })
  }

  addToFavorites = (home) => {
    fetch('http://127.0.0.1:8000/favorites/', {
      method:'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
          {home: home.id, profile: 1}
      )
    })
      .then(response => response.json())
      .then(favorite => this.setState({favorites: [...this.state.favorites, favorite]}))
      window.location.reload(false)
  }


  render(){
    return (
      <div className="App">
        <h1>7-10 Home-Split</h1>
          {/* <FavoritesContainer allFavorites={this.state.favorites} /> */}
          {/* <CardsContainer clickAction={this.addToFavorites} allHomes={this.state.homes} /> */}
          <GoogleMap />
      </div>
    )
  }
}

export default App;