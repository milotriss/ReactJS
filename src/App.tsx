import React, { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL, listAll } from "firebase/storage";

import "./App.css";
import storage from "./config/firebase.config";


function App() {
  const [avatars,setAvatars] = useState<any>()
  const [imageUpload, setImageUpload] = useState<any>(null);
  const [imageUrls, setImageUrls] = useState([]);



  useEffect(()=> {
    return () => {
      avatars && URL.revokeObjectURL(avatars.preview)
    }
  },[avatars])
  const handleAvatar = (e:any) => {
    let file = e.target.files[0];
    file.preview = URL.createObjectURL(file)
    setAvatars(file)
  }

  // Tạo storage lưu trữ từ dịch vụ firebase
  const imagesListRef = ref(storage, "public/");



  console.log(avatars);
  
  // Hàm upload firebase
  const uploadFile = () => {
    if (imageUpload == null) return;

    const imageRef:any = ref(storage, `images/${imageUpload.name}`);

    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {

      });
    });
  };
  return (
    <div className="App">
      <input 
      onChange={handleAvatar}
      type="file" />
      {avatars && <img src={avatars.preview} alt="" width="100%" height="100%"/>}
      <button >Upload</button>
    </div>
  );
}

export default App;
