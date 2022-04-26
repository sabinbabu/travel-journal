import React from "react"

export default function Card(props){
    let googleLink = "https://www.google.com.au/maps/place/"+props.title+"/"
    return(
        <div>
        <div className="card">
            <img className="card--image" src={props.photo_url}></img>
            <div className="card--content">
                <div className="card--location">
                    <i class="fa-solid fa-location-dot"></i>
                    <p className="card--locationtitle">{props.title}<span className="card--googlemap"><a className="card--googlemaplink" href={googleLink} target="_blank">View on Google Maps</a></span></p>
                </div>
                <h2 className="card--title">{props.location}</h2>
                <p className="card--date strong">{props.date_start} - {props.date_end}</p>
                <p className="card--description">
                    {props.description}
                </p>
            </div>
        </div>
        <div className="card--line"></div>
        </div>
    )
}