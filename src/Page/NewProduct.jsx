import React, { useState } from 'react';
import Button from '../Component/Button';
export default function NewProduct() {
  const [product,setProduct]=useState({});
  const [file,setFile]=useState();
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
    //사진업로드 후 URL흭득
    //firebase에 제품 추가
  };
  return (
  <section>
    {file && <img src={URL.createObjectURL(file)}alt='local file'></img>}
    <form onSubmit={handleSubmit}>
      <input 
        type='file'
        accept='image/*'
        name='file'
        required
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
        name='country' 
        value={product.country ?? ''} 
        placeholder='국가'
        required 
        onChange={handleChange}/>
        <Button text={'등록하기'}></Button>
    </form>
  </section>
  )
}
