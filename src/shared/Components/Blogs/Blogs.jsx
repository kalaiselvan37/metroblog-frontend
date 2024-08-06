/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import apiurl from "../../../admin/shared/services/apiendpoint/apiendpoint";
import { Pagination } from "@nextui-org/react";

export default function Blogs( props ) {

    const {search, handleSearchChange, posts, trimTitle, trimContent, scrollToTop, totalPosts, pageSize, page, handlePageChange} = props;

    return (
        <div>
            <div className="lg:h-[300px] w-full bg-blue-500 flex justify-center items-center">
                <div className="my-5 lg:my-0">
                    <h1 className="text-3xl font-bold text-center text-white lg:text-5xl">Welcome to Metro Insurance Blogs!</h1>
                    <h1 className="py-4 font-semibold text-center text-white lg:text-xl">&ldquo;Welcome to Metro Insurance Blog - Your trusted source for expert insights, tips, and updates on all things insurance!&ldquo;</h1>
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
