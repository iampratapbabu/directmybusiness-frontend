import React from 'react';
import { useParams } from 'react-router-dom';

const Demopage = () => {
    let { demoid } = useParams();

  return (
   <>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In accusantium repellendus, voluptates fugiat ipsa vero ea blanditiis! Quisquam sed excepturi nobis pariatur cum, et hic, dolorum nihil, omnis tempora repellat.</p>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In accusantium repellendus, voluptates fugiat ipsa vero ea blanditiis! Quisquam sed excepturi nobis pariatur cum, et hic, dolorum nihil, omnis tempora repellat.</p>
  
   <h1>{demoid}</h1>
   </>
  )
}

export default Demopage;