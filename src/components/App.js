import React from "react";
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { addMovies, setShowFavourites } from "../actions";


class App extends React.Component {
  
componentDidMount(){
const {store}=this.props;
store.subscribe(()=>{
  console.log('updated')
  this.forceUpdate();
})
//make api call and dispatch actions
store.dispatch(addMovies(data));

console.log('STATE', this.props.store.getState())
console.log('RENDER')
}

isMovieFavourite=(movie)=>{
  const {movies}=this.props.store.getState();
  const index=movies.favourites.indexOf(movie)
  if(index !==-1){
    // we found the movie
    return true;
  }
  return false;
}


onChangeTab =(val)=>{
  this.props.store.dispatch(setShowFavourites(val))
}

render(){
  const {movies}=this.props.store.getState();
const {list, favourites, showFavourites}=movies; //list [] as an array and favourate[]

const displayMovies= showFavourites ? favourites : list;

console.log('RENDER', this.props.store.getState())
  return (
    
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className={`tab ${showFavourites ? '': 'active-tabs' }`} onClick={()=>this.onChangeTab(false)}>Movies</div>
          <div className={`tab ${showFavourites ? 'active-tabs' : ' ' }`} onClick={()=>this.onChangeTab(true)}>Favourites</div>
        </div>
        <div className="list">
        {displayMovies.map((movie,index) => 

        <MovieCard key={`movie-${index}}`} movie={movie}
         dispatch={this.props.store.dispatch}
           isFavourite={this.isMovieFavourite(movie)}/>
        )}
        
        </div>

        {displayMovies.length ===0 ? <div className="no-movies">No Movies To Display </div> : null}
      </div>
    </div>
);
  }
}

export default App;
