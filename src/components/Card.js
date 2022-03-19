import React from 'react'

const Card = ({img, rating, reviewCount, location, title, price, openSpots}) => {
    let badgeText
    if (openSpots === 0) {
         badgeText = "SOLD OUT"
    }else if (location === "Online") {
        badgeText = "ONLINE"
    }

  return (
    <div className='card'>
        {badgeText && <div className='card-badge'>
            {badgeText}
        </div>}
        <div>
            <img src={`images/${img}`} className='card-img'/>
        </div>
        <div className='card-body'>
            <div className='row1'>
                <img src='images/Star 1.png' className='star-img'/>
                <span>{rating}</span>
                <span className='grey'>({reviewCount}) -</span>
                <span className='grey'>{location}</span>
            </div>
            <p>{title}</p>
            <p><span className='bold'>From ${price}</span> / person</p>
        </div>
    </div>
  )
}

export default Card