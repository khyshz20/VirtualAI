import React, { useContext } from 'react'
import { userDataContext } from '../context/UserContext'

function Card({image}) {
  const {
       serverUrl,userData,setUserData,frontendImage, setFrontendImage,backendImage, setbackendImage,selectedImage, setSelectedImage
    }=useContext(userDataContext)
  return (
    <div className={`w-[70px] h-[140px] lg:w-[150px] lg:h-[280px] bg-[#020220] border-2 border-[#0000ff47] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-blue-950 cursor-pointer hover:border-4 hover:border-white ${selectedImage==image?"border-4 border-white shadow-blue-950":null}`} onClick={()=>{setSelectedImage(image)
      setbackendImage(null)
      setFrontendImage(null)
    }}>
        <img src={image} className='h-full object-cover' />
    </div>
  )
}

export default Card

