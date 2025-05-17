import React, { useState } from 'react';

const FaceImageUpload = ({ onImageChange }) => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      onImageChange(file);
    }
  };

  return (
    <div style={{ marginTop: 20 }}>
      <h3>Face Image Upload</h3>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && <img src={preview} alt="Face Preview" style={{ width: 200, marginTop: 10, borderRadius: 8 }} />}
    </div>
  );
};

export default FaceImageUpload;
