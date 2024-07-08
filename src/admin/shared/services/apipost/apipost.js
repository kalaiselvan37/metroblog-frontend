import axios from "axios";

import apiurl from "../../../../admin/shared/services/apiendpoint/apiendpoint";
import { gettoken } from "../../../../shared/services/token/token";



export const savepost = async (formdata) => {
    try {
        const token = await gettoken();
        const res = await axios.post(`${apiurl()}/post/createpost`, formdata, { headers: { "Authorization": `Bearer${token}`, 'Content-Type': 'multipart/form-data', } })
        return res.data
    } catch (err) {
        console.error('Error creating Post data')
    }
}

export const getpost = async ({ page, pageSize, search }) => {
    try {
        const token = await gettoken();
        const res = await axios.get(`${apiurl()}/post/getblogspost`, {
            params: { page, pageSize, search },
            headers: { "Authorization": `Bearer ${token}`, 'Content-Type': 'application/json' }
        });
        return res.data;
    } catch (err) {
        console.error('Error fetching Post data:', err);
    }
};

export const getviewpost = async (formdata) => {
    try {
        const token = await gettoken();
        const res = await axios.get(`${apiurl()}/post/getviewblogpost`, formdata, { headers: { "Authorization": `Bearer${token}`, 'Content-Type': 'multipart/form-data', } })
        return res.data
    } catch (err) {
        console.error('Error creating Post data')
    }
}

export const getpostbyid = async (id) => {
    try {
        const token = await gettoken();
        const res = await axios.get(`${apiurl()}/post/getblogpostbyid/${id}`, {headers: { "Authorization": `Bearer${token}`}})
        return res.data
    } catch (err) {
        console.error('Error Getting Post data')
    }
}

export const updatepost = async (id, updatedPost) => {
    try {
        const token = await gettoken();
        const res = await axios.put(`${apiurl()}/post/updatepost/${id}`, updatedPost, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return res.data;
    } catch (err) {
        console.error('Error updating post data', err);
    }
};



export const deletepost = async (id) => {
    try {
        const token = await gettoken();
        const res = await axios.delete(`${apiurl()}/post/deletepost/${id}`, {headers: { "Authorization": `Bearer${token}`}})
        return res.data
    } catch (err) {
        console.error('Error Getting Post data')
    }
}