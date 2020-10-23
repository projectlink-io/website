import {useState, useEffect, useRef} from "react"

export const useScrollTriggers = (animationSelectors) => {
  let waitingOnAnimRequest = useRef(false);
  let scrolledToRef = useRef([]);
  const [scrolledTo, setScrolledTo] = useState([]);

  useEffect(() => {

    function animChecker(target) {
      // Loop over our selectors
      animationSelectors.forEach(selector => {
        // Loop over all matching DOM elements for that selector
        target.querySelectorAll(selector).forEach(element => {
          const elementBottom = element.getBoundingClientRect().bottom
          if (elementBottom + 3000 < document.body.clientHeight) {
            if (scrolledToRef.current.some(i => i === selector)) return null;
            scrolledToRef.current = [...scrolledToRef.current, selector];
            setScrolledTo(s => [...s, selector])

          }
        })
      })
    }

    window.addEventListener("scroll", ({target}) => {
      if (!waitingOnAnimRequest.current) {
        window.requestAnimationFrame(() => {
          animChecker(target)
          waitingOnAnimRequest.current = false
        })
        waitingOnAnimRequest.current = true
      }
    })
  }, [animationSelectors]);

  return scrolledTo;
}