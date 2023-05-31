import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const PageStruct = (props) => {

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


                <div>
                    <div className='pageContainer'>
                        <div className='pc1'>
                            <img className='pcImage' src={imgUrl} alt="" />
                            <p className='txxt'>{title}<br />
                                <span>{props.imdb}</span>
                                <p>{description}</p></p>
                        </div>



                    </div>
                    <hr className="pcHR" />
                </div>
            </NavLink>
        </Link>
    )
}

export default PageStruct