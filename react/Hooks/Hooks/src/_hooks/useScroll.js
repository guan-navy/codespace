import { useState } from "react";
import { useEffect } from "react";
export function useScroll(instance) {
  const [y, setY] = useState(instance);
  const handlerScroll = () => {
    setY(document.documentElement.scrollTop);
    console.log(y);
  };
    useEffect(() => {
        
          window.addEventListener("scroll", handlerScroll);
        return () => {
            window.removeEventListener("scroll", handlerScroll);
        };
  }, );
 
  return [y];
}
