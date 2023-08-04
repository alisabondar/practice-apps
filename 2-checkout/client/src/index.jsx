import { React, useState, useEffect } from "react";
import { render } from "react-dom";
import axios from 'axios';
import F1 from './components/F1.jsx';
import F2 from './components/F2.jsx';
import F3 from './components/F3.jsx';
import Confirm from './components/Confirm.jsx';

const App = () => {
  // use state for rerendering
  const [currentPage, setCurrentPage] = useState('home');
  const [data, setData] = useState({});

  // form data - have to use state for persistence
  // var dataObj = {};
  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentPage === 'F1') {
      let dataObj = {};
      dataObj.cookie = JSON.stringify(document.cookie, undefined, "\t");
      dataObj.name = e.target[0].value;
      dataObj.email = e.target[1].value;
      dataObj.pass = e.target[2].value;
      setData(dataObj);
      console.log(data);
      setCurrentPage('F2')
    } else if (currentPage === 'F2') {
      let oldData = data;
      oldData.line1 = e.target[0].value;
      oldData.line2 = e.target[1].value;
      oldData.city = e.target[2].value;
      oldData.state = e.target[3].value;
      oldData.zipcode = e.target[4].value;
      setData(oldData);
      console.log(data);
      setCurrentPage('F3')
    } else if (currentPage === 'F3') {
      let oldData = data;
      oldData.ccnum = e.target[0].value;
      oldData.exp = e.target[1].value;
      oldData.cvv = e.target[2].value;
      oldData.billzip = e.target[3].value;
      setData(oldData);
      console.log(data);
      setCurrentPage('confirm');
      // make post req on confirmation page
      postData(data);
    }
  }

  const postData = (obj) => {
    axios.post('/userData', {data: obj})
      .catch(err => console.log('Could not post data', err));
  }

  // use numbers to conditionally render
  // in each button go to next
  // tie all three pages here
  return(
    <div>
      <p>Hello, World!</p>
      {currentPage === 'home' && <button onClick={() => setCurrentPage('F1')}>Checkout</button>}

      {currentPage === 'F1' && <F1 handleSubmit={handleSubmit}/>}

      {currentPage === 'F2' && <F2 handleSubmit={handleSubmit} setCurrentPage={setCurrentPage}/>}

      {currentPage === 'F3' && <F3 handleSubmit={handleSubmit} setCurrentPage={setCurrentPage}/>}

      {currentPage === 'confirm' && <Confirm handleSubmit={handleSubmit} setCurrentPage={setCurrentPage}/>}
      <p>
        <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
      </p>
    </div>
  );
}

const domNode = document.getElementById('root');
render(<App />, domNode);