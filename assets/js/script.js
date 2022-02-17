//React Using import Libraries

import React from "react"
import ReactDOM from "react-dom"

function Header(){
    return(
        <header>
            <nav className="nav">
                <img className="nav-logo" src="assets/img/react-logo.png"/>
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
            </nav>
        </header>
    )
}

function MainBody(){
    return(
        <div>
            <h1>Why I'm Exciting to learn about React </h1>
                <ol>
                    <li>Its Popular Javascript Library</li>
                    <li>With 100k github starts</li>
                    <li>Its a high professional skill with market demanding </li>
                    <li>I'm more likely to get a job as a developer once grip the concepts in react </li>
                </ol>
        </div>    
    )
}


function Footer(){
    return(
        <footer>
            <small>Ⓒ 2021 <span> MMK </span> developer. All rights reserved</small>
        </footer>  
    )
}

function Page(){
    return(
    <div> 
    <Header />,
    <MainBody />
    <Footer />
    </div>
    )
}

ReactDOM.render(
    <Page /> 
    ,
    document.getElementById("root")
)

/* const page = (
    <div>
        <img src="assets/img/react-logo.png" style="width: 15%;"/>
        <h1>Fun facts about React</h1>
        <ol>
            <li>Was rirst released in 2013</li>
            <li>Was originally created by jordan walke </li>
            <li>Has well over 100k starts on Github</li>
            <li>Is maintained by facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ol>
    </div>
)

ReactDOM.render(
    page
    ,
    document.getElementById("root")
) */




