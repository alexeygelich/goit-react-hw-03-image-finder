import React from "react";
import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ hits, handleClickImg }) => {
  const { ImageGallery } = styles;
  return (
    <ul className={ImageGallery}>
      {hits.map(({ id, largeImageURL, previewURL }) => (
        <ImageGalleryItem
          key={id.toString()}
          largeImageURL={largeImageURL}
          previewURL={previewURL}
          handleClickImg={handleClickImg}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  hits: PropTypes.array.isRequired,
  handleClickImg: PropTypes.func.isRequired,
};

export default ImageGallery;
