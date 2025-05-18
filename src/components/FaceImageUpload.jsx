import React, { useState } from "react";

const FaceImageUpload = ({ setFaceImage }) => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFaceImage(file);

    // Preview
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="face-upload">
      <h2>Upload Face Image</h2>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {preview && <img src={preview} alt="Face Preview" style={{ width: "120px", marginTop: "10px" }} />}
    </div>
  );
};

export default FaceImageUpload;
