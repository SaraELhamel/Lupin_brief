import React, { Component } from "react";
import {useForm} from 'react-hook-form'
import { Link ,useHistory} from "react-router-dom";
import axios from 'axios'






export default function SignUp () {
    const history = useHistory()
    const {register,handleSubmit} = useForm()
    async function onSubmit(data){
        
         axios.post('http://localhost:5000/vendeur/addvendeur',data)
         .then(response=>{
            
            console.log(response)
            history.push('/signin')
            })
        .catch(err=>console.log(err))
        
    }
    
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" name="first_name" placeholder="Full name" {...register('first_name')}/>
                </div>
                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" name="last_name" placeholder="Full name" {...register('last_name')}/>
                </div>
                <div className="form-group">
                    <label>phone</label>
                    <input type="number" name="phone" className="form-control" placeholder="Phone" {...register('phone')}/>
                </div>

                <div className="form-group">
                    <label>email</label>
                    <input type="text" name="email"  className="form-control" placeholder="Enter age" {...register('email')}/>
                </div>
                <div className="form-group">
                    <label>cin</label>
                    <input type="number" name="CIN"  className="form-control" placeholder="Enter age" {...register('CIN')}/>
                </div>
                

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" {...register('password')}/>
                </div>

                <button type="submit" className="btn btn-danger ">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered  <Link to={"/signin"}>Sign in</Link>
                </p>
            </form>
            
        );
   
    
}
