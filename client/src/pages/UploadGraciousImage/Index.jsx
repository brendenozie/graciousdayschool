import React, { useState, useEffect, Suspense, lazy } from 'react';
import axios from 'axios';
import { Image, Video } from 'cloudinary-react';
import Modal from 'react-modal';
import Loader from '../../components/loader';
const LazyImage = lazy(() => import('../../components/LazyImage'));

const url = `https://api.cloudinary.com/v1_1/djjpfyknl/image/upload`;
const uploadPreset = 'school';

const BATCH_SIZE = 5;


const uploadImages = async (images, descriptions) => {
  const uploadResponses = await Promise.all(
    images.map(async (image, index) => {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', uploadPreset);
      formData.append('context', `alt=${descriptions[index]}`);

      try {
        const response = await axios.post(url, formData);
        return { success: true, data: response.data };
      } catch (error) {
        return { success: false, error: error.message };
      }
    })
  );

  return uploadResponses;
};

const UploadGr = () => {
  const [images, setImages] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [visibleImages, setVisibleImages] = useState(images.slice(0, BATCH_SIZE));

  const fetchImages = async () => {
    try {
      setUploadedImages([]);
      const response = await axios.get('https://graciousdayschool.vercel.app/api/images');
      // console.log(response);
      const imageUrls = response.data.map(image => ({ url: image.secure_url,publicId: image.public_id, description: image.context && image.context.custom.alt ? image.context.custom.alt : '' }));
      setUploadedImages(imageUrls);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const deleteFile = async (publicId) => {
    try {
      setLoading(true);
      await axios.post('https://graciousdayschool.vercel.app/api/delete', { publicId });
      // setUploadedImages((prevUrls) => prevUrls.filter(image => !image.url.includes(publicId)));
      setLoading(false);
      setSelectedImage(null);
      fetchImages();
    } catch (errr) {
      setError(true);
      setLoading(false);      
      console.error('Error deleting file:', errr);
    }
  };

  useEffect(() => {    
    fetchImages();
  }, []);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setImages(files);
  };

  const handleDescriptionChange = (index, description) => {
    const newDescriptions = [...descriptions];
    newDescriptions[index] = description;
    setDescriptions(newDescriptions);
  };

  const handleUpload = async () => {
    setLoading(true);
    setError(false);

    uploadImages(images, descriptions).then((results) => {
      results.forEach((result, index) => {
        if (result.success) {
          // console.log(`Image ${index + 1} uploaded successfully:`, result.data);
          // setUploadedImages([...uploadedImages, { url: result.data.secure_url, description: descriptions[index] }]);
          setLoading(false);
          setError(false);
        } else {
          console.error(`Error uploading image ${index + 1}:`, result.error);
          setError(true);
          setLoading(false);   
        }
      });
      if(!loading && !error){
        alert('Uploaded Successfully');
        setImages([]);
        setDescriptions([]);
        fetchImages();
      }
    });
  };

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
    <>
      <div>
        <div id="overviews" className="section lb">
          <div className="container">
            <div className="section-title row">
              <div className="col-md-8 offset-md-2">
                <h3>Upload Images</h3>
                <p className="lead"></p>
              </div>
            </div>
            <div className="section-title row">
              <div className="col-md-8 offset-md-2">
                <h5>1. Click here to select your images </h5>
                <h5>2. Add descriptions (optional)</h5>
                <h5>3. Click upload to upload your images </h5>
                <div style={{ marginTop: "15px" }}>
                  <input 
                    type="file" 
                    accept="image/jpeg,image/png,image/gif,video/mp4,video/webm"
                    multiple 
                    onChange={handleImageChange} 
                  />
                </div>
                <div style={{ marginTop: "15px" }}>
                  {images.map((image, index) => (
                    <div key={index} style={{ marginBottom: '10px' }}>
                      <input 
                        type="text" 
                        placeholder={`Description for image ${index + 1}`} 
                        onChange={(e) => handleDescriptionChange(index, e.target.value)}
                      />
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "15px" }}>
                  {!loading && error ? <div>Too Large Cannot Upload</div> : <div></div>}
                  {loading && !error ? (
                    <div style={{ position: 'fixed', marginTop: "-70px" }}>
                      <Loader style={{ width: '90px', height: '70px' }}/>
                      <p style={{ fontSize: "small", fontWeight: "bold", position: 'relative', zIndex: '11400' }}>Uploading</p>
                    </div>
                  ) : (
                    <button className="orange" onClick={handleUpload}>Upload</button>
                  )}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '120px' }}>
              {visibleImages.map((image, index) => (
                <div className="post-media wow fadeIn" key={index}>
                  <Suspense fallback={<div>Loading...</div>}>
                    <LazyImage 
                      src={image.url}
                      publicId={image.public_id}
                      alt={image.description || "Students"}
                      fallbackSrc={'https://via.placeholder.com/220'}
                      onClick={() => openModal(image)}
                      style={{ width: '220px', height: '220px', objectFit: 'cover', margin: '5px', cursor: 'pointer' }}
                    />
                  </Suspense>
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
                <button onClick={() => deleteFile(selectedImage.publicId)} style={{ float: 'left' }}>Delete</button>
                <img src={selectedImage.url} alt="Selected" style={{ width: '100%', height: 'auto', maxHeight: '550px' }} />
                {selectedImage.description && <p>{selectedImage.description}</p>}
              </Modal>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadGr;
