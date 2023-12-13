import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './LoginPage';

import './App.css';

import { useEffect, useState } from 'react';



function App() {

	  const [loggedIn, setLoggedIn] = useState(false)

	  const [email, setEmail] = useState("")



	  return (

		      <div className="App">

		        <BrowserRouter>

		        <Routes>

		            <Route path="/" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
		          </Routes>

		        </BrowserRouter>

		      </div>

		    );

}

export default App;
