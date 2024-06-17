import React from 'react'
import { useEffect } from 'react'

function Navbar(props) {
    const color=props.color;

    useEffect(()=>{
        alert("I will run only on every render");
    })
     useEffect(() => {
        alert("Effect happended");
    }, [])

    
    useEffect(()=>{
        alert("Color was changed");
    },[color])

  return (
    <div>
        <h1>I am {color} navbar</h1>
    </div>
  )
}

export default Navbar
