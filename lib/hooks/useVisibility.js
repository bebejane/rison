import { useEffect, useState } from 'react';
import { useInView } from "react-intersection-observer";

const threshold = new Array(100).fill(0).map((x,t)=> t/100)

const useVisibility = (cb) => {
  const { ref, inView, entry } = useInView({ threshold });
  const { intersectionRatio: ratio } = entry || {};

  useEffect(()=>cb && cb(ratio),[ratio])

  return [ref, ratio]
}

export default useVisibility