import React, { Component } from 'react';
import CardsContainer from './components/CardsContainer'
import GoogleMap from './components/GoogleMap'
// import FavoritesContainer from './components/FavoritesContainer'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
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
          {home: home.id, profile: 3}
      )
    })
      .then(response => response.json())
      .then(favorite => this.setState({favorites: [...this.state.favorites, favorite]}))
        window.location.reload(false)
  }

  render(){
    const useStyles = makeStyles((theme) => ({
      root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
    }));
    
    return (
      <div className="App">
        <div className={useStyles.root}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Paper className={useStyles.paper}> 
                <GoogleMap /> 
              </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={useStyles.paper}>
              <CardsContainer clickAction={this.addToFavorites} allHomes={this.state.homes} />
          </Paper>
          </Grid>
          </Grid>
          {/* <FavoritesContainer allFavorites={this.state.favorites} /> */}
        </div>
      </div>
    )
  }
}

export default App;