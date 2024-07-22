import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const UploadGr = () => {
  const [images, setImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/images');
        const imageUrls = response.data.map(image => image.secure_url);
        setUploadedImages(imageUrls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setImages(files);
  };

  const handleUpload = async () => {
    const url = `https://api.cloudinary.com/v1_1/djjpfyknl/image/upload`;
    const uploadPreset = 'school';

    const uploadResponses = await Promise.all(
      images.map(image => {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', uploadPreset);
        return axios.post(url, formData);
      })
    );

    const newUploadedImages = uploadResponses.map(response => response.data.secure_url);
    setUploadedImages([...uploadedImages, ...newUploadedImages]);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (

    <div>
      <div id="overviews" class="section lb">
        <div class="container">
            <div class="section-title row text-center">
                <div class="col-md-8 offset-md-2">
                    <h3>Upload Images</h3>
                    <p class="lead"></p>
                </div>
            </div>{/* end title */}
        
        
      <input 
        type="file" 
        accept="image/*" 
        multiple 
        onChange={handleImageChange} 
      />
      <button class="orange" onClick={handleUpload}>Upload</button>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {uploadedImages.map((image, index) => (
          <div class="post-media wow fadeIn">
            <img class="img-fluid img-rounded"
              key={index} 
              src={image} 
              alt={`upload-${index}`} 
              style={{ width: '220px', height: '220px', objectFit: 'cover', margin: '5px', cursor: 'pointer' }}
              onClick={() => openModal(image)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onRequestClose={closeModal}
          contentLabel="Image Modal"
          style={{
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)'
            }
          }}
        >
          <button onClick={closeModal} style={{ float: 'right' }}>Close</button>
          <img src={selectedImage} alt="Selected" style={{ width: '100%', height: 'auto' }} />
        </Modal>
      )}
      </div>{/* end container */}
      </div>{/* end section */}
    </div>
  );
};

export default UploadGr;
