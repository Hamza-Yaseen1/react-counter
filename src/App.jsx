import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



//   let [counter,setCounter]=useState(0)

//   let AddValue = ()=>{
//     if (counter < 20) {
//       setCounter(counter + 1)
//     } else {
//       alert("Counter has reached the maximum limit of 20")
//     }

//   }
// let RemoveValue=()=>{
  
//   if(counter > 0){
//     setCounter(counter-1)
//   }
//   else{
//     alert("Counter has reached the minimum limit of 0")
//   }
// }
//   return (
//     <>
//       <h1>Let's Go</h1>
//       <h2>Counter Value:{counter}</h2>
//       <button onClick={AddValue}>Add Value</button>
//       <br /><br />
//       <button onClick={RemoveValue}>Decrease Value</button>
//     </>
//   )
// }

// export default App



// const Card = () => {
//   let [counter,setCounter]=useState(0)

//     let AddValue = ()=>{
//       if (counter < 20) {
//         setCounter(counter + 1)
//       } else {
//         alert("Counter has reached the maximum limit of 20")
//       }
//     }
  
//   return (
//     <div className="card">
//       <img
//         src="https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
//         alt="Product Image"
//         className="product-image"
//       />
//       <div className="card-content">
//         <h2 className="product-title">Product Name</h2>
//         <p className="product-price">${counter}</p>
//         <button onClick={AddValue} className="add-to-cart">Add to Cart</button>
//       </div>
//     </div>
//   );
// };

// export default Card;
 
function Counter(){
  
  let[counter,setCounter]=useState(0)
  function add(){
    setCounter(counter+=1);
  }
  function remove(){
    setCounter(counter=0);
  }
  return(
 
   <div className='container'>
    <div className="counter">
    <h1>Add Counter</h1>
    <h2>Counter Value:{counter}</h2>
    <button onClick={add}>ADD</button>
    <br /><br />
    <button onClick={remove}>reset</button>
    </div>
   </div>
  )
}
export default Counter