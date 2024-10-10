// src/components/PhotoGallery.js
import React, { useState, useEffect } from 'react';
import Lightbox from 'react-awesome-lightbox';
import 'react-awesome-lightbox/build/style.css';
import './PhotoGallery.css'; // Ensure this file exists and is correctly referenced

const PhotoGallery = () => {
  const [images, setImages] = useState([]);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Fetch images from the API
    fetch('https://api.example.com/images')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.error('Error fetching images:', error));
  }, []);

  return (
    <div className="photo-gallery">
      <div className="grid">
        {images.map((image, index) => (
          <div key={index} className="grid-item">
            <img
              src={image.thumbnailUrl}
              alt={`Gallery Image ${index + 1}`}
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            />
          </div>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          image={images[photoIndex].url}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default PhotoGallery;