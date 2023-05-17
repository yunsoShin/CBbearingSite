import React from 'react';
import Button from '../components/ui/Button';
import { useState } from 'react';
import { addNewQuestion } from '../Api/firebase';
function NewQuestion(props) {
  const [question,setQuestion]=useState({});
  const [isUploading,setIsUploading]=useState(false);
  const [sucess,setSucess]=useState();
  const [hiddenPassword, setHiddenPassword] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setQuestion((currentQuestion) => ({ ...currentQuestion, [name]: value }));
  };
const handlePasswordChange = (e) => {
  const { value } = e.target;
  setHiddenPassword('*'.repeat(value.length));
  setQuestion((currentQuestion) => ({...currentQuestion, password: value }));
  
};

  const handleSubmit=(e)=>{
    e.preventDefault();
    setIsUploading(true);
    addNewQuestion(question).then(()=>{
      setSucess('성공적으로 등록되었습니다');
      setTimeout(()=>{
        setSucess('');
      }, 3000);
    }).finally(()=>setIsUploading(false));
  }
  return (
      <section className='w-full text-center mt-5'>
          <h1 className='text-2xl font-bold'>Q&A</h1>
          {sucess&&<p className='my-2'>{sucess}</p>}
          <form className='flex flex-col px-12 m-5  justify-center ' onSubmit={handleSubmit}>
          <input 
              type="text" 
              name='title' 
              value={question.title ?? ''} 
              placeholder='제목'
              maxLength='20'
              required 
              onChange={handleChange}
              className='rounded-md  bg-gray-50'
              />
          <textarea
              type="text" 
              name='details' 
              value={question.details ?? ''} 
              placeholder=' 문의내용'
              maxlength='500'
              required 
              onChange={handleChange}
              className=' relative  h-80 border border-gray-300 my-4 rounded-md  bg-gray-50'/>
          <input 
              type="text" 
              name='phonenumber' 
              value={question.phonenumber ?? ''} 
              placeholder='연락처'
              required 
              maxlength='20'
              onChange={handleChange}
              className='my-2 rounded-md  bg-gray-50'
              />    
          <input 
              type="text" 
              name='partNumber' 
              value={question.partNumber ?? ''} 
              placeholder='품번'
              required 
              maxlength='50'
              onChange={handleChange}
              className='rounded-md  bg-gray-50'/>
            <input 
              type="password" 
              name='password' 
              value={question.password ?? ''} 
              placeholder='비밀번호'
              required 
              maxlength='20'
              onChange={handlePasswordChange}
              className='rounded-md  bg-gray-50 my-2'
              />
              <Button text={isUploading ? '로딩중...':'문의하기'}
              disabled={isUploading}></Button>
          </form>
      </section>
  );
}



export default NewQuestion;