import {useState} from 'react';
import './App.css';

function App(props) {
  const {id,sub, total, price, value,value1} = props

  const [selectEl, setSelectEl] = useState(false);

  function handleClick(e){
      setSelectEl((pre) => e.target ? !pre :pre)
  }

  return (
        <div className= {!selectEl ? "" :"App"}>
           <div className="sub-box1">
                 <input type="radio"
                        name="radioButton"  
                        value ={value1}
                        onChange={handleClick} ></input>

                <div className="sub-child2">
                   <div className="twelve1">{sub}</div>
                   {(id ===1) ?<div className="expire1">{value} </div> : false}
                </div>
                 <div className="total-sub1">
                     <p className="total1">Total<span> ₹{total}</span></p>
                     <p>₹{price} /mo</p>
                 </div>
            </div>
        </div>
  );
}

export default App;
