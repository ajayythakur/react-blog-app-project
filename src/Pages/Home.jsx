import React, { useContext } from 'react'
import Grassland from '../Images/Grassland.jpg'
import Hill from '../Images/Hill.jpg'
import { store } from '../Components/Details'
import { Link } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'

const Home = (props) => {
  const [details] = useContext(store);
  console.log(details.filter((article) => article.category === "Bollywood" ))
  console.log(details);

  return (
    <div >
      <div id='grid'>
        <div class='box b1'><img className='gridImage' src={Grassland} alt='404'></img></div>
        <div class='box b2'><img className='gridImage2 gridImage' src={Hill} alt="404" /></div>
        <div class='box b3'><img className='gridImage2 gridImage' src={Hill} alt="404" /></div>
      </div>
      <br />
      <div className='homeDiv'>
      <p id='latext'>Bollywood <hr id='hr2' /></p>
      
      <div className='showdata'>
        {details.filter((article) => article.category === "Bollywood" ).map((item) => {
        return(
          <Link to='/DetailPage' state={item}>
          <div className='data_card'>
          <p className='data_title'>{item.title}</p>
          <img src={item.img} alt='404'/>
          <p className='data_description'>{item.description} </p>
          </div>
          </Link>
          )
})}
          </div>

      <Link to='/bollywood'><h3 className='sectionlink'>Go to Bollywood Section</h3></Link>


      <p id='latext'>Technology <hr id='hr2' /></p>
      <div className='showdata'>
        {details.filter((article) => article.category === "Technology" ).map((item) => {
        return(
          <Link to='/DetailPage' state={item}>
          <div className='data_card'>
          <p className='data_title'>{item.title}</p>
          <img src={item.img} alt='404'/>
          <p className='data_description'>{item.description} </p>
          </div>
          </Link>
          )
})}
          </div>

      <Link to='/technology'><h3 className='sectionlink'>Go to Technology Section </h3></Link>

      <p id='latext'>Hollywood <hr id='hr2' /></p>

      <div className='showdata'>
        {details.filter((article) => article.category === "Hollywood" ).map((item) => {
        return(
          <Link to='/DetailPage' state={item}>
          <div className='data_card'>
          <p className='data_title'>{item.title}</p>
          <img src={item.img} alt='404'/>
          <p className='data_description'>{item.description} </p>
          </div>
          </Link>
          )
})}
          </div>

      <Link to='/hollywood'><h3 className='sectionlink'>Go to Hollywood Section </h3></Link>

      <div className='showdata'>
        {details.filter((article) => article.category === "Fitness" ).map((item) => {
        return(
          <Link to='/DetailPage' state={item}>
          <div className='data_card'>
          <p className='data_title'>{item.title}</p>
          <img src={item.img} alt='404'/>
          <p className='data_description'>{item.description} </p>
          </div>
          </Link>
          )
})}
          </div>

      <Link to='/fitness'><h3 className='sectionlink'>Go to Fitness Section </h3></Link>

      <div className='showdata'>
        {details.filter((article) => article.category === "Food" ).map((item) => {
        return(
          <Link to='/DetailPage' state={item}>
          <div className='data_card'>
          <p className='data_title'>{item.title}</p>
          <img src={item.img} alt='404'/>
          <p className='data_description'>{item.description} </p>
          </div>
          </Link>
          )
})}
          </div>

      <Link to='/food'><h3 className='sectionlink'>Go to Food Section </h3></Link>
</div>
    </div>
  )
}

export default Home