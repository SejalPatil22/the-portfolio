import React from 'react'
import html from "../../public/html.png"
import css from "../../public/css.png"
import javascript from "../../public/javascript.png"
import python from "../../public/python.png"
import numpy from "../../public/numpy.png"
import mongo from "../../public/mongo.png"
import java from "../../public/finaljava.png"

function Experience() {
    const cardItem = [
        {
            id: 1,
            logo: html,
            name: "HTML",
        },
        {
            id: 2,
            logo: css,
            name: "CSS",
        },
        {
            id: 3,
            logo: javascript,
            name: "JavaScript",
        },
        {
            id: 4,
            logo: python,
            name: "Python",
        },
        {
            id: 5,
            logo: numpy,
            name: "NumPy",
        },
        {
            id: 6,
            logo: mongo,
            name: "Mongodb",
        },
        {
            id: 7,
            logo: java,
            name: "Java",
        },


    ];
    return (
        <>
            <div name="Experience" className=' max-w-screen-2xl container mx-auto px-4 md:px-20  my-20' >
                <div>
                    <h1 className='text-3xl font-bold mb-5'>Experience</h1>
                    <p className='font-semibold'> I've more than 1 years of experience in below technologies.</p>
                    <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
                        {cardItem.map(({ id, logo, name }) => (
                            <div className='flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] cursor-pointer hover:scale-110 duration-300'
                                key={id}
                            >
                                <img src={logo} className='w-[150px] rounded-full' alt="" />
                                <div>
                                    <div className=' '>
                                        {name}
                                    </div>
                                </div>


                            </div>

                        ))}
                    </div>

                </div>
            </div>
            <hr className='border-2 border-pink-200 shadow-md'/>
        </>

    )

}

export default Experience