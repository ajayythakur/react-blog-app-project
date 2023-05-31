import React from 'react'
import { useLocation } from 'react-router-dom'

const SingleBlogPage = (props) => {
  const location = useLocation();
  // const { title, img, description } = location.state;
  const data=[location.state];
  console.log(data);


  return (
   <div>
      {data.map((data)=>{
        return(
          <div className='blogPage'>
          <h1>{data.title}</h1>
          <img src={data.img} alt="404" />
          <p>{data.description}</p>
          </div>
        )
      })}

</div>
  )
}

export default SingleBlogPage