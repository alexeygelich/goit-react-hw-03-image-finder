import React, { Component } from "react";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";
import Button from "./shared/Button";
import Modal from "./components/Modal";
import styles from "./App.module.css";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default class App extends Component {
  state = {
    hits: [],
    query: "",
    page: 1,
    total: 0,
    largeImageURL: "",
    isModal: false,
    loader: false,
    infiniteScroll: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.fetchQuery();
    }
    if (this.state.infiniteScroll) {
      window.addEventListener("scroll", this.onInfinitScroll);
    }
    if (!this.state.infiniteScroll) {
      window.removeEventListener("scroll", this.onInfinitScroll);
    }
  }

  onInfinitScroll = () => {
    if (
      document.documentElement.offsetHeight -
        document.documentElement.scrollTop -
        document.documentElement.clientHeight <
      100
    ) {
      this.setState((prevState) => ({
        page: prevState.page + 1,
      }));
      window.removeEventListener("scroll", this.onInfinitScroll);
    }
  };

  fetchQuery = () => {
    this.setState({
      loader: true,
    });
    fetch(
      `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=18941462-97e9f218cf6db5cf76e5888b1&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((data) => data.json())
      .then((data) => {
        this.setState((prevState) => ({
          hits: [...prevState.hits, ...data.hits],
          total: data.total,
          loader: false,
        }));
        if (this.state.page > 1 && !this.state.infiniteScroll) {
          window.scrollTo({
            top: document.documentElement.scrollTop + document.documentElement.clientHeight - 140,
            behavior: "smooth",
          });
        }
      });
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

  handleClickImg = (largeImageURL) => {
    this.setState({
      largeImageURL,
      isModal: true,
    });
  };

  closeModal = () => {
    this.setState({
      isModal: false,
    });
    setTimeout(() => {
      this.setState({
        largeImageURL: "",
      });
    }, 500);
  };

  handleInfinitScrollToggle = () => {
    this.setState((prevState) => ({ infiniteScroll: !prevState.infiniteScroll }));
  };

  render() {
    const { hits, total, page, largeImageURL, loader, infiniteScroll, isModal } = this.state;
    const loadMore =
      total > page * 12 && loader ? (
        <span className={styles.loader}>
          <Loader type="Puff" color="#3f51b5" height={100} width={100} />
        </span>
      ) : (
        total > page * 12 && !infiniteScroll && <Button handleClick={this.handleClick}>Load more</Button>
      );
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onSubmit} handleInfinitScrollToggle={this.handleInfinitScrollToggle} />
        {hits.length > 0 && <ImageGallery hits={hits} handleClickImg={this.handleClickImg} />}
        {loadMore}
        <Modal largeImageURL={largeImageURL} closeModal={this.closeModal} isModal={isModal} />
      </div>
    );
  }
}
