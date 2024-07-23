import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getpost } from "../../../admin/shared/services/apipost/apipost";
import apiurl from "../../../admin/shared/services/apiendpoint/apiendpoint";
import { Pagination } from "@nextui-org/react";

const MAX_TITLE_LENGTH = 40;
const MAX_PREVIEW_LINES = 5;
const MAX_PREVIEW_CHARS = 300;

export default function Blogs() {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [totalPosts, setTotalPosts] = useState(0);
    const pageSize = 10;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postData = await getpost({ page, pageSize, search, });
                setPosts(postData.posts);
                setTotalPosts(postData.totalPosts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, [page, search]);

    const trimTitle = (title) => {
        return title.length > MAX_TITLE_LENGTH ? title.substring(0, MAX_TITLE_LENGTH) + "..." : title;
    };

    const trimContent = (content) => {
        const plainText = content.replace(/<[^>]+>/g, '');
        const previewChars = plainText.slice(0, MAX_PREVIEW_CHARS);
        const previewLines = previewChars.split('\n').slice(0, MAX_PREVIEW_LINES).join('\n');
        return previewLines.length < previewChars.length ? previewLines + '...' : previewLines;
    };

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
        setPage(1);
    };

    const handlePageChange = (page) => {
        setPage(page);
    };
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <div className="h-[300px] w-full bg-blue-500 flex justify-center items-center">
                <div>
                    <h1 className="text-5xl font-bold text-center text-white">Welcome to Metro Insurance Blogs!</h1>
                    <h1 className="py-4 text-xl font-semibold text-center text-white">&ldquo;Welcome to Metro Insurance Blog - Your trusted source for expert insights, tips, and updates on all things insurance!&ldquo;</h1>
                </div>
            </div>
            <div className="flex items-center justify-center py-5">
                <div className="flex rounded-full shadow-md">
                    <input 
                        type="text" 
                        className="p-3 pl-5 bg-white border border-blue-400 rounded-l-full" 
                        placeholder="Search blog..." 
                        value={search} 
                        onChange={handleSearchChange} 
                    />
                    <div className="p-3 bg-white border border-blue-400 rounded-r-full">
                        <i className="text-gray-400 left-4 top-4 fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>
            </div>
            <div className="max-w-[100rem] mx-auto">
                <div className="grid grid-cols-1 gap-10 p-2 py-4 lg:grid-cols-2">
                    {posts?.map((post) => (
                        <div className="relative h-full transition-transform duration-300 ease-in-out rounded-lg lg:flex custom-shadow custom-scale" key={post._id}>
                            <div className="w-full" style={{ maxWidth: '800px', maxHeight: '600px', overflow: 'hidden' }}>
                                <img
                                     src={`${apiurl()}${post.coverimage}`}
                                    alt={post.posttitle}
                                    className="object-cover h-full rounded-l-lg"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div className="w-full bg-white rounded-r-lg">
                                <h1 className="p-3 font-semibold rounded-tr-lg border-b-1 truncate-title text-white bg-[#121D32] group-hover:text-white">
                                    {trimTitle(post.posttitle)}
                                </h1>
                                <p className="p-3 group-hover:text-white">{trimContent(post.content)}</p>
                                <div className="flex items-center justify-center py-2">
                                    <Link to={`/detailedblog/${post.id}`} className="p-2 text-blue-500 hover:text-[#024BA2] group-hover:text-white" onClick={scrollToTop}>Read this Article &gt;</Link>
                                </div>
                            </div>
                            <div className="absolute bottom-0 right-0 w-16 h-16 text-transparent  bg-[#024BA2] rounded-tl-full">
                            </div>
                        </div>
                    ))}
                    
                </div>
                <div className="flex items-center justify-center py-5">
                    <Pagination
                        showControls
                        total={Math.ceil(totalPosts / pageSize)}
                        initialPage={1}
                        page={page}
                        onChange={handlePageChange}
                    />
                </div>
            </div>
        </div>
    );
}
