import book from "./Images/book.png"
import clock from "./Images/Clock.png"
import tv from "./Images/tv.png"
import degree from "./Images/degree.png"
import ads from "./Images/ads.png"
function Content(){
    return(
        <div className="content">
            <h1>Access curated courses worth ₹ <span>18,500</span> at just <strong>₹ 99</strong> per year!</h1>
            <div className="sub-content">
                <div className="child-el">
                    <img src={book}></img>
                    <h4><strong>100+</strong> Job relevent courses</h4>
                </div>
                <div className="child-el">
                    <img src={clock}></img>
                    <h4><strong>20,000+</strong> Hours of content</h4>
                </div>
                <div className="child-el"> 
                    <img src={tv}></img>
                    <h4><strong>Exclusive</strong> webinar access</h4>
                </div>
                <div className="child-el">
                    <img src={degree}></img>
                    <h4>Scholarship worth<strong> ₹ 94,500</strong></h4>
                </div>
                <div className="child-el">
                    <img src={ads}></img>
                    <h4><strong>Ad free</strong> learning experience</h4>
                </div>
            </div>
        </div>
    )
}

export default Content;