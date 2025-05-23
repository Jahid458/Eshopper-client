import  { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';

const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

export default useAuth;