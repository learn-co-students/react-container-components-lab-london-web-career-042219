import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "&api-key=jiXJo5sIOKDttYWxyxbf3VAg2vhQSjEg";

class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  };

  getDataFromServer = event => {
    event.preventDefault();
    fetch(
      `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${
        this.state.searchTerm
      }${NYT_API_KEY}`
    ).then(r =>
      r.json().then(movies => this.setState({ reviews: movies.results }))
    );
  };

  eachMovie = () => {
    return this.state.reviews.map((movie, i) => (
      <MovieReviews movie={movie} key={i} />
    ));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.getDataFromServer}>
          <input
            type="text"
            placeholder="search"
            onChange={event =>
              this.setState({ searchTerm: event.target.value })
            }
          />
        </form>
        {this.eachMovie()}
      </div>
    );
  }
}
export default SearchableMovieReviewsContainer;
