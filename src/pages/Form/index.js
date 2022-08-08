import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import './styles.css';

export default function Form () {
  const [words, setWords] = useState([]);
  
  const newWord = words.map((word, index) => (
    <div key={index} className='words'>
      <div className='word front'>{word.translation}</div>
      <div className='word back'>{word.words}</div>
    </div>
  ));

  const { register, handleSubmit } = useForm();
  const onSubmit = data => setWords((previous) => [...previous, data]);
  console.log(words)

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Palavra
          <input {...register("words")}/>
        </label>
        <label>
          Tradução
          <input {...register("translation")}/>
        </label>
        <input type="submit" />
      </form>
      <div className='container'>{newWord}</div>
      
    </div>
  );
}
