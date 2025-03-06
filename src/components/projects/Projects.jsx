import React from 'react'
import "./projects.css"
import projectPictur1 from '../../assets/aa.jpg'
import Card from '../../utils/Card'

const Projects = () => {

    const projectData = [
        {

            projectPicture: projectPictur1,
            projectTitle: "ECommerceWeb",
            projectDesc: "This is a eCommerce platform",
            projectLiveUrl: "www.google.com",
            projectCode: "https://github.com/MuhammadZohaib28/figmatoreact"
        },
        {

            projectPicture: projectPictur1,
            projectTitle: "ECommerceWeb",
            projectDesc: "This is a eCommerce platform",
            projectLiveUrl: "www.google.com",
            projectCode: "https://github.com/MuhammadZohaib28/figmatoreact"
        },
        {

            projectPicture: projectPictur1,
            projectTitle: "Traveling Website",
            projectDesc: "This is a eCommerce platform",
            projectLiveUrl: "www.google.com",
            projectCode: "https://github.com/MuhammadZohaib28/figmatoreact"
        },
        {

            projectPicture: projectPictur1,
            projectTitle: "Traveling Website",
            projectDesc: "This is a eCommerce platform",
            projectLiveUrl: "www.google.com",
            projectCode: "https://github.com/MuhammadZohaib28/figmatoreact"
        },
        {

            projectPicture: projectPictur1,
            projectTitle: "Traveling Website",
            projectDesc: "This is a eCommerce platform",
            projectLiveUrl: "www.google.com",
            projectCode: "https://github.com/MuhammadZohaib28/figmatoreact"
        },
        {
            projectPicture: projectPictur1,
            projectTitle: "Traveling Website",
            projectDesc: "This is a eCommerce platform",
            projectLiveUrl: "www.google.com",
            projectCode: "https://github.com/MuhammadZohaib28/figmatoreact"
        },
        {
            projectPicture: projectPictur1,
            projectTitle: "Traveling Website",
            projectDesc: "This is a eCommerce platform",
            projectLiveUrl: "www.google.com",
            projectCode: "https://github.com/MuhammadZohaib28/figmatoreact"
        },
        {
            projectPicture: projectPictur1,
            projectTitle: "Traveling Website",
            projectDesc: "This is a eCommerce platform",
            projectLiveUrl: "www.google.com",
            projectCode: "https://github.com/MuhammadZohaib28/figmatoreact"
        },
        {
            projectPicture: projectPictur1,
            projectTitle: "Traveling Website",
            projectDesc: "This is a eCommerce platform",
            projectLiveUrl: "www.google.com",
            projectCode: "https://github.com/MuhammadZohaib28/figmatoreact"
        },
    ]

    return (
        <div className='projects'>
            <h1>Projects</h1>

            <div className='projectCards'>
                {projectData.map((item, index) => {
                    return (
                        <Card
                            projectPicture={item.projectPicture}
                            projectTitle={item.projectTitle}
                            projectDesc={item.projectDesc}
                            projectLiveUrl={item.projectLiveUrl}
                            projectCode={item.projectCode}
                            yearVisible={false}
                            pictureVisible={true}
                            isButtonVisible={true}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default Projects
