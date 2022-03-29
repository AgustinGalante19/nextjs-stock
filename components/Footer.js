import React from 'react'

const Footer = () => {
    return (

        <footer className="text-center text-white">
            <div className="container p-4 pb-0">
                <section className="mb-4">
                    <h1>Galante Agustin</h1>
                </section>
            </div>
            <div className="text-center p-3">
                <p>&copy;2020-{new Date().getFullYear()}</p>
            </div>
        </footer>

    )
}

export default Footer;

{/* <footer>
            <div classNameName="container">
                <h1>&copy; Agustin Galante</h1>
                <p>2020-{new Date().getFullYear()}</p>
            </div>
        </footer> */}