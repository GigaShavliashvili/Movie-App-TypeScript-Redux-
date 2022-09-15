import React, {  useCallback, useState } from 'react'




const useInfinitScrool = (observer: React.RefObject<HTMLDivElement>  | any,isLoading:boolean) => {
    const [page, setPage] = useState<number>(1)
    const lastObserver = useCallback(
        (node:HTMLDivElement) => {
  if (isLoading) return;
   if (observer.current) observer.current.disconnect();
  observer.current = new IntersectionObserver((el) =>{
   if (el[0].isIntersecting === true) {
          setPage((prev) => prev + 1);
        }
  })
     if (node) observer.current.observe(node);
    },[isLoading])
  return {lastObserver, page}
}

export default useInfinitScrool