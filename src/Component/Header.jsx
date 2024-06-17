import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'
const Header = () => {
  return (
    <div>
        <nav>
            <h1>AZ DEVELOPERS</h1>
            <main>
                <Link to="/">Home</Link>
                <Link to="/contact">contact</Link>
                <HashLink to="/#about">about</HashLink>
                <HashLink to="/#follow">follow</HashLink>
                <Link to="/services">services</Link>
            </main>
        </nav>
    </div>
  )
}

export default Header