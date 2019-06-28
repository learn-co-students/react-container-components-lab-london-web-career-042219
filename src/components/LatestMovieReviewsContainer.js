import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "?api-key=jiXJo5sIOKDttYWxyxbf3VAg2vhQSjEg";
const URL = "https://api.nytimes.com/svc/movies/v2/reviews/all.json";

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      reviews: []
    };
  }

  getDataFromServer = urlHolder => {
    fetch(urlHolder).then(r =>
      r.json().then(movies => this.setState({ reviews: movies.results }))
    );
  };

  componentDidMount() {
    this.getDataFromServer(URL + NYT_API_KEY);
  }

  eachMovie = () => {
    return this.state.reviews.map((movie, i) => (
      <MovieReviews movie={movie} key={i} />
    ));
  };
  render() {
    return <div className="latest-movie-reviews">{this.eachMovie()}</div>;
  }
}
export default LatestMovieReviewsContainer;
