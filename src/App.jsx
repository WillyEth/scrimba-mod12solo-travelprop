import React from "react"
import Hero from "./Hero"
import data from "./data"
import Card from "./Card"

function App() {
    const cards = data.map((item) => {
        return <Card key={item.id} item={item} />
    })

    return (
        <div className="App">
            <Hero />
            <section className="cards-list">{cards}</section>
        </div>
    )
}

export default App
