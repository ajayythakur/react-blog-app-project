import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { store } from './Details';

const HomeVerticalTiles = (props) => {
  const [details]=useContext(store)
  const { imgUrl, title, description, techId } = props;

  return (
    <Link to='/DetailPage'>
      <NavLink
        state={{
          title: title,
          img: imgUrl,
          description: description,
          id: techId,
        }}
        to={`${techId}`}
      >
        <div className="verticalTiles">
          <div className=''>
            <h4>{title}</h4>
            <img className='tileImg' src={imgUrl} alt='404' /> <br />
            <p> {description}</p>
          </div>
        </div>
      </NavLink>
    </Link>
  )
}

export default HomeVerticalTiles