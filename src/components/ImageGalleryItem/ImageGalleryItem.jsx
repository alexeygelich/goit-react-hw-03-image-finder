import React from "react";
import PropTypes from "prop-types";
//import { Test } from './ImageGalleryItem.styles';
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ largeImageURL, previewURL, handleClickImg }) => {
  const { ImageGalleryItem, ImageGalleryItemImage } = styles;
  return (
    <li className={ImageGalleryItem} onClick={() => handleClickImg(largeImageURL)}>
      <img src={previewURL} alt="" className={ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  previewURL: PropTypes.string.isRequired,
  handleClickImg: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
