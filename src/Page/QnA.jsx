import React from 'react';
import Button from '../Component/Button';
import { useState } from 'react';
import { addNewQuestion } from '../Api/firebase';
function QnA(props) {
  const [question,setQuestion]=useState({});
  const [isUploading,setIsUploading]=useState(false);
  const [sucess,setSucess]=useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuestion((currentQuestion) => ({ ...currentQuestion, [name]: value }));
  };
  const handleSubmit=(e)=>{
    e.preventDefault();
    setIsUploading(true);
    addNewQuestion(question).then(()=>{
      setSucess('성공적으로 등록되었습니다');
      setTimeout(()=>{
        setSucess('');
      }, 3000);
    })
  }
  return (
      <section className='w-full text-center'>
          <h2 className='text-2xl font-bold my-4'>문의하기</h2>
          {sucess&&<p className='my-2'>{sucess}</p>}
          <form className='flex flex-col px-12' onSubmit={handleSubmit}>
          <input 
              type="text" 
              name='title' 
              value={question.title ?? ''} 
              placeholder='제목'
              required 
              onChange={handleChange}/>
          <input 
              type="text" 
              name='details' 
              value={question.details ?? ''} 
              placeholder='질문내용'
              required 
              onChange={handleChange}/>
          <input 
              type="text" 
              name='partNumber' 
              value={question.partNumber ?? ''} 
              placeholder='품번'
              required 
              onChange={handleChange}/>
              <Button text={isUploading ? '업로드중...':'제품등록하기'}
              disabled={isUploading}></Button>
          </form>
      </section>
  );
}



export default QnA;