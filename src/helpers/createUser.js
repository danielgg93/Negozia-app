import axios from 'axios';

export const createUser = async ({ name, email, password1, role }) => {

    try {
        const { data } = await axios({
            method: 'post',
            url: 'https://mern-negozia.herokuapp.com/api/users',
            data: {
                name: name,
                email: email,
                password: password1,
                role: role,
            }
        });
        return data;

    } catch (error) {

    }
}
