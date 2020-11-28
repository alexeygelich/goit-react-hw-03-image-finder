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
  // bla: PropTypes.string,
};

ImageGalleryItem.defaultProps = {
  // bla: 'test',
};

export default ImageGalleryItem;
