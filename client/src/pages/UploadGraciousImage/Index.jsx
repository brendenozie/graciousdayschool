import React, { useState, useEffect , Suspense, lazy }  from 'react';
import axios from 'axios';
import { Image, Video } from 'cloudinary-react';
import Modal from 'react-modal';
import Loader from '../../components/loader';
const LazyImage = lazy(() => import('../../components/LazyImage'));


const url = `https://api.cloudinary.com/v1_1/djjpfyknl/image/upload`;
const uploadPreset = 'school';

const uploadImages = async (images) => {
  const uploadResponses = await Promise.all(
    images.map(async (image) => {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', uploadPreset);

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
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchImages = async () => {
    try {
      const response = await axios.get('https://graciousdayschool.vercel.app/api/images');
      const imageUrls = response.data.map(image => image.secure_url);
      setUploadedImages(imageUrls);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };


  const deleteFile = async (publicId) => {
    try {
      setLoading(true);
      await axios.post('https://graciousdayschool.vercel.app/api/delete', { publicId });
      setUploadedImages((prevUrls) => prevUrls.filter(url => !url.includes(publicId)));
      setLoading(false);
      setSelectedImage(null);
      fetchImages();
    } catch (error) {
      setError(true);
      setLoading(false);      
      console.error('Error deleting file:', error);
    }
  };

  useEffect(() => {    
    fetchImages();
  }, []);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setImages(files);
  };

  const handleUpload = async () => {

    setLoading(true);
    setError(false);

    // const url = `https://api.cloudinary.com/v1_1/djjpfyknl/image/upload`;

    // const uploadPreset = 'school';

    // const uploadResponses = await Promise.all(
    //   images.map(image => {
    //     const formData = new FormData();
    //     formData.append('file', image);
    //     formData.append('upload_preset', uploadPreset);
    //     return axios.post(url, formData);
    //   }
    // )
    // );

    // const newUploadedImages = uploadResponses.map(response => response.data.secure_url);
    // setUploadedImages([...uploadedImages, ...newUploadedImages]);
    // setLoading(false);

    uploadImages(images).then((results) => {
      results.forEach((result, index) => {
        if (result.success) {
          console.log(`Image ${index + 1} uploaded successfully:`, result.data);
          setUploadedImages([...uploadedImages, ...result.data.secure_url])
          setLoading(false);
          setError(false);
          fetchImages();
        } else {
          console.error(`Error uploading image ${index + 1}:`, result.error);
          setError(true);
          setLoading(false);   
        }
      });
      if(!loading && !error ){
        alert('Uploaded Successfuly');
      }
    });
  };

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (

    <>
    {
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
              {!loading && error ? <div>Too Large Cannot Upload</div> : <div></div>}
              {loading && !error ? <div style={{position:'fixed', marginTop:"-70px"}}>
                    <Loader style={{ width: '90px', height: '70px'}}/>
                    <p style={{fontSize:"small",fontWeight:"bold",position: 'relative', zIndex: '11400'}}>UpLoading</p>
                 </div> :<button class="orange" onClick={handleUpload}>Upload</button>}
              </div>
            </div>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '120px' }}>
        {uploadedImages.map((image, index) => (
          <div class="post-media wow fadeIn">
            <Suspense fallback={<div>Loading...</div>}>
              <LazyImage src={image}
                        alt="Sample Image"
                        fallbackSrc={image}
                        onClick={() => openModal(image)}
                        style={{ width: '220px', height: '220px', objectFit: 'cover', margin: '5px', cursor: 'pointer' }}/>
        
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
