import React from 'react'
import { useContext } from 'react';
import { store } from '../Components/Details';
import { Link } from 'react-router-dom';


const Technology = () => {
  const [detail] = useContext(store);
  console.log(detail);
  return (
    <div className='main-page'>
    <div className='first-child'>
                {detail.filter((article) => { return article.category === "Technology" }).map((n) => (
                // <div className='side-inline'>
                <Link to='/DetailPage' state={n}>
                    <div className='content'>
                        <div><img src={n.img} alt='404'></img></div>
                        <div className='cont'>
                        <p className='data_title res-title'>{n.title} </p>
                        <p className='data_description'>{n.description} </p>
                        </div>
                    </div>
                  </Link>
    ))
                }
                </div>
                {/* <div className='side-inline'> */}
                <div className='adv_top'>                
                    <div className='add'>Advertisement</div>
                    <div className='topPos' >Top Posts</div>
                    {detail.filter((article) => { return article.category === "Technology" }).map((n) => (
                    <Link to='/DetailPage' state={n}>
                    <div className='post'>
                        <div><img src={n.img} alt='404'/></div>
                        <div className='cont'>
                        <p className='data_title postTitle'>{n.title} </p>
                        <p className='data_description'>{n.description} </p>
                        </div>
                    </div>
                    </Link>
                    
                ))
                }
                </div>
                {/* </div> */}
            </div>
  )
}

export default Technology