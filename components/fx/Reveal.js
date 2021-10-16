import styles from "./Reveal.module.scss"
import React from "react";
import useVisibility from "/lib/hooks/useVisibility";

const effects = {
  fadeUp : {
    duration : 1000    
  }
}

const Reveal = (props) => {

  const { 
    effect = "fadeUp",  
    duration,
    steps = 100,
    threshhold = 0
  } = props

	const [visRef, { ratio, direction, wasVisible, wasPassed }] = useVisibility('', threshhold, steps);	
  const effectClass = ratio > 0 || wasVisible  ? styles[effect] : false
  
	return (
    <>
      {React.Children.map(props.children, (child, idx) => {
          const props = {
            ref: idx === 0 ? visRef : null,
            className:effectClass,
            style:{
              animationDuration:`${duration/1000}s`,
            }
          }
          return React.cloneElement(child, props)
        })
      }
    </>
  )
};

export default Reveal;
