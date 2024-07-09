import { useEffect, useState } from 'react';
import { getviewpost } from '../../services/apipost/apipost';


export default function Dashboarddesign() {
    const [postCount, setPostCount] = useState(0);

    useEffect(() => {
        async function fetchPostCount() {
            const data = await getviewpost();
            if (data && Array.isArray(data)) {
                setPostCount(data.length);
            }
        }
        fetchPostCount();
    }, []);

    return (
        <>
        <div className="grid grid-cols-1 lg:grid-cols-4">
            <div className="relative p-5 overflow-hidden text-white bg-fuchsia-500 rounded-2xl" style={{
                boxShadow: 'inset 0 4px 6px rgba(0, 0, 0, 0.1), inset 0 -4px 6px rgba(0, 0, 0, 0.1)', 
                background: 'linear-gradient(145deg, #FF55A5, #D9006A)',
            }}>
                <h1 className="text-xl font-bold">No of posts</h1>
                <div>{postCount}</div>
            </div>
        </div>
        <div className='py-10'>
            <h1 className='text-xl font-semibold'>Blogs in Our Website</h1>

        </div>
        </>
    );
}
