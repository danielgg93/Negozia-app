import React from 'react';
import { Button, MenuItem, Select, TextField, } from '@mui/material';
import { useForm } from '../../hooks/useForm';

const btstyle = { margin: "9px 0" }
const textFieldStyle = { margin: "9px 0" }

export const UserForm = ({ user, handleSubmitForm }) => {

    const roles = {
        admin: "ADMIN",
        user: "USER"
    }

    const [formvalues, handleCreateInputChange] = useForm({
        name: user?.name ?? "",
        email: user?.email ?? "",
        role: user?.role ?? "",
        password1: "",
        password2: "",
    });

    const { name, email, role, password1, password2 } = formvalues;

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            handleSubmitForm(formvalues, user?.id)
        }}>
            <TextField name="name" value={name} onChange={handleCreateInputChange} type="text" style={textFieldStyle} label='Name' placeholder='Enter Name' fullWidth required />
            <TextField name="email" value={email} onChange={handleCreateInputChange} type="text" style={textFieldStyle} label='Email' placeholder='Enter Email' fullWidth required />
            <Select name="role" value={role} onChange={handleCreateInputChange} type="text" style={textFieldStyle} label='Role' placeholder='Enter Role' fullWidth required >
                {Object.keys(roles).map((role, index) => (
                    <MenuItem value={roles[role]} key={index}>{roles[role]}</MenuItem>
                ))}
            </Select>
            {!user && <TextField name="password1" value={password1} onChange={handleCreateInputChange} style={textFieldStyle} label='Password' placeholder='Enter password' type="password" fullWidth required />}
            {!user && <TextField name="password2" value={password2} onChange={handleCreateInputChange} style={textFieldStyle} label='Password' placeholder='Repeat password' type="password" fullWidth required />}
            <Button type="submit" color="primary" fullWidth variant="contained" style={btstyle}>{user ? "Update" : "Create"}</Button>
        </form>

    )
}
