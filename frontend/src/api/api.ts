import axios from 'axios';

const API_URL = 'https://localhost:7242';
axios.defaults.withCredentials = true; 

export const register = async (firstname: string, lastname: string, email: string, password: string) => {
    try{
        const response = await axios.post(`${API_URL}/api/account/register`, {
            firstname,
            lastname,
            email,
            password
        });
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
}

export const login = async (
    email:string,
    password: string,
    useCookies?: boolean
) => {
    try{
        const response = await axios.post(`${API_URL}/login`, { 
            email,
            password
        }, {
            params: {
                useCookies
            },
            withCredentials: true 
        });
        return response.data;
    } catch (error) {
        console.error('Error logging in user:', error);
        throw error;
    }
}

export const checkAuthStatus = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/account/is-authenticated`, {
            withCredentials: true 
        });
        return response.data === true;
    } catch (error) {
        if (axios.isAxiosError(error) && (error.response?.status === 401 || error.response?.status === 403)) {
            
            return false;
        }
        console.error('Error checking auth status:', error);
        return false; 
    }
};

// New function for logging out
export const logoutUser = async () => {
    try {
        // IMPORTANT: You'll need to implement this POST /api/account/logout endpoint in your ASP.NET Core backend
        // It should call something like await HttpContext.SignOutAsync(IdentityConstants.ApplicationScheme);
        const response = await axios.post(`${API_URL}/api/account/logout`, {}, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        console.error('Error logging out user:', error);
        throw error;
    }
};