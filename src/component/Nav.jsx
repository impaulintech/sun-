import React from 'react'
import "../style/nav.css"

function Nav() {
    return (
        <nav className="navContainer">
            <div className="buttons">
                <div className="delete"><h3>Delete</h3></div>
                <div className="edit"><h3>Edit</h3></div>
            </div>
            <div className="createArticle"><h3>Create new article</h3></div>
        </nav>
    )
}

export default Nav
