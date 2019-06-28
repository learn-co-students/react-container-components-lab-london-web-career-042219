import React from "react";

const MovieReviews = props => {
  return (
    <div>
      <h1>Movie: {props.movie.display_title}</h1>
      <img
        src={
          props.movie.multimedia
            ? props.movie.multimedia.src
            : props.movie.link.url
        }
        alt={props.movie.display_title}
      />
      <h4>Opening Date:{props.movie.opening_date}</h4>
      <h2>{props.movie.headline}</h2>

      <h3>Summary: {props.movie.summary_short}</h3>
      <hr />
    </div>
  );
};
export default MovieReviews;
