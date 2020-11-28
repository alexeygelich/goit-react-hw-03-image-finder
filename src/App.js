import React, { Component } from "react";
import PropTypes from "prop-types";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from '../src/shared/Button'

export default class App extends Component {
  state = {
    hits: [],
    query: "",
    page: 1,
    largeImageURL:'',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.fetchQuery();
    }
  }

  fetchQuery = () => {
    fetch(
      `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=18941462-97e9f218cf6db5cf76e5888b1&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((data) => data.json())
      .then(({ hits }) =>
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...hits],
        }))
      );
  };

  onSubmit = (searchQuery) => {
    this.setState({
      hits: [],
      query: searchQuery,
      page: 1,
    });
  };

  handleClick = () => {
    this.setState((prevState) => ({
      page: prevState.page + 1,
    }));
  };

  handleClickImg=(largeImageURL)=>{
    this.setState({
      largeImageURL
    })
  }

  render() {
    const { hits } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.onSubmit} />
        {this.state.hits.length > 0 && <ImageGallery hits={hits} handleClickImg={this.handleClickImg}/>}
        {this.state.hits.length > 0 && (
          <Button handleClick={this.handleClick}>
            Load more
          </Button>
        )}
      </div>
    );
  }
}
