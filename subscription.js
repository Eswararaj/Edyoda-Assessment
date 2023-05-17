import input from "./Images/input.png"
import datas from "./data";
import App from "./App";
import clock from "./Images/Clock2.png"
import razor from "./Images/Razorpay.png"

function Subscription(){
       const newArray = datas.map((el)=>{
          return(
              <App {...el}/>
          ) 
       })

    return(
        <div className="subscription">
            <div className="number">
                <div>
                    <h1>1</h1>
                    <p>Sign up</p>
                </div>
                <div>
                    <h1>2</h1>
                    <p className="sub">Subscribe</p>
                </div>
            </div>
            <h4>Select your Subcription plan</h4>

            <div className="sub-box">
                <img src={input}/>
                <div className="sub-child1">
                   <div className="twelve">12 months subscription</div>
                   <div className="expire">offer expired</div>
                </div>
                 <div className="total-sub">
                     <p className="total">Total<span> ₹99</span></p>
                     <p>₹8 /mo</p>
                 </div>
            </div>
            {newArray}
            <hr></hr>

            <div className="sub-fees">
              <p className="subcrip">Subcription Fee</p>
              <p>₹18,500</p>
            </div>

            <div className="offer">
                <div>
                    <div className="time">Limited time offer</div>
                    <div className="plan"><img src={clock}></img><span>offer valid till 25th March</span></div>
                </div>
                <div className="discount">-₹18,401</div>
            </div>
            <div className="gst">
                <div><strong>Total</strong> (Incl. of 18% GST)</div>
                <p>₹149</p>
            </div>
            <div className="btn">
                <button className="btn1">CANCEL</button>
                <button className="btn2">PROCEED TO PAY</button>
            </div>
            <img src ={razor} className="razor"></img>
        </div>
    )
}

export default Subscription;