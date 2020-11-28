import React, { Component } from "react";
// import PropTypes from "prop-types";
import styles from "./Modal.module.css";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.onCloseModal);
    window.addEventListener("click", this.onCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onCloseModal);
    window.removeEventListener("click", this.onCloseModal);
  }

  onCloseModal = (e) => {
    if (e.code === "Escape" || e.target.nodeName === "DIV") {
      this.props.closeModal();
    }
  };

  render() {
    const { largeImageURL } = this.props;
    const { Overlay, Modal } = styles;
    return (
      <div className={Overlay}>
        <div className={Modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
