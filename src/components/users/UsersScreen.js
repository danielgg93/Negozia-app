import React, { useContext, useEffect, useState } from 'react';
import { Navbar } from '../ui/Navbar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { users } from '../../helpers/getUsers';
import axios from 'axios';
import { Context } from '../ContextProvider';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import { UserForm } from '../ui/UserForm';

export const UsersScreen = () => {

  const [createdUsers, setcreatedUsers] = useState([]);
  const { user } = useContext(Context);
  const [userTable, setuserTable] = useState(undefined);


  const getUsers = async () => {
    const userData = await users(user.token);
    setcreatedUsers(userData.data.user);
  }

  useEffect(() => {
    getUsers();
  });

  const deleteUser = (user_id) => {
    axios({
      method: 'patch',
      url: `https://mern-negozia.herokuapp.com/api/users/${user_id}`,
      headers: {
        'x-token': user.token
      },
      data: {
        isActive: false
      }
    }).then((response) => {
      getUsers();
    }, (error) => {
    });
  }

  const handleUpdateForm = (formvalues, user_id) => {

    const { name, email, role } = formvalues;
    axios({
      method: 'patch',
      url: `https://mern-negozia.herokuapp.com/api/users/${user_id}`,
      headers: {
        'x-token': user.token
      },
      data: {
        name: name,
        email: email,
        role: role,
      }
    }).then((response) => {
      setuserTable(undefined)
      getUsers();
    }, (error) => {
    });
  }
  return (
    <div>
      <Navbar />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <TableCell align="left">id</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Role</TableCell>
              {user?.role === 'ADMIN' &&
                <TableCell align="right">Actions</TableCell>}
            </TableRow>
          </TableHead>
          <TableBody>
            {createdUsers.map((u) => (
              u.isActive ? <TableRow key={u.id}>
                <TableCell align="left">{u.id}</TableCell>
                <TableCell align="right">{u.name}</TableCell>
                <TableCell align="right">{u.email}</TableCell>
                <TableCell align="right">{u.role}</TableCell>
                {user?.role === 'ADMIN' &&
                  <TableCell align="right">
                    <Button onClick={() => setuserTable(u)}>
                      <ModeEditOutlineOutlinedIcon />Edit
                    </Button>
                    <Button onClick={() => deleteUser(u.id)}>
                      <DeleteOutlineOutlinedIcon />Delete
                    </Button>
                  </TableCell>
                }
              </TableRow> : null
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={!!userTable} onClose={() => setuserTable(undefined)}>
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <UserForm user={userTable} handleSubmitForm={handleUpdateForm} />
        </DialogContent>

      </Dialog>
    </div>
  )
}
