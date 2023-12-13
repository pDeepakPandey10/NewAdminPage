import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import axios from 'axios';



const Login = (props) => {

	    const [userName, setUserName] = useState("")

	    const [password, setPassword] = useState("")



	    const navigate = useNavigate();



	    const onButtonClick = () => {
		    axios.get('https://35.154.5.140:8000/emergencyresponseapp/userRoles') .then((response) => {console.log('response ',response)
				    return response.json()

				            })
		            .then((responseJson) => {

				              console.log('login ',responseJson)

				            })

		            .catch((error) => {

				              console.log('login error ' + error);

				            })

		        }



	    return <div className={"mainContainer"}>

		        <div className={"titleContainer"}>

		            <div>Login</div>

		        </div>

		        <br />

		        <div className={"inputContainer"}>

		            <input

	                value={userName}

	                placeholder="Enter your user name"

	                onChange={ev => setUserName(ev.target.value)}

	                className={"inputBox"} />

		        </div>

		        <br />

		        <div className={"inputContainer"}>

		            <input

	                value={password}

	                placeholder="Enter your password"

	                onChange={ev => setPassword(ev.target.value)}

	                className={"inputBox"} />

		        </div>

		        <br />

		        <div className={"inputContainer"}>

		            <input

	                className={"inputButton"}

	                type="button"

	                onClick={onButtonClick}

	                value={"Log in"} />

		        </div>

		    </div>

}



export default Login
