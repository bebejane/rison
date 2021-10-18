import styles from "./Reveal.module.scss"
import React from "react";
import cn from 'classnames'
import useVisibility from "/lib/hooks/useVisibility";

const effects = {
  fadeUp : {
    duration : 1000,
    transform: 'translateY',
    distance : 50,
    direction : '+',
    unit: 'px',
    fade:true
  },
  slideInLeft : {
    duration : 1000,
    transform: 'translateX',
    distance : 100,
    direction : '-',
    unit: 'px',
    fade:true
  },
  slideInRight: {
    duration : 1000,
    transform: 'translateX',
    distance : 100,
    direction : '+',
    unit: 'px',
    fade:true
  },
  zoomIn: {
    duration : 1000,
    transform: 'scale',
    distance : 0.9,
    direction : '',
    unit: '',
    fade:false
  }
}

const Reveal = (props) => {
  const effect = effects[props.effect] && styles[props.effect] ? effects[props.effect] : undefined
  if(!effect) return <div>{`Effect "${props.effect}" doesn't exist!`}</div>

  const { steps = 100, threshhold = 0} = props
  const duration = props.duration || effect.duration
  const distance = Math.abs(props.distance || effect.distance)
  const fade = props.fade === false ? false : effect.fade

  const [visRef, { ratio, direction, wasVisible, wasPassed }] = useVisibility('', threshhold, steps);	
  const effectClass = ratio > 0 || wasVisible  ? styles[props.effect] : undefined

  const style = {
    animationDuration:`${(duration)/1000}s`,
    transform : effect.transform ? `${effect.transform}(${effect.direction}${distance}${effect.unit})` : undefined,
    opacity : fade ? 0 : 1
  }
  
	return (
    <>
      {React.Children.map(props.children, (child, idx) => {
          const p = {
            ref: idx === 0 ? visRef : null,
            ...child.props,
            className: cn(effectClass, child.props.className),
            style
          }
          return React.cloneElement(child, p)
        })
      }
    </>
  )
};


const generateStyles = (props) => {


}

export default Reveal;
