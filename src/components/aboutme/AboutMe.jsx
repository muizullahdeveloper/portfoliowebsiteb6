import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { TbBrandFiverr } from 'react-icons/tb'
import './aboutme.css'

const AboutMe = () => {
    return (
        <div className='aboutme'>
            <div className='aboutme-leftsection'>
                <h1>Frontend ReactJS Developer</h1>

                <p>Hi, I'm <span>Muhammad Zohaib</span>. A passionate Front-end React Developer based in Karachi, Pakistan. 📍</p>

                <div>
                    <FaLinkedin />
                    <FaGithub />
                    <TbBrandFiverr />

                </div>
            </div>

            {/* YEH IMAGE WALI DIV HAI */}
            <div className='aboutme-picture'>
                <img src='https://media.istockphoto.com/id/1265176370/photo/portrait-of-a-confident-young-businessman.jpg?s=612x612&w=0&k=20&c=Hr5Rn3WlBied-o4Qu2LiRc6wP_eHI8UMG9rl1v-_a9s=' />
            </div>

        </div>
    )
}

export default AboutMe
