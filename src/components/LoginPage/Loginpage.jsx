import { useNavigate } from "react-router-dom";
import Login from "../../shared/Components/Login/Login";
import { useState } from "react";
import { apilogin } from "../../shared/services/apiauthentication/apilogin";
import useAuth from "../../shared/services/store/useAuth";
import toast from "react-hot-toast";

export default function LoginPage() {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [formdata, setformdata] = useState({});
    const handlechange = (e) => setformdata({ ...formdata, [e.target.name]: e.target.value });

    const handlelogin = async (e) => {
        e.preventDefault();
        const res = await apilogin(formdata);
        if (res.message === "Successful login") {
            toast.success("Login successful");
            login(res.jwt);
            navigate('/admindashboard');
            
        } else {
            toast.error(res.message || "An error occurred");
        }
    };

    return (
        <>
            <Login
                handlechange={handlechange}
                handlelogin={handlelogin}
            />
        </>
    );
}
