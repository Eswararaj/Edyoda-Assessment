import img from "./Images/down-arrow.png"
import logo from "./Images/LOGO.png"
import search from "./Images/search.png"
function Navbar(){
    return(
        <div className="navbar">
                <img src ={logo} className="logo"></img>
                <div className="courses">
                    <p>Courses</p>
                    <img src={img}></img>
                </div>
                <div className="program">
                    <p>Programs</p>
                    <img src={img}></img>
                </div>
                <div className="nav-end">
                    <img src={search} className="search"></img>
                    <p>Log in</p>
                    <button>JOIN NOW</button>
                </div>
        </div>
    )
}

export default Navbar