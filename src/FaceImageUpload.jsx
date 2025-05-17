import React, { useState } from 'react';

const FaceImageUpload = ({ onImageChange }) => {
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      if (onImageChange) {
        onImageChange(file);
      }
    }
  };

  return (
    <div>
      <h2>📸 ముఖ చిత్రం అప్‌లోడ్ (Face Image Upload)</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {preview && (
        <div style={{ marginTop: '10px' }}>
          <img
            src={preview}
            alt="Face preview"
            style={{ maxWidth: '200px', borderRadius: '8px', border: '1px solid #ccc' }}
          />
        </div>
      )}
    </div>
  );
};

export default FaceImageUpload;
