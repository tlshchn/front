import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'

const Description = () => {
  return (
    <div>
      <div>
    

     

        <motion.p
        initial={{
          x:-1000,
          opacity:0
        }}

        animate={{
            x: 600,
            opacity: 1
        }}
        transition={{
          delay:1,
          duration: 2,
          type:'tween'
        }}
        >
            Нет и не будет никакого описания 
        </motion.p> </div>
        
      

    </div>
  )
}

export default Description