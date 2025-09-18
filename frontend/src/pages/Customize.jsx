import React, { useContext, useRef, useState } from 'react'
import Card from '../components/Card'
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image5 from "../assets/image5.jpg"
import { IoArrowBack } from "react-icons/io5";
import { RiImageAddLine } from "react-icons/ri";
import { userDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

function Customize() {
  const {
     serverUrl,userData,setUserData,frontendImage, setFrontendImage,backendImage, setbackendImage,selectedImage, setSelectedImage
  }=useContext(userDataContext)
  const navigate=useNavigate()
  const inputImage=useRef()

  const handleImage=(e)=>{
    const file=e.target.files[0]
    setbackendImage(file)
    setFrontendImage(URL.createObjectURL(file))
    setSelectedImage("input")
  }
  return (
    <div className='w-full h-[100vh] bg-gradient-to-t from-[black] to-[#030353] flex justify-center items-center flex-col p-[20px] gap-[20px]'>
      <IoArrowBack className='absolute top-[30px] left-[30px] text-white w-[25px] h-[25px] cursor-pointer'onClick={()=>navigate("/")} />
      <h1 className='text-white mb-[40px] text-[30px] text-center'>Select your <span className='text-orange-500'>Assistant's Avatar</span></h1>
      <div className='w-full max-w-[900px] flex justify-center items-center flex-wrap gap-[15px]'>
         <Card image={image3}/>
         <Card image={image1}/>
         <Card image={image2}/>
         <Card image={image5}/>
    <div className={`w-[70px] h-[140px] lg:w-[150px] lg:h-[280px] bg-[#020220] border-2 border-[#0000ff47] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-4 hover:border-white flex items-center justify-center ${selectedImage=="input"?"border-4 border-white shadow-blue-950":null}`} onClick={()=>{inputImage.current.click()
      setSelectedImage("input")
    }}>
      {!frontendImage && <RiImageAddLine className='text-white w-[25px] h-[25px]'/>}
      {frontendImage && <img src= {frontendImage} className='h-full object-cover'/>}
    
    </div>
    <input type='file' accept='image/*' ref={inputImage} hidden onChange={handleImage}/>
      </div>
      {selectedImage && 
       <button className='min-w-[150px] h-[60px] mt-[30px] bg-white rounded-full text-black font-semibold text-[19px] cursor-pointer' onClick={()=>navigate("/customize2")}> 
         Next
       </button>} 
    </div>
  )
}

export default Customize