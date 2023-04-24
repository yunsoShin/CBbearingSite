import React from 'react';

function QuestionList({
  question,
  question:{title,partNumber}
}) {
  return (
    <ul>
      <li className='h-20'>{title}</li>
      <li>{partNumber}</li>
    </ul>
      
    
  );
}

export default QuestionList;