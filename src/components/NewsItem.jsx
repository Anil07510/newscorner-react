import React, { Component } from "react";
import Button from "@mui/material/Button";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import "./index.css";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgURL, newsUrl, author, publishedAt } =
      this.props;
    return (
      <div
        key={imgURL}
        className="card my-2 card_container"
        style={{ width: "17rem" }}
      >
        <img className="img-fluid card-img-top" src={imgURL} alt="CardImg" />
        <div className="card-body">
          <h5 className="card-title text-start title">
            <small>{title}</small>
          </h5>
          <p className="card-text text-start description">
            <small>{description}</small>
          </p>
          <a href={newsUrl}>
            <Button
              size="small"
              className="d-flex justify-content-start "
              variant="contained"
            >
              read more <KeyboardDoubleArrowRightIcon />
            </Button>
          </a>

          <span className="publisher_details publisher_details_1">
            <span>Published by</span>
            {author}
          </span>

          <span className="publisher_details">
            <span>on</span>
            {publishedAt}
          </span>
        </div>
      </div>
    );
  }
}
