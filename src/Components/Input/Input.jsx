import React from 'react'
import "./input.css"

function Input(props) {
  return (
   <>
    <section className='input__container'>
   <label className='input__label'>{props.label}</label>
   <input type="text" className='input__caracteristics' />
   </section>
   </>
  )
}

export default Input