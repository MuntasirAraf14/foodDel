import React from 'react'
import './ExploreMenu.css'
import { menu_list} from '../../assets/assets'


const ExploreMenu = (category, setCategory) => {
  return (
    
        <div className="explore-menu" id='explore-menu'>
            <h1>Explore Our Menu</h1>
            <p className='explore-menu-text'>Dive into a world of flavors with our carefully curated menu, designed to satisfy every craving. Whether you’re in the mood for a hearty meal, a light snack, or a sweet treat, we have something for everyone.</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index)=>{
                    return(
                        <div key={index} className="explore-menu-list-item">
                            <img src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr/>
        </div>
    
  )
}


export default ExploreMenu

