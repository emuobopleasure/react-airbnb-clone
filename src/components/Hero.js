import React from 'react'

const Hero = () => {
  return (
    <section className='hero d-flex flex-column justify-content-center align-items-start'>
        <img src='images/hero-img.png' className='hero-img'/>
        <h1 className='hero-header'>Online Experiences</h1>
        <p className='hero-text'>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.
        </p>
    </section>
  )
}

export default Hero