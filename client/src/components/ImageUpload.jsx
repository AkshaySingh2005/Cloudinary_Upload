import axios from 'axios';
import { useState } from 'react';

const ImageUpload = () => {
    const [image, setImage] = useState(null);
    const [imageUrl, setImageUrl] = useState('');

    const handleImageChange = (e)=>{
        setImageUrl(e.target.file[0])
    }

    const handleUpload = async ()=>{
        const formData  = new FormData();

        formData.append('image',image);

        try{
           const res = await axios.post('http://localhost:3001/api/upload',formData,{
            headers : {
                headers: { 'Content-Type': 'multipart/form-data' },
            }
           });
        }
        catch(err){
            console.error('Error uploading image', err);
        }
    }
  return (
    <div>
      <input type = 'file' onChange={handleImageChange}/>
      <button onClick={handleUpload}>upload</button>
      {imageUrl && <img src={imageUrl} alt='afaf'></img>}
    </div>
  )
}

export default ImageUpload
