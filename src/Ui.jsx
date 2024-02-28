import { useState } from "react";

const Ui=()=>
{
    let count=0;
    const [num ,setNum]=useState(0);
    const NoIncrs=()=>
    {
        setNum(num+1);
    }
    const NoDcres=()=>{
        if(num>0)
        {
           setNum(num-1);
        }else
        {
            alert("Sorry ,Zero Limit Reached");
            setNum(0);
        }
    }
   return(
    <>
        <div className="main_div">
        <div className="center_div">
            <h1>{num}</h1>
            <div className="btn_div">
              <button onClick={NoIncrs}>Increm</button>
              <button onClick={NoDcres}>Decrem</button>
            </div> 
        </div>
        </div>
    </>
   );
}
export default Ui;