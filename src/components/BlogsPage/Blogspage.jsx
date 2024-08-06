import { useEffect, useState } from "react";
import Blogs from "../../shared/Components/Blogs/Blogs";
import { getpost } from "../../admin/shared/services/apipost/apipost";

const MAX_TITLE_LENGTH = 40;
const MAX_PREVIEW_LINES = 5;
const MAX_PREVIEW_CHARS = 300;

export default function BlogsPage() {

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

        <Blogs
            search={search}
            handleSearchChange={handleSearchChange}
            posts={posts}
            trimTitle={trimTitle}
            trimContent={trimContent}
            scrollToTop={scrollToTop}
            totalPosts={totalPosts}
            pageSize={pageSize}
            page={page}
            handlePageChange={handlePageChange}
        />

    )
}