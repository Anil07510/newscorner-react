import React, { Component } from "react";
//import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
//import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
//import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

import "./index.css";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 9,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=9fdd3f84675d4732b49a36ed862d84f0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  async updated(pageNo) {
    let API = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9fdd3f84675d4732b49a36ed862d84f0&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(API);
    let parseData = await data.json();
    // console.log(this.state.totalResults);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updated();
  }
  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updated();
  };
  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updated();
  };
  render() {
    return (
      <div className="container flex justify-center">
        {this.state.loading && <Loading />}
        <h3 className="heading">Stay Updated with News Corner Daily</h3>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading />}
        >
          <div>
            <div className="row ">
              {this.state.articles?.map((e) => {
                return (
                  <div className="col flex flex-wrap  justify-center">
                    <NewsItem
                      key={e.url}
                      title={e.title ? e.title.slice(0, 30) : " "}
                      description={
                        e.description ? e.description.slice(0, 45) : " "
                      }
                      imgURL={
                        e.urlToImage
                          ? e.urlToImage
                          : "https://st.ilfattoquotidiano.it/wp-content/uploads/2023/10/30/meta-scaled-e1698683783818.jpg"
                      }
                      newsUrl={e.url}
                      publishedAt={e.publishedAt}
                      author={e.author ? e.author : "Anil"}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-around">
          <Button
            variant="contained"
            disabled={this.state.page <= 1}
            onClick={this.handlePrevClick}
          >
            <KeyboardArrowLeftIcon />
          </Button>
          <Button
            disabled={
              this.state.page + 1 >
              this.state.totalResults / this.props.pageSize
            }
            variant="contained"
            onClick={this.handleNextClick}
          >
            <KeyboardArrowRightIcon />
          </Button>
        </div> */}
      </div>
    );
  }
}
