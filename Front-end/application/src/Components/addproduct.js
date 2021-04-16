import React, { Component } from "react";
import {useForm} from 'react-hook-form'
import { Link ,useHistory} from "react-router-dom";
import axios from 'axios'






export default function Add() {
    const history = useHistory()
    const {register,handleSubmit} = useForm()
    async function onSubmit(data){
        
         axios.post('http://localhost:5000/product/addproduct',data)
         .then(response=>{
            
            console.log(response)
            history.push('/sellerdashboard')
            })
        .catch(err=>console.log(err))
        
    }
    
        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <h3>Add Product</h3>

                <div className="form-group">
                    <label> name</label>
                    <input type="text" className="form-control" name="name" placeholder="Full name" {...register('name')}/>
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="text" className="form-control" name="price" placeholder="Full name" {...register('price')}/>
                </div>
                <div className="form-group">
                    <label>description</label>
                    <input type="text" name="description" className="form-control" placeholder="Phone" {...register('description')}/>
                </div>

                <div className="form-group">
                    <label>image</label>
                    <input type="text" name="image"  className="form-control" placeholder="Enter age" {...register('image')}/>
                </div>
                <div className="form-group">
                    <label>owner</label>
                    <input type="text" name="owner"  className="form-control" placeholder="Enter age" {...register('owner')}/>
                </div>
                

               

                <button type="submit" className="btn btn-danger ">Add</button>
                
            </form>
            
        );
   
    
}
