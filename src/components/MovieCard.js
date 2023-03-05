import React from "react";
import { addFavourite, removeFromFavourites } from "../actions";

class MovieCard extends React.Component { 
 

   handleFavouriteClick=()=>{
    const {movie}=this.props;
    this.props.dispatch(addFavourite(movie));
  }

  handleUnFavouriteClick =()=>{
    const {movie} =this.props;
    this.props.dispatch(removeFromFavourites(movie))
  }
   

  render(){
    const { movie, isFavourite} = this.props;
  return (
    <div className="movie-card">
      <div className="left">
        <img alt="movie-poster" src={movie.Poster} />
      </div>
      <div className="right">
        <div className="title">{movie.Title}</div>
        <div className="plot">{movie.Plot}</div>
        <div className=" Actors">{movie.Actors}</div>
        <div className="Genre">{movie.Genre}</div>
        <div className="footer">
          <div className="rating">{movie.imdbRating}</div>
          {
            isFavourite 
            ?  <button className="unfavourite-btn" onClick={this.handleUnFavouriteClick}>UnFavourite</button>
            : <button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourite</button>
          }
          
        </div>
      </div>
    </div>
  );
  }
};

export default MovieCard;

// import React from 'react'

// class MovieCard extends React.Component{

//   render(){
//     const {movie}=this.props;
//     return (
//       <div className="movie-card">
//       <div className="left">
//         <img alt="movie-poster" src={movie.Poster}/>
//       </div>
//       <div className="right">
//       <div className="title">{movie.Title}</div>
//       <div className="plot">{movie.Plot}</div>
//       <div className="footer">
//          <div className="rating">{movie.imdbRating}
//          </div>
//     <button className="favourite-btn">Favourite</button>
//       </div>
//       </div>
//      </div>
//   )}
// }

// import React from "react";

// class MovieCard extends React.Component {
//     render(){
//          const {movie}=this.props
//         return (
//             <div className="App">
//              <div className="left">
//                <img alt="movie-poster" src={movie.Poster}/>
//              </div>
//              <div className="right"></div>
//              <div className="title">{movie.title}</div>
//              <div className="plot">{movie.plot}</div>
//              <div className="footer">
//                 <div className="rating">{movie.imdbRating}
//                 </div>
//           <button className="favourite-btn">Favourite</button>
//              </div>
//             </div>

//           );
//         }
//     }

// export default MovieCard;
