import { useEffect, useState } from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs";


const Footer = () => {
    const [currentYear, setCurrentYear] = useState()
    useEffect(() => {
        const year = new Date().getFullYear()
        setCurrentYear(year)
    }, []);

    return (
        <footer className="p-2 bg-warning text-dark text-center">
            <div className="container d-flex flex-column flex-md-row justify-content-between">
                <p className="mb-0">Sean Barr&copy;{currentYear}</p>
                <div>
                    <a href="https://github.com/SeanBarr" target="_blank" rel="noreferrer"><BsGithub className="fs-5 icon-color me-2" /></a>
                    <a href="https://github.com/SeanBarr" target="_blank" rel="noreferrer"><BsLinkedin className="fs-5 icon-color" /></a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;