import  React,{ useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useNavigate } from 'react-router-dom';
import { Context } from '../ContextProvider';


export const Navbar = () => {

  const { user,setUser } = useContext(Context)
  const  navigate = useNavigate();

  const onLogout = () => {
    localStorage.removeItem("user");
    setUser(undefined);
    navigate('/');
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bienvenido {user?.name}
          </Typography>
           {user?.role ==='ADMIN'&&
          <Button color="inherit" onClick={() => navigate('/create')}>
            <AddCircleOutlineOutlinedIcon />Create
          </Button>
          }
          <Button color="inherit" onClick={onLogout}
          >Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}