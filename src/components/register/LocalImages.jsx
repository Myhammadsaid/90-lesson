import React, { memo } from "react";
import Icon from "../../assets/delete.png";
import "./Register.css";

const LocalImages = ({ files, setFiles }) => {
  const handleRemoveImage = (index) => {
    console.log(index);
    setFiles((prev) => [...prev].filter((_, inx) => inx !== index));
  };

  return (
    <div className="local__img">
      {Object.values(files)?.map((image, index) => (
        <div key={index}>
          <img width={180} src={URL.createObjectURL(image)} alt="image" />
          <img
            onClick={() => handleRemoveImage(index)}
            width={30}
            height={30}
            className="Icon__delete"
            src={Icon}
            alt="Icon__delete"
          />
        </div>
      ))}
    </div>
  );
};

export default memo(LocalImages);
