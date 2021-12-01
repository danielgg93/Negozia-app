import axios from 'axios';

export const createUser = async ({name,email,password1,role}) => {

    try {
        const {data} = await axios ({
                method: 'post',
                url: 'http://localhost:4000/api/users',
                data: {
                    name: name,
                    email: email,
                    password: password1,
                    role: role,
                }
            });
            console.log(data)
            return data;

    }catch(error){
        console.log(error)

    }
}
