import axios from "axios";
import apiurl from "../../../../admin/shared/services/apiendpoint/apiendpoint";
import { gettoken } from "../../../../shared/services/token/token";



export const savepost = async (formData) => {
    try {
        const token = await gettoken();
        const res = await axios.post(`${apiurl()}/api/uploadblog`, formData, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return res.data;
    } catch (err) {
        console.error('Error creating Post data', err);
        throw err;
    }
};


export const getpost = async ({ page, pageSize, search }) => {
    try {
        const token = await gettoken();
        const res = await axios.get(`${apiurl()}/api/getallblogs`, {
            params: { page, pageSize, search },
            headers: {
                "Authorization": `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return res.data;
    } catch (err) {
        console.error('Error fetching Post data:', err);
        throw err;
    }
};


export const getviewpost = async (formdata) => {
    try {
        const token = await gettoken();
        const res = await axios.get(`${apiurl()}/api/getviewblog`, formdata, {
            headers: { 
                "Authorization": `Bearer ${token}`, 
                'Content-Type': 'multipart/form-data',
            }
        });
        return res.data;
    } catch (err) {
        console.error('Error creating Post data', err);
    }
}


export const getpostbyid = async (id) => {
    try {
        const token = await gettoken();
        const res = await axios.get(`${apiurl()}/api/getblogbyid/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return res.data;
    } catch (err) {
        console.error('Error Getting Post data:', err);
        throw err;
    }
};



export const updatepost = async (id, updatedPost) => {
  
        const token = await gettoken();
        const res = await axios.put(`${apiurl()}/api/editblog/${id}`, updatedPost, {
            headers: {
                "Authorization": `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        console.log("Response data:", res.data); 
        return res.data;
};



export const deletepost = async (id) => {
   
        const token = await gettoken();
        const res = await axios.delete(`${apiurl()}/api/deleteblog/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            data: { id }
        });
        return res.data;
};


