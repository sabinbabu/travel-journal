import React from "react"

export default function Card(){
    return(
        <div>
        <div className="card">
            <img className="card--image" src="https://source.unsplash.com/WLxQvbMyfas"></img>
            <div className="card--content">
                <div className="card--location">
                    <i class="fa-solid fa-location-dot"></i>
                    <p className="card--locationtitle">JAPAN<span className="card--googlemap"><a className="card--googlemaplink" href="www.google.com">View on Google Maps</a></span></p>
                </div>
                <h2 className="card--title">Mount Fiji</h2>
                <p className="card--date strong">12 Jan, 2021 - 24 Jan, 2021</p>
                <p className="card--description">
                Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                </p>
            </div>
        </div>
        <div className="card--line"></div>
        </div>
    )
}