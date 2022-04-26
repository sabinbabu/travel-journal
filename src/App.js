import React from "react";
import Header from "./component/Header"
import Card from "./component/Card"
import data from "./data"

export default function(){
    const dataElement = data.map(data=>{
        return(
            <Card
            key={data.id}
            {...data}
            />
        )
    })
    return(
        <div>
            <Header/>
            {dataElement}
        </div>
    )
}