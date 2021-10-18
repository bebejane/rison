import useVisibility from "/lib/hooks/useVisibility";

const useReveal = () => {
  const [ref, { ratio, wasVisible, wasPassed }] = useVisibility('follow', 0, 100);
	const height = wasPassed ? 100 : ratio < 0.8 ? ratio*80 : ratio*100
  const fadeUp = ratio > 0 || wasVisible ? true : false
  
  if(ref.current){
    console.log(ref.current)
  }
  return [ref]
}

export default useReveal