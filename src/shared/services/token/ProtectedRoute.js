import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../store/useAuth';

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children, allowedRoles }) => {
  const navigate = useNavigate();
  const { isLoggedIn, userdetails } = useAuth();

  useEffect(() => {
    console.log('ProtectedRoute - Checking authorization...');
    const userDetails = userdetails();
    console.log('User Details:', userDetails);

    if (!isLoggedIn) {
      console.log('User not logged in, redirecting to /login');
      navigate('/login');
    // eslint-disable-next-line react/prop-types
    } else if (allowedRoles && allowedRoles.length > 0 && !allowedRoles.includes(userDetails?.Role)) {
      navigate('/admindashboard');
    }
  }, [isLoggedIn, allowedRoles, userdetails, navigate]);

  return isLoggedIn ? children : null;
};

export default ProtectedRoute;
