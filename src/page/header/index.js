import React from "react";
import logo from "../../assets/img/logo.jpg"

function Header(props) {
    return (
        <nav className={'navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target ' + props.isScrolled} id="ftco-navbar" >
            <div class="container">
                <a class="navbar-brand" href="index.html"><img src={logo} height="40" width="40"/> &nbsp;TwoHearts</a>
                <button class="navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="oi oi-menu"></span> Menu
                </button>
                <div class="collapse navbar-collapse" id="ftco-nav">
                    <ul class="navbar-nav nav ml-auto">
                        <li class="nav-item"><a href="#home-section" class="nav-link"><span>Home</span></a></li>
                        <li class="nav-item"><a href="#groom-bride-section" class="nav-link active"><span>Groom &amp; Bride</span></a></li>
                        <li class="nav-item"><a href="#lovestory-section" class="nav-link"><span>Invitation</span></a></li>
                        <li class="nav-item"><a href="#when-where-section" class="nav-link"><span>When &amp; Where</span></a></li>
                    </ul>
                </div>
            </div>
        </nav >
    )

}

export default Header