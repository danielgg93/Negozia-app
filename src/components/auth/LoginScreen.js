import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useContext } from 'react';
import { useForm } from '../../hooks/useForm';
import axios from 'axios';
import Swal from 'sweetalert2'
import { Context } from '../ContextProvider';
import { useNavigate } from 'react-router';


export const LoginScreen = () => {

    const navigate = useNavigate();

    const [formLoginValues, handleLoginInputChange] = useForm({

        loginEmail: '',
        loginPassword: '',
    });

    const { setUser } = useContext(Context);

    const { loginEmail, loginPassword } = formLoginValues;

    const handleLogin = (e) => {

        e.preventDefault();
        axios({
            method: 'post',
            url: 'https://mern-negozia.herokuapp.com/api/auth',
            data: {
                email: loginEmail,
                password: loginPassword
            }
        }).then((response) => {
            const datos = response.data;
            if (datos.ok) {
                setUser(datos);
                localStorage.setItem('user', JSON.stringify(datos));
                navigate('/user');
            } else {
                Swal.fire('Error', datos.data.msg, 'error')
            }
        }, (error) => {
            console.log(error);
        });
    }


    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }
    const avatarSyle = { backgroundColor: '#1bbd7e' }
    const btstyle = { margin: "9px 0" }
    const textFieldStyle = { margin: "9px 0" }
    return (
        <Grid>

            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarSyle}><LockOutlinedIcon /> </Avatar>
                    <Typography>
                        Sign in
                    </Typography>
                </Grid>
                <form onSubmit={handleLogin}>
                    <TextField
                        style={textFieldStyle}
                        label='Email'
                        placeholder='Enter Email'
                        fullWidth
                        required
                        name="loginEmail"
                        value={loginEmail}
                        onChange={handleLoginInputChange}
                    />
                    <TextField
                        style={textFieldStyle}
                        label='Password'
                        placeholder='Enter password'
                        type="password"
                        fullWidth
                        required
                        name="loginPassword"
                        value={loginPassword}
                        onChange={handleLoginInputChange}
                    />

                    <Button
                        type="submit"
                        color="primary"
                        fullWidth
                        variant="contained"
                        style={btstyle}>
                        Sign in
                    </Button>
                </form>
                <Typography> Do you have an account?
                    <Button
                    color="primary"
                    style={btstyle}
                    onClick={()=>navigate('/create')}
                    variant="contained"
                    >
                        Sign Up?
                    </Button>
                </Typography>
            </Paper>
        </Grid>


    )
}
