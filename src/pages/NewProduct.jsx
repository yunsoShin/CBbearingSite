import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { uploadImage } from '../Api/uploader';
import { addNewProduct } from '../Api/firebase';
export default function NewProduct() {
  const [product,setProduct]=useState({});
  const [file,setFile]=useState();
  const [isUploading,setIsUploading]=useState(false);
  const [sucess,setSucess]=useState();
  const handleChange=(e)=>{
    const {name,value,files}=e.target;
    if(name==='file'){
      setFile(files&&files[0]);
      return;
    }
    setProduct((product)=>({...product,[name]:value}))
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    setIsUploading(true);
    if(!file){
      addNewProduct(product)
      .then(()=>{
        setSucess('성공적으로 등록되었습니다');
        setTimeout(()=>{
          setSucess(null);
        },3000)
        setIsUploading(false);  
      })
    }

    if(file){
      uploadImage(file)
      .then(url=>{
        addNewProduct(product,url)
          .then(()=>{
            setSucess('성공적으로 등록되었습니다');
            setTimeout(()=>{
              setSucess(null);
            },3000)
          })
      })
      .finally(()=>setIsUploading(false));
    }

    //사진업로드 후 URL흭득
    //firebase에 제품 추가
  };
  return (
  <section className='w-full text-center'>
    <h2 className='text-2xl font-bold my-4'>새로운 제품을 등록</h2>
    {sucess&&<p className='my-2'>{sucess}</p>}
    {file && <img className='w-96 mx-auto mb-2' src={URL.createObjectURL(file)}alt='local file'></img>}
    <form className='flex flex-col px-12' onSubmit={handleSubmit}>
      <input 
        type='file'
        accept='image/*'
        name='file'
        onChange={handleChange}
        />
      <input 
        type="text" 
        name='title' 
        value={product.title ?? ''} 
        placeholder='제품명'
        required 
        onChange={handleChange}/>
      <input 
        type="text" 
        name='brand' 
        value={product.brand ?? ''} 
        placeholder='브랜드'
        required 
        onChange={handleChange}/>
      <input 
        type="text" 
        name='partNumber' 
        value={product.partNumber ?? ''} 
        placeholder='품번'
        required 
        onChange={handleChange}/>
        <Button text={isUploading ? '업로드중...':'제품등록하기'}
        disabled={isUploading}></Button>
    </form>
  </section>
  )
}

