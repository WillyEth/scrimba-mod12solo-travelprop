import React from "react"

function Card(props) {
    return (
        <div className="card">
            <img src={`${props.item.imageUrl}`} className="card--image" />

            <p className="card--sec__location">
                <i class="fa-solid fa-map-pin"> </i>
                {props.item.location}
                <p>
                    <a href={props.item.googleMapsUrl}>View on Google Maps</a>
                </p>
            </p>
            <p className="card--sec__title">{props.item.title}</p>
            <p className="card--sec__dates">
                {props.item.startDate}
                <span>-{props.item.endDate}</span>
            </p>
            <p className="card--sec__desc">{props.item.description}</p>
        </div>
    )
}

export default Card
