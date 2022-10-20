/**
 * Henry Martinez
 * henrymtz0390@gmail.com
 *
 * Description:
 * Renders a navigation bar with links to other pages
 *
 *
 */

import pizza from '../../../Components/HomeComponents/navbar/NavBar.module.css'

import { useEffect, useState } from 'react'

// template for a functional component
export default function NavBar() {
  const [counter, setCounter] = useState(0);

    // if dependency is an empty array -> only run when component counter is loaded
  useEffect(() => {

    if (localStorage.getItem('counter-value')){
        setCounter(localStorage.getItem('counter-value'))
    }
  }, [])

  const onIncrement = () => {
	
	setCounter(counter + 1)
	setCounter((prevValue) => {
		return prevValue + 1 // new counter value 
	})


        // store -> takes key as param
    // look for application tab
        localStorage.setItem('counter-value', counter);
    } // end of scope

    // function decrease
    const onDecrement = () => {
        
    } 

  return (
    <>
      <div className={pizza.NavBar}>AMong us</div>
      <div className={pizza.NavBar}>AMong us</div>
      <p>Counter: {counter} </p>

      <div>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
      </div>
    </>
  )
}
