import React from 'react'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <h1>&copy; Agustin Galante</h1>
                <p>2020-{new Date().getFullYear()}</p>
            </div>
        </footer>
    )
}

export default Footer;