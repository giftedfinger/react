import React from "react";
import ReactDOM from "react-dom";

import './index.css'
function Greeting() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      
   
 </section>
 ) 
}
 
const Book = () => {
  return <article className="book">
    <Image />  
    <Title />
    <Autor/>
</article>
  
}

const Image = () => {
  return <img src="https://images-na.ssl-images-amazon.com/images/I/41DF4HUfWvL._AC_SX184_.jpg" alt="" />
}
const Title = () => <h2> Malibu Rising</h2>
  
  const Autor = () => <h3>Patricia Engel</h3>

// let Greeting = () => {
//   return React.createElement('div', {}, React.createElement('h1', {},'i am learning React'))
// }
ReactDOM.render(<Greeting/>, document.querySelector('#root'))