import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"

const Contact = () => {
    const {
        register,
        handleSubmit,
        
        formState: { errors },
    } = useForm()

    const onSubmit = async(data) => {
        const userInfo={
            name:data.name,
            email:data.email,
            message:data.message
        }
        try {
            await axios.post("https://getform.io/f/axojqzwb",userInfo)
            alert("Your Message has been sent")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20  my-20'>
                <h1 className='text-3xl font-bold mb-5'>Contact Me</h1>
                <p>Please Fill out the form below to contact me</p>
                <div className='flex flex-col items-center justify-center mt-5'>
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        // action="https://getform.io/f/axojqzwb"
                        // method="POST"
                        className='bg-pink-200 w-96 px-8 py-6 rounded-xl'>
                        <h1 className='flex flex-col font-semibold items-center justify-center p-3 text-xl'>Send Your Message</h1>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-800 '> Full Name </label>
                            <input
                                {...register("name", { required: true })}
                                className='shadow appearance-none border  py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline rounded-xl'
                                id='name'
                                name='name'
                                type="text"
                                placeholder='Name' />
                            {errors.name && <span>This field is required</span>}
                        </div>

                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-800 '> Email Address </label>
                            <input
                                {...register("email", { required: true })}
                                className='shadow appearance-none border  py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline rounded-xl'
                                id='email'
                                name='email'
                                type="text"
                                placeholder='Email Address' />
                            {<errors className="email"></errors> && <span>This field is required</span>}
                        </div>

                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-800 '> Message </label>
                            <input
                                {...register("message", { required: true })}
                                className='shadow appearance-none border  py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline rounded-xl'
                                id='message'
                                name='message'
                                type="text"
                                placeholder='Enter the mesasge here' />
                            {<errors className="message"></errors> && <span>This field is required</span>}
                        </div>
                        <div className='flex flex-col items-center justify-center cursor-pointer bg-pink-300 rounded-xl px-3 py-2'>
                            <button type='submit'>Send</button>
                        </div>
                    </form>
                </div>

            </div>
            <hr className='border-2 border-pink-200 shadow-md' />
        </>
    )
}

export default Contact