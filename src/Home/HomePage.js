import React from 'react'

// css styles

import '../css/basic.css'
import '../css/gallery.css'
import '../css/text.css'
import '../css/button.css'
import '../css/smallscreen.css'

import personIcon from '../assets/personIcon.png'
import greaterthan from '../assets/greaterthan.png'
import publicSpeaker from '../assets/publicSpeaker.png'
import thinkingCloud from '../assets/thinkingCloud.png'

function HomePage() {

  // button function to go down to gallery
  const handleClickScroll = () => {
    const element = document.getElementById('down-button');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  // grabbing the buttons from the DOM HTML into a variable of a const
  const buttonRight = document.getElementById('slideRight');
  const buttonLeft = document.getElementById('slideLeft');

  // ANIMATION ON AND OFF
  const startbtn = document.getElementById('startbtn');

  const stopbtn = document.getElementById('stopbtn');

  const person = document.getElementById('person');
  



  // getting the button id and adding an "addEventListener" to listen for the click event from the user

    startbtn.addEventListener("click", () => {

      // change the image animation to be true / play animation when startbtn is clicked
      person.style.animation = "front-animation 5s infinite";
      
      // person.style.webkitAnimation = "front-animation 5s infinite";
      // person.style.opacity = "100%";
    });
  
  


  stopbtn.addEventListener("click", () => {
    // change the image animation to be false / stop animation when startbtn is clicked by disabeling it with ""
    person.style.animation = "";
    // person.style.opacity = "0%";
  });


// giving the variable a method for when it is clicked 

  buttonRight.onclick = () => {
    // get the whole div containing the images and give the html method "scrollLeft" to move 200px
    document.getElementById("image-gallery").scrollLeft += 200;

    console.log("right");
  };
 
  // get the whole div containing the images and give the html method "scrollRight" to move 200px

    buttonLeft.onclick = () => {
      document.getElementById("image-gallery").scrollLeft -= 200
      console.log("left")

    };
  




  return (
    <>
      <div id="navbar">
        <h1 id="title">Henry Martinez</h1>
      </div>
      {/* Header / main component */}
      <img id="person" src={personIcon} alt="person"/>
      <div id="header">
        <h1 id="question">What leader ship creeds have I practiced upon?</h1>
      </div>
      <div id="filler" />
      <div className="buttonCollection">
        <h2 id="playAnimLabel">Play Image Animation</h2>
        <div id="buttonstrend">
          <button id="startbtn">Start</button>
          <button id="stopbtn">Stop</button>
        </div>
        
      </div>
      <div id="down">
        <button
          id="down-button"
          onClick={handleClickScroll}
          
        >
          <span className="material-symbols-outlined">arrow_downward</span>
        </button>
      </div>
      <div id="filler2" />
      {/* Sub title of Leadership */}
      <div>
        <h3 id="leader-header">Leadership creeds</h3>
      </div>
      {/* Small image gallery */}
      <div className="buttonComponent">
        <button id="slideLeft" type="button">
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </button>
        <div id="main-gallery">
          <div id="image-gallery">
            <div className="image-container">
              <h1 className="creed">
                I believe in the habit of doing more than asked for
              </h1>
              <img className="image-example" src={greaterthan} alt="greaterThan"/>
              <p className="description">
                One way I implement this leadership creed was by putting more
                effort into things instead of the bare minimum. Such as, how I
                try to make the most of the time I have. An example is by
                helping out others on potential stuff they might need help on. I
                could just submit something, but I try to bring myself to do
                more, even on the smallest challenges
              </p>
            </div>
            <div className="image-container">
              <h1 className="creed">
                I believe leadership is action not position
              </h1>
              <img className="image-example" src={publicSpeaker} alt="publicSpeaker"/>
              <p className="description">
                I applied this leadership creed during class for many occasions.
                Such that, I try to lead my team in group works to talk, but if
                they need help, I bring myself up to give support. This gave me
                a view of how being a leader is supposed to be like, rather than
                just sitting and letting other people do the work. Overall, I
                hope to improve and bring more of this creed into my life.{' '}
              </p>
            </div>
            <div className="image-container">
              <h1 className="creed">
                I will strive to know myself better and seek self-improvement
              </h1>
              <img className="image-example" src={thinkingCloud} alt="thinkingCloud"/>
              <p className="description">
                After going through a lot of work last year, I have learned many
                stuff throughout last year. A way I learned was taking account
                into what I struggled the most, being time management. I now try
                my best to do what I can through school and have learned to take
                account into how I should spend my time after class by self
                studying and pushing myself to my potential.
              </p>
            </div>
          </div>
        </div>
        <button id="slideRight" type="button">
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </>
  )
}

export default HomePage
