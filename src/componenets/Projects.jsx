import React from 'react'
import animation from "../../public/animation1.png"
import animation2 from "../../public/animation2.png"
import stroy from "../../public/story.png"
import todo from "../../public/to-do-list.png"
import clone from "../../public/clone.png"
import weather from "../../public/weather.png"
import game from "../../public/game.png"
import login from "../../public/animatedlogin.png"
import bookstore from "../../public/bookstore.png"
import portfolio from "../../public/portfolio.png"
import greenfood from "../../public/greenfood.jpeg"
import ecommerce from "../../public/ecommerce.jpeg"
import { info } from 'autoprefixer'



const PortFolio = () => {

  const proItem = [
    {
      id: 1,
      image: portfolio,
      name: "Portfolio",
      info: "This is my simple yet elegant portfolio website built using React.js and Tailwind CSS. The site is fully responsive, providing a smooth user experience across all devices.",
      visit: <a href="https://the-portfolio-phi.vercel.app/">visit</a>
    },
    {
      id: 2,
      image: bookstore,
      name: "BookStore",
      info: "This is a fully responsive bookstore website built using React.js for the front-end, MongoDB for the database, and Tailwind CSS for styling.",
      visit: <a href="https://book-store-theta-sepia.vercel.app/">visit</a>
    },
    {
      id: 3,
      image: login,
      name: "Animated LoginPage",
      info: "This is a simple, animated login page created using HTML, CSS, and JavaScript. It features smooth transitions and engaging animations to enhance the user experience.",
      visit:<a href="https://sejal-animated-login.netlify.app/">visit</a>
    },
    {
      id: 4,
      image: game,
      name: "Tic-Tac-Toe",
      info: "This is a simple Tic-Tac-Toe game created with HTML, CSS, and JavaScript. It allows two players to take turns marking X or O on a 3x3 grid, with JavaScript detecting wins, losses, or draws.",
      visit:<a href="https://sejal-tic-toc-toe-game.netlify.app/">visit</a>
    },
    {
      id: 5,
      image: greenfood,
      name: "GreenFood Application",
      info: "This is a green food application developed using HTML, CSS, and JavaScript. The app features a user-friendly interface that showcases a variety of healthy recipes"
    },
    {
      id: 6,
      image: ecommerce,
      name: "E-Commerce Application",
      info: "This is an e-commerce quiz application built using HTML, CSS, and JavaScript. It features an interactive interface where users can test their knowledge on various e-commerce topics"
    },
    {
      id: 7,
      image: weather,
      name: "Weather Application",
      info: "This is a weather application built using HTML, CSS, and JavaScript. The app provides real-time weather updates and forecasts for any location, allowing users to check current temperatures, humidity.",
      visit:<a href="https://sejal-weather-app.netlify.app/">visit</a>
      
    },
    {
      id: 8,
      image: clone,
      name: "Netflix Clone",
      info: "This is a simple Netflix website clone built using HTML, CSS, and JavaScript. The application features a clean, responsive layout that mimics the look and feel of the original Netflix interface.",
      visit:<a href="https://clone-netfllix-sejal.netlify.app">visit</a>
    },
    {
      id: 9,
      image: todo,
      name: "To-Do-List",
      info: "This is a simple to-do list application built using React.js, allowing users to easily add, edit, and delete their tasks."
    },
    {
      id: 10,
      image: stroy,
      name: "Interactive Storyteller",
      info: "This is a story teller application built using HTML, CSS, and JavaScript. The app allows users to  read stories in an interactive format. ",
      visit:<a href="https://story-teller-ruby.vercel.app/">visit</a>
    },
    {
      id: 11,
      image: animation2,
      name: "Bounce Animation",
      info: "This is a bounce animation created using HTML and CSS. The animation features a playful bouncing effect",
      visit:<a href="https://sejalpatil22.github.io/css-animation2/">visit</a>
    },
    {
      id: 12,
      image: animation,
      name: "Simple Animation",
      info: "This is my first animation project created using HTML and CSS. The project showcases my understanding of CSS animations and transitions",
      visit:<a href="https://sejal-css-animation.netlify.app/">visit</a>
      
      
      
    },
  ]


  return (
    <>
      <div name="Project" className=' max-w-screen-2xl container mx-auto px-4 md:px-20  my-20'>
        <div>
          <h1 className='text-3xl font-bold mb-5'>
            Projects
          </h1>
          <span className='underline font-bold text-purple-800  text-2xl'> My Projects</span>
          <div className='grid grid-cols-1 md:grid-cols-3'>
            {
              proItem.map(({ id, image, name, info, visit }) => (
                <div className='md:w-[430px] md:h-[430px] rounded shadow-lg p-3 m-3 cursor-pointer hover:scale-110 duration-300' key={id}>
                  <img src={image}
                    className='w-[370px] h-[300px] p-6 border-[2px] justify-center items-center  border-pink-200 md:m-2'
                    alt="" />
                  <div className='font-bold text-purple-800 text-xl flex justify-self-end'>
                    {name}
                    <div className='cursor-pointer text-blue-500 italic text-xs'>{visit}</div>
                  </div>
                  <div className='text-xs font-semibold m-1 justify-center'>
                    {info}
                  </div>
                </div>

              ))


            }
          </div>







        </div>

      </div>
      <hr className='border-2 border-pink-200 shadow-md' />
    </>
  )
}

export default PortFolio