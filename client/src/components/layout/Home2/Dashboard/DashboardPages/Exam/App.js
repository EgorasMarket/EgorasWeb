// import axios from 'axios';
// import jwt_decode from 'jwt-decode';


// const 


// const Users = localStorage.getItem("user");
// Users= Users ? JSON.parse(Users) : null;

// const [user,setUser]={}

import React ,{useState,useEffect}from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";


const saving=()=>{


    const [apple,setApple] = useState({})
    useEffect(()=>{


        let User = localStorage.getItem("User");
        User = User ? JSON.parse(User) : null;
 
    })


     

    return(
  <> 
  </>
    )
}

export default saving;