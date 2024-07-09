import { useEffect, useState } from 'react';
import { getpost, getviewpost } from '../../services/apipost/apipost';
import { Modal, ModalBody, ModalContent, ModalHeader, Pagination, useDisclosure } from '@nextui-org/react';
import apiurl from '../../services/apiendpoint/apiendpoint';

export default function Dashboarddesign() {
    const [postCount, setPostCount] = useState(0);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPosts, setTotalPosts] = useState(0);
    const [selectedPost, setSelectedPost] = useState(null);
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const pageSize = 10;

    useEffect(() => {
        async function fetchPostCount() {
            const data = await getviewpost();
            if (data && Array.isArray(data)) {
                setPostCount(data.length);
            }
        }
        fetchPostCount();
    }, []);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postData = await getpost({ page, pageSize });
                setPosts(postData.posts);
                setTotalPosts(postData.totalPosts);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, [page]);

    const handlePageChange = (page) => {
        setPage(page);
    };

    const handleViewMore = (post) => {
        setSelectedPost(post);
        onOpen();
    };

    const prependBaseUrl = (htmlContent) => {
        const imgRegex = /<img.*?src="(\/uploads\/images\/.*?\.png)".*?>/g;
        const updatedContent = htmlContent?.replace(imgRegex, `<img src="${apiurl()}$1" />`);
        return updatedContent;
    };

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
                <div className="grid grid-cols-1 gap-4 mt-6 md:grid-cols-2 lg:grid-cols-4">
                    {posts.map((post) => (
                        <div key={post._id} className="overflow-hidden shadow-md rounded-2xl bg-slate-100">
                            <div className='p-3'>
                                 <img
                                src={`${apiurl()}${post.coverimage[0]}`}
                                alt={post.posttitle}
                                className="object-cover w-full h-40 rounded-2xl"
                            />
                            </div>
                           
                            <div className="p-4">
                                <h2 className="text-lg font-semibold">{post.posttitle}</h2>
                                <p className="text-slate-600">Created by {post.createdby}</p>
                            </div>
                            <div className='flex items-center justify-center p-2'>
                                <button className="button-70" role="button" onClick={() => handleViewMore(post)}>View More</button>
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
            {selectedPost && (
                <Modal isOpen={isOpen} onOpenChange={onOpenChange} size='4xl' scrollBehavior='inside' placement='center'>
                    <ModalContent>
                        {() => (
                            <>
                                <ModalHeader>{selectedPost.posttitle}</ModalHeader>
                                <ModalBody>
                                    {/* <img
                                        src={`${apiurl()}${selectedPost.coverimage[0]}`}
                                        alt={selectedPost.posttitle}
                                        className="object-cover w-full h-40 mb-4"
                                    /> */}
                                    <div dangerouslySetInnerHTML={{ __html: prependBaseUrl(selectedPost.content) }} />
                                    <p className="text-slate-600">Created by {selectedPost.createdby}</p>
                                    <p className="text-slate-600">Created at {new Date(selectedPost.createdAt).toLocaleString()}</p>
                                    <p className="text-slate-600">Updated at {new Date(selectedPost.updatedAt).toLocaleString()}</p>
                                </ModalBody>
                            </>
                        )}
                    </ModalContent>
                </Modal>
            )}
        </>
    );
}
