import React from 'react';
import { Navbar} from '../../common';
import './Header.css';

function Header () {
    return (
        <section className="header">
            <section className="header-top">
                <section className="header-top_logo">
                    <a href="/" className="header-logo">Logo</a>
                </section>
                <section className="header-top_navbar">
                    <Navbar />
                </section>
            </section>
            <section className="header-bottom">
                <section className="header-bottom_phone">
                    310-730-3793
                </section>
                <section className="header-bottom_email">
                    laura_jankowski@brown.edu
                </section>
            </section>
        </section>
    )
}

export default Header;