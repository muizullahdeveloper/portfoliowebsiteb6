import React from 'react'

const Card = (props) => {
    return (

        <div className='card-ui'>
            <div className='cardPicture'>
                <img src={props.projectPicture} />
            </div>
            <h1>{props.projectTitle}</h1>
            <p>{props.projectDesc}</p>
            <div>
                <button onClick={props.projectLiveUrl}>Live</button>
                <button onClick={props.projectCode}>Code</button>
            </div>
        </div>

    )
}

export default Card
