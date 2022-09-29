import React from "react"
import { useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

const testdata = '[{"user_name": "Linlin","email":"linlin@young.uk", "role": "Montee", "pwd":"123","id":"1"}, {"user_name": "Fran","email":"fran@young.uk", "role": "Charity", "pwd": "123", "id":"2"}, {"user_name": "Ryan","email":"Ryan@young.uk", "role": "Sponsor", "pwd": "123", "id":"3"}, {"user_name": "Dylan","email":"dylan@young.uk", "role": "Montor", "pwd": "123", "id":"4"},{"user_name": "A school", "email":"school@young.uk", "role":"School", "pwd":"123", "id":"5"}]'

const mystyle = {
  position:"fixed",
	top:"0",
	left:"10",
};

function handleChange(e){
}

function logincheck(name, pwd){
  const entity_list = JSON.parse(testdata)
  console.log(entity_list)
  for(let i = 0; i<entity_list.length; i++){
      if(name == entity_list[i].user_name || name == entity_list[i].email){
        if(pwd == entity_list[i].pwd){
          return entity_list[i].role;
        }
      }
  }
  return null;
}

export default function (props) {
  const navigate = useNavigate();

  function handleSubmit(e){

    e.preventDefault();
    console.log("The email values",e.target.email.value)
    let role = logincheck(e.target.email.value, e.target.pwd.value)
    if (role != null){
      console.log("find its role")

    }
    switch (role){
      case "School":
        navigate("/school",{
          name: e.target.email.value,
        })
        break;
    }



  }
  function logInto(asd){
  }
  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              // type="email"
              className="form-control mt-1"
              name = "email"
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={handleChange}
              name = "pwd"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" onClick={logInto} className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}
