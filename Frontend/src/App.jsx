import {useState, useEffect} from 'react';
import FetchData from './FetchData';


function App() {
  const [customer, setCustomer] = useState([]);

 function getCustomer() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.text();
      })
      .then(data => {
        setCustomer(data);
      });
  }


  useEffect(() => {
   getCustomer();
  }, [ ] );

  const mycus = customer ;
  return (
    <div>
      <FetchData />
    </div>
  );
  }

export default App  ;

