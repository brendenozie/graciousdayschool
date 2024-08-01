import React, { useState, useEffect, Suspense } from 'react';
import { useInView } from 'react-intersection-observer';

import { Image, Video, Transformation  } from 'cloudinary-react';

const LazyImage = ({ src, alt, onclick, fallbackSrc, publicId, ...props }) => {
  const [inViewRef, inView] = useInView({ triggerOnce: true });
  const [imageSrc, setImageSrc] = useState(fallbackSrc);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  
  const [imageUrl, setImageUrl] = useState('');

  // useEffect(() => {
  //   if (inView && src) {
  //     setLoading(true);
  //     setError(false);
  //     const img = new Image();
  //     img.src = src;
  //     img.onload = () => {
  //       setTimeout(() => {
  //         setImageSrc(src);
  //         setLoading(false);
  //       }, 3000);
       
  //     };
  //     img.onerror = () => {
  //       setTimeout(() => {
  //         setImageSrc(src);
  //         setLoading(false);
  //       }, 5000);
  //     };
  //   }
  // }, [inView, src]);
















  const cacheImage = (url) => {
    localStorage.setItem(publicId, url);
  };

  const getCachedImage = () => {
    return localStorage.getItem(publicId);
  };

  const fetchImage = useCallback(async () => {
    try {
      const cachedImageUrl = getCachedImage();
      if (cachedImageUrl) {
        setImageUrl(cachedImageUrl);
        setError(false);
      } else {
        const result = await axios.get(`https://res.cloudinary.com/djjpfyknl/image/upload/${publicId}`, {
          responseType: 'blob',
        });
        const url = URL.createObjectURL(result.data);
        setImageUrl(url);
        cacheImage(url);
        setError(false);
      }
    } catch (err) {
      setError(true);
    }
  }, [publicId]);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        fetchImage();
      }, retryInterval);
      return () => clearTimeout(timer);
    }
  }, [error, fetchImage, retryInterval]);

  useEffect(() => {
    fetchImage();
  }, [fetchImage]);

  return (
    <>
    <div ref={inViewRef} {...props} class="section-title">
      {loading && error && <div>Loading...</div>}
      {/* {error && <img src={fallbackSrc} alt="Fallback" />} */}
      {!loading && !error && 
      imageSrc.includes('.mp4') ? (
        <Video cloudName="djjpfyknl" publicId={imageSrc} controls 
          class="img-fluid img-rounded"
          src={imageSrc} 
          alt={alt} 
          style={{ width: '220px', height: '220px', objectFit: 'cover', margin: '5px', cursor: 'pointer' }}
          onClick={() => onclick()}/>
      ) : (
      // <Image cloudName="djjpfyknl" 
      //   publicId={publicId}
      //   class="img-fluid img-rounded"
      //   src={imageSrc} 
      //   alt={alt} 
      //   style={{ width: '220px', height: '220px', objectFit: 'cover', margin: '5px', cursor: 'pointer' }}
      //   onClick={() => onclick()} >
      //     <Transformation quality="auto" fetchFormat="auto" />
      //   </Image>
      <Suspense fallback={<div>Loading...</div>}>
        <img src={imageUrl} alt="Cloudinary" style={{ width: '220px', height: '220px', objectFit: 'cover', margin: '5px', cursor: 'pointer' }} loading="lazy"/>
        </Suspense>
      )}       
    </div>

<h5 style={{ marginLeft:'10px',marginRight:'5px', marginTop: '10px', marginBottom: '20px', overflow: 'hidden', fontWeight: '500',fontSize:'10px' }}>{alt}</h5>
</>
  );
};

export default LazyImage;
