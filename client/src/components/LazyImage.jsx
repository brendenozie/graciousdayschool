import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { Image, Video } from 'cloudinary-react';

const LazyImage = ({ src, alt, onclick, fallbackSrc, ...props }) => {
  const [inViewRef, inView] = useInView({ triggerOnce: true });
  const [imageSrc, setImageSrc] = useState(fallbackSrc);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (inView && src) {
      setLoading(true);
      setError(false);
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImageSrc(src);
        setLoading(false);
      };
      img.onerror = () => {
        setError(true);
        setLoading(false);
      };
    }
  }, [inView, src]);

  return (
    <>
    <div ref={inViewRef} {...props}>
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
      <Image cloudName="djjpfyknl" publicId={imageSrc}
        class="img-fluid img-rounded"
        src={imageSrc} 
        alt={alt} 
        style={{ width: '220px', height: '220px', objectFit: 'cover', margin: '5px', cursor: 'pointer' }}
        onClick={() => onclick()} />
      )}       
    </div>

<p style={{ marginTop: '10px', marginBottom: '20px' }}>{alt}</p>
</>
  );
};

export default LazyImage;
