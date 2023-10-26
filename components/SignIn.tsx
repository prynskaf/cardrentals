'use client'
import React from 'react'
import { CustomButton } from '.'
import {useState} from "react";


const SignIn = () => {
    const handleButtonClick = () => { 
        console.log("clicked");
    }

  return (
    <div>
        <CustomButton
        title='Sign in'
        btnType='button'
        containerStyles='text-white rounded-full bg-primary-blue min-w-[130px] cursor-pointer'
        handleClick={handleButtonClick}
      />
    </div>
  )
}

export default SignIn