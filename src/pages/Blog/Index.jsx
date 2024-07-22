import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';

const Blog = () => {
  const [images, setImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://graciousdayschool.vercel.app/images');
        const imageUrls = response.data.map(image => image.secure_url);
        setUploadedImages(imageUrls);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);



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
                    <h3>Our School</h3>
                    <p class="lead">Welcome to our school's image gallery, where moments of learning, creativity, and achievement come to life. Explore snapshots of our vibrant campus, from classrooms buzzing with curiosity to stages illuminated by student talent. Our gallery showcases the heart of our educational ethos: fostering a supportive environment where every student thrives. Join us on this visual journey and envision yourself becoming part of our dynamic community, where academic excellence meets personal growth. Discover why Gracious Day Imabet School is the perfect place to embark on your educational journey.</p>
                </div>
            </div>{/* end title */}
        
        


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
          <img src={selectedImage} alt="Selected" style={{ width: '100%', height: 'auto', maxHeight: '550px' }} />
        </Modal>
      )}
      </div>{/* end container */}
      </div>{/* end section */}
    </div>
  );
};

export default Blog;
