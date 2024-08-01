import React, { useState, useEffect, Suspense, lazy, useCallback } from 'react';
import axios from 'axios';
import { Image, Video } from 'cloudinary-react';
import Modal from 'react-modal';
import Loader from '../../components/loader';

const LazyImage = lazy(() => import('../../components/LazyImage')); // Adjust the import path as needed
const BATCH_SIZE = 20; // Number of images to load per batch

const Blog = () => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);

  const fetchImages = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://graciousdayschool.vercel.app/api/images');
      const imageUrls = response.data.map(image => ({
        url: image.secure_url,
        description: image.context && image.context.custom.alt ? image.context.custom.alt : '',
        publicId: image.public_id
      }));
      setUploadedImages(imageUrls);
      setVisibleImages(imageUrls.slice(0, BATCH_SIZE));
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const loadMoreImages = useCallback(() => {
    setVisibleImages((prev) => {
      const nextBatch = uploadedImages.slice(prev.length, prev.length + BATCH_SIZE);
      if (nextBatch.length === 0) {
        setAllLoaded(true);
      }
      return [...prev, ...nextBatch];
    });
  }, [uploadedImages]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
        loadMoreImages();
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMoreImages]);

  return (
    <div>
      <div id="overviews" className="section lb">
        <div className="container">
          <div className="section-title row text-center">
            <div className="col-md-8 offset-md-2">
              <h3>Our School</h3>
              <p className="lead">
                Welcome to our school's image gallery, where moments of learning, creativity, and achievement come to life.
                Explore snapshots of our vibrant campus, from classrooms buzzing with curiosity to stages illuminated by student talent.
                Our gallery showcases the heart of our educational ethos: fostering a supportive environment where every student thrives.
                Join us on this visual journey and envision yourself becoming part of our dynamic community, where academic excellence meets personal growth.
                Discover why Gracious Day Imabet School is the perfect place to embark on your educational journey.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
            {visibleImages.map((image, index) => (
              <div className="post-media wow fadeIn" key={index}>
                <Suspense fallback={<div>Loading...</div>}>
                  <LazyImage
                    src={image.url}
                    publicId={image.publicId}
                    alt={image.description || "Students"}
                    fallbackSrc={"https://via.placeholder.com/220" }
                    loadingImage="https://via.placeholder.com/220" // Your loading image URL
                    onClick={() => openModal(image)}
                    style={{ width: '220px', height: '220px', objectFit: 'cover', margin: '5px', cursor: 'pointer' }}
                  />
                </Suspense>
              </div>
            ))}
          </div>

          {loading && <div>Loading more images...</div>}
          {allLoaded && <div>No more images to load.</div>}

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
              {selectedImage.url.includes('.mp4') ? (
                <Video cloudName="djjpfyknl" publicId={selectedImage.publicId} controls
                  className="img-fluid img-rounded"
                  src={selectedImage.url}
                  alt={selectedImage.description}
                  style={{ width: '100%', height: 'auto', maxHeight: '550px' }}
                />
              ) : (
                <Image cloudName="djjpfyknl" publicId={selectedImage.publicId}
                  className="img-fluid img-rounded"
                  src={selectedImage.url}
                  alt={selectedImage.description}
                  style={{ width: '100%', height: 'auto', maxHeight: '550px' }}
                />
              )}
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;
