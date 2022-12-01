import React from 'react'
import './style.css'
const navMenu = [
    {
        id: 1,
        name: "Home",
        link: "/"
    }, {
        id: 2,
        name: "Portfolio",
        link: "/portfolio"
    }, {
        id: 3,
        name: "Skills",
        link: "/skills"
    }, {
        id: 4,
        name: "Blog",
        link: "/blog"
    }
]
function Menu() {
    return (
        <div style={{ display: "flex", justifyContent: "center", paddingTop: "40px" }}>
            {navMenu.map((element => {
                return <a href={element.link} key={element.id}><div className="circle">{element.name}</div></a>
            }))}
        </div>
    )
}

export default Menu