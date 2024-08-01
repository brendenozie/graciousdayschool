import React, { useState, useEffect , Suspense, lazy }  from 'react';
import axios from 'axios';
import { Image, Video } from 'cloudinary-react';
import Modal from 'react-modal';
const LazyImage = lazy(() => import('../../components/LazyImage'));

const BATCH_SIZE = 10;

const Blog = () => {
  const [images, setImages] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleImages, setVisibleImages] = useState(images.slice(0, BATCH_SIZE));

  const fetchImages = async () => {
    try {
      setUploadedImages([]);
      const response = await axios.get('https://graciousdayschool.vercel.app/api/images');
      // console.log(response);
      const imageUrls = response.data.map(image => ({ url: image.secure_url, description: image.context && image.context.custom.alt ? image.context.custom.alt : '' }));
      setUploadedImages(imageUrls);
    } catch (error) {
      console.error('Error fetching images:', error);
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

  const loadMoreImages = () => {
    setVisibleImages((prev) => {
      const nextBatch = uploadedImages.slice(prev.length, prev.length + BATCH_SIZE);
          return [...prev, ...nextBatch];
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight) {
        loadMoreImages();
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Initial load of images
    loadMoreImages();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [uploadedImages]);

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
        {visibleImages.map((image, index) => (
          <div class="post-media wow fadeIn">
            <Suspense fallback={<div>Loading...</div>}>
            
            <LazyImage 
                      src={image.url}
                      publicId={image.public_id}
                      alt={image.description || "Students"}
                      fallbackSrc={image.url}
                      onClick={() => openModal(image)}
                      style={{ width: '220px', height: '220px', objectFit: 'cover', margin: '5px', cursor: 'pointer' }}
                    />
          {/* {image.endsWith('.mp4') ? (
            <Video cloudName="djjpfyknl" publicId={image} controls 
            class="img-fluid img-rounded"
            key={index} 
            src={image} 
            alt={`upload-${index}`} 
            style={{ width: '220px', height: '220px', objectFit: 'cover', margin: '5px', cursor: 'pointer' }}
            onClick={() => openModal(image)}/>
          ) : (
          //   <img class="img-fluid img-rounded"
          //   key={index} 
          //   src={image} 
          //   alt={`upload-${index}`} 
          //   style={{ width: '220px', height: '220px', objectFit: 'cover', margin: '5px', cursor: 'pointer' }}
          //   onClick={() => openModal(image)}
          // />
          <Image cloudName="djjpfyknl" publicId={image}
            class="img-fluid img-rounded"
            key={index} 
            src={image} 
            alt={`upload-${index}`} 
            style={{ width: '220px', height: '220px', objectFit: 'cover', margin: '5px', cursor: 'pointer' }}
            onClick={() => openModal(image)} />
          )} */}
          </Suspense>
          
        </div>
          // <div class="post-media wow fadeIn">
          //   <img class="img-fluid img-rounded"
          //     key={index} 
          //     src={image} 
          //     alt={`upload-${index}`} 
          //     style={{ width: '220px', height: '220px', objectFit: 'cover', margin: '5px', cursor: 'pointer' }}
          //     onClick={() => openModal(image)}
          //   />
          // </div>
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
          {/* <img src={selectedImage} alt="Selected" style={{ width: '100%', height: 'auto', maxHeight: '550px' }} /> */}
          {selectedImage.url.includes('.mp4') ? (
            <Video cloudName="djjpfyknl" publicId={selectedImage.publicId} controls 
            class="img-fluid img-rounded"
            src={selectedImage.url} 
            alt={selectedImage.description} 
            style={{ width: '100%', height: 'auto', maxHeight: '550px' }}
            onClick={() => {}}/>
          ) : (
          //   <img class="img-fluid img-rounded"
          //   key={index} 
          //   src={image} 
          //   alt={`upload-${index}`} 
          //   style={{ width: '220px', height: '220px', objectFit: 'cover', margin: '5px', cursor: 'pointer' }}
          //   onClick={() => openModal(image)}
          // />
          <Image cloudName="djjpfyknl" publicId={selectedImage.publicId}
            class="img-fluid img-rounded"
            src={selectedImage.url} 
            alt={selectedImage.description} 
            style={{ width: '100%', height: 'auto', maxHeight: '550px' }}
            onClick={() => {}} />
          )}
        </Modal>
      )}
      </div>{/* end container */}
      </div>{/* end section */}
    </div>
  );
};

export default Blog;
