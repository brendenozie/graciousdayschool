import React, { useState } from 'react';
import axios from 'axios';

const Upload = ({ setMediaUrls }) => {
  const [files, setFiles] = useState([]);

  const uploadFiles = async () => {
    const uploadedUrls = [];

    for (const file of files) {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('upload_preset', 'your_upload_preset'); // replace with your upload preset

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/djjpfyknl/image/upload`, // replace with your Cloudinary cloud name
        formData
      );

      uploadedUrls.push(response.data.secure_url);
    }

    setMediaUrls(uploadedUrls);
  };

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={(e) => setFiles(Array.from(e.target.files))}
      />
      <button onClick={uploadFiles}>Upload</button>
    </div>
  );
};

export default Upload;
