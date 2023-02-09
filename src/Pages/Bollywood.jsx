import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
import PageStruct from '../Components/PageStruct'
import { store } from '../Components/Details'
import SideBar from '../Components/SideBar';
import Advertisement from '../Components/Advertisement';
// import SideBar from '../Components/SideBar';


const Bollywood = () => {
    const [detail] = useContext(store);
    console.log(detail);
    return (
        <div className='main-container'>
            <Advertisement />

            {detail.filter((article) => { return article.category === "Bollywood" }).map((n) => (
                <div className='leftBar'>
                    <PageStruct
                        imgUrl={n.img}
                        title={n.title}
                        description={n.description.slice(0, 300)}

                    />
                </div>

            ))

            }

            {detail.filter((article) => { return article.category === "Bollywood" }).map((n) => (
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
img="https://upload.wikimedia.org/wikipedia/en/b/b6/Ram-Setu.jpeg"
title="RAMSETU"
imdb="4.5"
about="An atheist archaeologist turned believer must race against time to prove the true existence of the legendary Ram Setu before evil forces destroy the pillar of India's heritage.Starring - Akshay Kumar, Nushrratt Bharuccha, Jacqueline Fernandez, Satyadev Kancharana"
date={Date.now()}

img2="https://m.media-amazon.com/images/M/MV5BODM5Zjc5MDYtOWExYi00OTk5LWFhYTQtNWZmM2M4ZjJlZjYzXkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg" 
title2="BLURR"
imdb2=""
about2="With progressive blindness setting in, Gayatri has to find answers to her twin sister's unlikely death. As the lines of reality keep getting blurred, is she ready to look the truth in the eye?"

img3="https://upload.wikimedia.org/wikipedia/en/a/ab/Cirkus_film_poster.jpg" 
title3="CIRKUS"
imdb3=""
about3="Two sets of identical twins are accidentally separated at birth. Several years later, when they are coincidentally in the same town, there is a lot of confusion and misunderstanding when people mistake them for each other."
      /> */}
        </div>
    )
}

export default Bollywood