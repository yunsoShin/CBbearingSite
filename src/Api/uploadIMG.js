export async function uploadImage(file){
  const formData = new FormData();
  const cloudName = process.env.REACT_APP_CLOUD_NAME;
  const uploadPreset = process.env.REACT_APP_UPLOAD_PRESET;
  const url = `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`;
  if(file!==''){
    
  }
  formData.append('file', file);  
  formData.append('upload_preset',uploadPreset);
  return fetch(url, {
    method: 'POST',
    body: formData
  }).then(res => res.json()).then((data) => data.url);
  

}