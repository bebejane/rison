import useVisibility from "/lib/hooks/useVisibility";
import { useEffect, useState } from 'react';

const useReveal = () => {
  const [ref, { ratio, direction, wasVisible, wasPassed }] = useVisibility('follow', 0, 100);
	const height = wasPassed ? 100 : ratio < 0.8 ? ratio*80 : ratio*100
  const fadeUp = ratio > 0 || wasVisible ? true : false
  
  if(ref.current){
    console.log(ref.current)
  }

  return [ref]
}

export default useVisibility