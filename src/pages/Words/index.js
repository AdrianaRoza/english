import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './styles.css';

export default function Words () {
  const [cards, setCards] = useState ([]);
  
  const newCard = cards.map((card, index) => (
    <div key={index} className='cards'>
      <div className='card front'>{card.translation}</div>
      <div className='card back'>{card.word}</div>
    </div>
  ));

  const { register, handleSubmit } = useForm();
  const onSubmit = data => setCards((previous) => [...previous, data]);
  console.log(cards)

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Palavra
          <input {...register("word")}/>
        </label>
        <label>
          Palavra
          <input {...register("translation")}/>
        </label>
        <input type="submit"/>
      </form>

      <div className='container'>
        { newCard }
      </div>
    </div>
  );
}
