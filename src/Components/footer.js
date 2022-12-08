import React from 'react'
let temp = {
    position: "relative",
    top: "80vh",
    height: "30px",
    "fontSize": "15px",
    'backgroundColor': "black",
    color: "white"
}


export default function footer() {
    return (
        <div>
            <footer className="text-center" style={temp}>Copyright @ Hacker News</footer>
            {/* <h6>Footer works perfectly fine!</h6> */}
        </div>
    )
}
