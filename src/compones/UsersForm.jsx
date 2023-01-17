import axios from 'axios';
import React, { useEffect, useState, } from 'react';
import { useForm } from 'react-hook-form';



const UsersForm = ({ getUsers, userSelected }) => {
    const { handleSubmit, register, reset } = useForm();
    const InputNull = { email: "", password: "", first_name: "", last_name: "", birthday: "" }


    console.log(userSelected);
    useEffect(() => {
        if (userSelected) {
            reset(userSelected)
        } else {
            reset(InputNull)
        }


    }, [userSelected])

    const submit = (data) => {
        if (userSelected) {
            axios.put(`https://users-crud.academlo.tech/users/${userSelected.id}/`, data)
                .then(() => getUsers());
        } else {
            axios.post('https://users-crud.academlo.tech/users/', data)
                .then(() => getUsers());
        }

    };


    return (
        <form onSubmit={handleSubmit(submit)} className='containerForm' >
            <h1 className='title'>New User</h1>
            
            <ul className='inputContainer'>
                <div className='control'>
                    <label htmlFor="email"></label>
                    <input  
                    type="email"
                        id='email'
                        placeholder='email'
                        {...register("email")} />

                </div>

                <div className='control'>
                    <label htmlFor="password"></label>
                    <input type="password"
                        id='password'
                        placeholder='password'
                        {...register("password")} />
                </div>

                <div className='control'>
                    <label htmlFor="first_name"></label>
                    <input type="text"
                        id='first_name'
                        placeholder='first_name'
                        {...register("first_name")} />
                </div>

                <div className='control'>
                    <label htmlFor="last_name"></label>
                    <input type="text"
                        id='last_name'
                        placeholder='last_name'
                        {...register("last_name")} />
                </div>

                <div className='control'>
                    <label htmlFor="birthday"></label>
                    <input type="date"
                        id='birthday'
                        placeholder='birthday'
                        {...register("birthday")} />
                </div>

                <button className='toUpdate'>Upload</button>
                </ul>
         
        </form>
    );
};

export default UsersForm;