import React,{useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
export const About = () => {
  let navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token')) {
          <About />
    }else{
          navigate("/login"); 
    }
    // eslint-disable-next-line
}, [])
  return (
    <div>
      <div>
        <label></label>
      </div>
    </div>
  )
}
