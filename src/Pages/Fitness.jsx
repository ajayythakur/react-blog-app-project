import React from 'react'
import PageStruct from '../Components/PageStruct'
import SideBar from '../Components/SideBar';
import { useContext } from 'react';
import { store } from '../Components/Details';
import Advertisement from '../Components/Advertisement';


const Fitness = () => {
  const [detail] = useContext(store);
  console.log(detail);
  return (
    <div className='main-container'>

      {detail.filter((article) => { return article.category === "Fitness" }).map((n) => (
        <div className='leftBar'>
          <PageStruct
            imgUrl={n.img}
            title={n.title}
            description={n.description.slice(0, 300)}

          />
        </div>

      ))

      }

      {detail.filter((article) => { return article.category === "Fitness" }).map((n) => (
        <div className='rightBar'>
          <SideBar
            imgUrl={n.img}
            title={n.title}
            description={n.description.slice(0, 50)}
          />
        </div>
      ))
      }
      
      {/* <PageStruct
      img="https://barbend.com/wp-content/uploads/2021/04/BarBend-Article-Image-760-x-427-93.jpg"
      title="Deadlift"
      about="Deadlift Benefits That Are Backed By Science.Want to get bigger, stronger, leaner? Then, you may want to start doing the deadlift." 

      img2="https://images.everydayhealth.com/images/walking-workouts-myths-and-facts-1440x810.jpg?sfvrsn=9caa86b_4"
      title2="Walking Workout"
about2="Walking Workouts: 7 Myths and Facts to Know
Should you be walking every single day? Is one long walk better than multiple shorter ones? And how fast should you be walking?"

img3="https://images.everydayhealth.com/images/ehfc-best-back-exercises-1440x810.jpg?sfvrsn=ee64917d_4"
title3="Exercise for Back Strength"
about3="The Best At-Home Exercises for a Stronger Back.You may not think about your back muscles very often — out of sight, out of mind, right? But you probably want to be paying them a little more attention."
      
      /> */}
      <Advertisement />
    </div>
  )
}

export default Fitness