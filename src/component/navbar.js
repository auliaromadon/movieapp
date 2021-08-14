import React from "react"
import {Link} from "react-router-dom"
import Netflix from "../component/image/Netflix.png"
class Navbar extends React.Component{
    Logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        window.location = "/login"
    }
    render(){
        return(
            <div className="navbar navbar-expand-lg bg-dark navbar-dark">
                <button className="navbar-toggler" data-toggle="collapse"
                data-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Link to="/" onClick={() => this.onLogoClick()}>
                    <img style={{width: "10rem"}} className="navigation__container--logo" src={Netflix} alt="" />
                </Link>
                {/* menu */}
                <div id="menu" className="navbar-collapse collpase">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <span style={{fontSize: '1.2rem'}}>Movie</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/actor" className="nav-link">
                                <span style={{fontSize: '1.2rem'}}>Actor</span>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" onClick={() => this.Logout()}>
                                <span style={{fontSize: '1.2rem'}}>Logout</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Navbar;
