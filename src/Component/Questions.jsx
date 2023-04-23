import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getQuestion } from '../Api/firebase';
import QuestionList from './QuestionList';


function Questions() 
  {
    const { isLoading, error, data:questions } = useQuery(['questions'],getQuestion);
    console.log(questions);
  return (
    <>
      {isLoading && <h1>Loading...</h1>}
        {error && <h1>{error.message}</h1>}
        <ul className='grid grid-cols-1 md:grid-cols-3 lg-grid-cols-4 gap-4 p-4'>
            {questions&&questions.map((questions) => (<QuestionList key={questions.id} question={questions} />))}
        </ul>
    </>
    
      
    
      
  
  );
}

export default Questions;