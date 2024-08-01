import React, { useState, useEffect, Suspense, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { Image, Video, Transformation } from 'cloudinary-react';

const LazyImage = ({ src, alt, onClick, fallbackSrc, publicId, ...props }) => {
  const [inViewRef, inView] = useInView({ triggerOnce: true });
  const [imageSrc, setImageSrc] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const loadImage = useCallback(() => {
    if (src) {
      setLoading(true);
      setError(false);
      const img = new window.Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setLoading(false);
      };
      img.onerror = () => {
        console.error(`Error loading image: ${src}`);
        setError(true);
        setLoading(false);
      };
    }
  }, [src]);

  useEffect(() => {
    if (inView) {
      loadImage();
    }
  }, [inView, loadImage]);

  useEffect(() => {
    if (error) {
      const retryTimeout = setTimeout(() => {
        loadImage();
      }, 3000);
      return () => clearTimeout(retryTimeout);
    }
  }, [error, loadImage]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div ref={inViewRef} {...props} className="section-title">
        {loading && !error && <div>Loading...</div>}
        {error && fallbackSrc && <img src={fallbackSrc} alt="Fallback" />}
        {!loading && !error && imageSrc.includes('.mp4') ? (
          <Video cloudName="djjpfyknl" publicId={publicId} controls 
            className="img-fluid img-rounded"
            src={imageSrc} 
            alt={alt} 
            style={{ width: '220px', height: '220px', objectFit: 'cover', margin: '5px', cursor: 'pointer' }}
            onClick={onClick} />
        ) : (
          <Image cloudName="djjpfyknl" 
            publicId={publicId}
            className="img-fluid img-rounded"
            src={imageSrc} 
            alt={alt} 
            style={{ width: '220px', height: '220px', objectFit: 'cover', margin: '5px', cursor: 'pointer' }}
            onClick={onClick}>
              <Transformation quality="auto" fetchFormat="auto" />
          </Image>
        )}
      </div>
      <h5 style={{ marginLeft: '10px', marginRight: '5px', marginTop: '10px', marginBottom: '20px', overflow: 'hidden', fontWeight: '500', fontSize: '10px' }}>{alt}</h5>
    </Suspense>
  );
};

export default LazyImage;
