import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import Swal from 'sweetalert2';
import { UserForm } from '../ui/UserForm';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../helpers/createUser';


export const CreateUser = () => {

    const navigate = useNavigate();
    
    const handleSubmitForm = async(formvalues) => {

        const { password1, password2, name, email, role } = formvalues;

        if (password1 !== password2) {
            return Swal.fire('Error', "Las contraseñas deben de ser iguales", 'error');
        }
        const userCreated =  await createUser({name,email,password1,role});
       if(userCreated.ok){
        navigate("/user")
       }else{   
        navigate("/")
       }
    }


    const paperStyle = { padding: 20, height: '70vh', width: 280, margin: "20px auto" }

    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                <Grid align='center'>
                    <Typography>
                        Create User
                    </Typography>
                </Grid>
                <UserForm user={undefined} handleSubmitForm={handleSubmitForm} />
            </Paper>
        </Grid>

    )
}
