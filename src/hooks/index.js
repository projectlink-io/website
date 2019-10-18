import {useState, useEffect, useRef} from "react"

export const useScrollTriggers = (animationSelectors) => {
  let waitingOnAnimRequest = useRef(false);
  let scrolledToRef = useRef([]);
  const [scrolledTo, setScrolledTo] = useState([]);
  // const [scrolledTo, setScrolledTo] = useState(false);

  const animChecker = (target) => {
    // single element
    // const element = target.getElementById("project01");
    // const elementTop = element.getBoundingClientRect().bottom

    // if (elementTop < document.body.clientHeight) {
    //   setScrolledTo(true);
    // }

    // Loop over our selectors
    animationSelectors.forEach(selector => {
      // Loop over all matching DOM elements for that selector
      target.querySelectorAll(selector).forEach(element => {
        const elementBottom = element.getBoundingClientRect().bottom
        if (elementBottom + 2000 < document.body.clientHeight) {
          if (scrolledToRef.current.some(i => i === selector)) return null;
          scrolledToRef.current = [...scrolledToRef.current, selector];
          setScrolledTo(s => [...s, selector])

        }
      })
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", ({target}) => {
      if (!waitingOnAnimRequest.current) {
        window.requestAnimationFrame(() => {
          animChecker(target)
          waitingOnAnimRequest.current = false
        })
        waitingOnAnimRequest.current = true
      }
    })
  }, []);

  return scrolledTo;
}