import React from 'react'
import {
    Route,
    Routes,
    BrowserRouter as Router,
    Navigate
} from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen';
import { CreateUser } from '../components/auth/CreateUser';
import { UsersScreen } from '../components/users/UsersScreen';

export const AppRouter = () => {

    const user = localStorage.getItem("user");

    return (
        <Router>
            <Routes>
                <Route  path='/' element={<LoginScreen/>} />
                <Route  path='/create' element={<CreateUser />} />
                <Route  path='/user' 	
                element={!!user? (
					<UsersScreen/>
				) : (
					<Navigate replace to={"/"} />
				)
			} />
            </Routes>
        </Router>
    )
}
