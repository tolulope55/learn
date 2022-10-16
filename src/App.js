import logo from './logo.svg';
import './App.css';
import Home from './twopages/Home';
import Exercise from './components/Exercise';
import ProductExercise from './components/ProductExercise';
import { useRef, useState } from 'react';
import Design from './twopages/Design';
import DesignAss from './components/DesignAss';
import Product from './onepage/Product';
import { Route, Routes } from 'react-router-dom';
import Development from './components/Development';
import E_Design from './twopages/E_Design';
import Navbar from './components/Navbar';
import E_Development from './twopages/E_Development';
import DevelopmentTest from './components/DevelopmentTest';
import ScrollToTop from './components/ScrollToTop';

function App() {
  // const [getAnswer, setGetAnswer] = useState('');
  // const inputRef = useRef(null)
  // const [text, setText] = useState('');

  // function handleClick() {
  //   const answer = 'tolu'
  //   if(inputRef.current.value===answer) {
  //     setText('Hmm.. Bolanle you are not a failure, retake the text')
  //   }
  //   // setGetAnswer(event.target.value);
  //   // if(answer === setGetAnswer) {
  //   //   alert('you passed the test')
  //   // }
  //   return setText
  // }
  

  return (
    <div className="h-[80vh]">
  
      <Routes>
      {/* <ScrollToTop /> */}
        <Route path="/" exact element={<Home />} />
        <Route path="e_design" element={<E_Design />} />
        <Route path="e_development" element={<E_Development />} />
        <Route path="development" element={<Development />} />
        <Route path="developmenttest" element={<DevelopmentTest />} />
        <Route path="designtest" element={<DesignAss />} />
        <Route path="producttest" element={<ProductExercise />} />
        <Route path="product" element={<Product />} />
        <Route path="design" element={<Design />} />
      </Routes>
        {/* <E_Design /> */}
      
      {/* <div className='border-2 rounded-xl h-[100px] p-4 w-[400px] bg-[#131930] text-white'>{text}</div>
      <div>
      <input ref={inputRef} className='mx-4 mt-5 text-black' type='text' />
      <button onClick={handleClick}>submit</button>

      </div> */}
      
       
       
      
    </div>
  );
}

export default App;
