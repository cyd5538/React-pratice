import React, { useState, useRef, useEffect } from "react";
import { storage } from "./firstore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import Avatar from "@mui/material/Avatar";
function App() {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);
  const imageRef = useRef();
  const handleImageChange = async (e) => {
    if (e.target.value[0]) {
      setImage(e.target.files[0]);
    }
    handleSubmit();
  };

  useEffect(() => {
    handleSubmit()
  }, [])
  
  const handleSubmit = () => {
    const imageRef = ref(storage, "image");
    if(!imageRef){
      Delete()
      Upload();
    }else{
      Upload();
    }
  };

  const Upload = () => {
    const imageRef = ref(storage, "image");
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const Delete = () => {
    const imageRef = ref(storage, "image");
     deleteObject(imageRef, image).then(() => {
      getDownloadURL(imageRef).then((url) => {
        setUrl(url)
      })
    }).catch((error) => {
      console.log(error.message, "error getting the image url")
    });
   
  } 


  return (
    <div className="App">
      <Avatar
        alt="Remy Sharp"
        src={url}
        sx={{ width: 150, height: 150 }}
        onClick={() => {
          imageRef.current.click();
        }}
      />
      <input
        ref={imageRef}
        type="file"
        onChange={handleImageChange}
        style={{ display: "none" }}
      />

      <button onClick={handleSubmit}>Submit</button>  
      <h1>hello world</h1>
    </div>
  );
}

export default App;
