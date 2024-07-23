import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Image, Video } from 'cloudinary-react';
import Modal from 'react-modal';
import Loader from '../../components/loader';

const UploadGr = () => {
  const [images, setImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const deleteFile = async (publicId) => {
    try {
      setLoading(true);
      await axios.post('https://graciousdayschool.vercel.app/api/delete', { publicId });
      setUploadedImages((prevUrls) => prevUrls.filter(url => !url.includes(publicId)));
      setLoading(false);
    } catch (error) {
      console.error('Error deleting file:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://graciousdayschool.vercel.app/api/images');
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

    setLoading(true);

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
    setLoading(false);
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (

    <>
    {loading ? <Loader /> :
    <div>
      <div id="overviews" class="section lb">
        <div class="container">
            <div class="section-title row">
                <div class="col-md-8 offset-md-2">
                    <h3>Upload Images</h3>
                    <p class="lead"></p>
                </div>
            </div>{/* end title */}
        
            <div class="section-title row ">
            <div class="col-md-8 offset-md-2">
              <h5>1. Click here to select your images </h5>
              <h5>2. Click upload to upload your images </h5>
              <div style={{marginTop: "15px"}}>
                <input 
                  type="file" 
                   accept="image/jpeg,image/png,image/gif,video/mp4,video/webm"
                  multiple 
                  onChange={handleImageChange} 
                />
              </div>
              <div style={{marginTop: "15px"}}>
              <button class="orange" onClick={handleUpload}>Upload</button>
              </div>
            </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {uploadedImages.map((image, index) => (

          <div class="post-media wow fadeIn">
            {image.endsWith('.mp4') ? (
              <Video cloudName="djjpfyknl" publicId={image} controls />
            ) : (
              <img class="img-fluid img-rounded"
              key={index} 
              src={image} 
              alt={`upload-${index}`} 
              style={{ width: '220px', height: '220px', objectFit: 'cover', margin: '5px', cursor: 'pointer' }}
              onClick={() => openModal(image)}
            />
            )}
            
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
          <button onClick={() => deleteFile(selectedImage)} style={{ float: 'left' }}>Delete</button>
          <img src={selectedImage} alt="Selected" style={{ width: '100%', height: 'auto', maxHeight: '550px' }} />
        </Modal>
      )}
      </div>{/* end container */}
      </div>{/* end section */}
    </div>
}
    </>
  );
};

export default UploadGr;
