import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import apiurl from "../../../admin/shared/services/apiendpoint/apiendpoint";
import { getpostbyid, getviewpost } from "../../../admin/shared/services/apipost/apipost";
import { Tooltip } from "@nextui-org/react";

const DetailedBlogpage = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [allPosts, setAllPosts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [nextPost, setNextPost] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postData = await getpostbyid(id);
                const postsData = await getviewpost();
                setPost(postData);
                setAllPosts(postsData);
                setCurrentIndex(postsData.findIndex(p => p._id === postData._id));
                setIsLoading(false);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, [id]);

    useEffect(() => {
        const getNextPost = () => {
            if (!post || allPosts.length === 0) return null;
            const nextIndex = (currentIndex + 1) % allPosts.length;
            return allPosts[nextIndex];
        };

        setNextPost(getNextPost());
    }, [post, currentIndex, allPosts]);

    const prependBaseUrl = (htmlContent) => {
        const imgRegex = /<img.*?src="(\/uploads\/images\/.*?\.png)".*?>/g;
        const updatedContent = htmlContent?.replace(imgRegex, `<img src="${apiurl()}$1" />`);
        return updatedContent;
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (isLoading || !post || allPosts.length === 0 || !nextPost) {
        return <div className="flex items-center justify-center h-screen"><img src="/images/777.gif" alt="" /></div>;
    }

    const handleWhatsappShare = () => {
        const url = window.location.href;
        const message = `Check out this article: ${url}`;
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        const whatsappUrl = isMobile
            ? `whatsapp://send?text=${encodeURIComponent(message)}`
            : `https://web.whatsapp.com/send?text=${encodeURIComponent(message)}`;

        window.open(whatsappUrl, '_blank');
    };

    const handleFacebookShare = () => {
        const url = window.location.href;
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        window.open(facebookShareUrl, '_blank', 'width=600,height=400');
    };

    const handleTwitterShare = () => {
        const url = window.location.href;
        const message = `Check out this article: ${url}`;
        const twitterShareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(message)}`;
        window.open(twitterShareUrl, '_blank', 'width=600,height=400');
    };

    const handleEmailShare = () => {
        const url = window.location.href;
        const subject = 'Check out this article';
        const body = `I found this article interesting and wanted to share it with you: ${url}`;
        const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoUrl, '_self');
    };

    return (
        <>
            <div className="h-[300px] w-full bg-[url(/images/blogsTop.jpg)] bg-cover bg-no-repeat flex justify-center items-center relative">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <h1 className="z-10 text-5xl font-bold text-center text-white">Blogs</h1>
            </div>
            <div className="max-w-[55rem] mx-auto py-5">
                <h1 className="lg:text-4xl text-2xl font-bold text-[#024BA2] p-2">{post.posttitle}</h1>
                <div className="justify-between p-2 text-xl lg:flex">
                    <div className="flex gap-3 font-medium">
                        <h1 className="">Post by:</h1>
                        <div className="">{post.createdby}</div>
                    </div>
                    <div className="text-xl font-medium">{new Date(post.createdAt).toLocaleString()}</div>
                </div>
                <div className="flex p-2 text-xl">
                    <div className="flex gap-2">
                        <Tooltip showArrow={true} content="Share to Whatsapp" color="primary" placement="bottom">
                            <div className="p-2 text-xl font-medium rounded-lg cursor-pointer bg-slate-200 hover:bg-slate-300" onClick={handleWhatsappShare}><i className="fa-brands fa-whatsapp" ></i></div>
                        </Tooltip>
                        <Tooltip showArrow={true} content="Share to Facebook" color="primary" placement="bottom">
                            <div className="p-2 text-xl font-medium rounded-lg cursor-pointer bg-slate-200 hover:bg-slate-300" onClick={handleFacebookShare}><i className="fa-brands fa-facebook"></i></div>
                        </Tooltip>
                        <Tooltip showArrow={true} content="Share to Twitter" color="primary" placement="bottom">
                            <div className="p-2 text-xl font-medium rounded-lg cursor-pointer bg-slate-200 hover:bg-slate-300" onClick={handleTwitterShare}><i className="fa-brands fa-square-x-twitter"></i></div>
                        </Tooltip>
                        <Tooltip showArrow={true} content="Share to Mail" color="primary" placement="bottom">
                            <div className="p-2 text-xl font-medium rounded-lg cursor-pointer bg-slate-200 hover:bg-slate-300" onClick={handleEmailShare}><i className="fa-solid fa-envelope"></i></div>
                        </Tooltip>
                    </div>
                </div>
                <div className="p-2 text-lg" dangerouslySetInnerHTML={{ __html: prependBaseUrl(post.content) }} />
                <div className="flex p-2 text-xl">
                    <h1 className="mr-3 border-r-4 border-blue-500"></h1>
                    <h1 className="font-semibold ">Keywords :</h1>
                    <div className="mx-4 font-semibold">{post.keywords}</div>
                </div>
                <div className="flex justify-between py-5">
                    <Link to="/blogs">
                        <button className="p-3 text-white bg-black rounded-full">Back to blogs</button>
                    </Link>
                    <Link to={`/detailedblog/${nextPost._id}`} onClick={scrollToTop}>
                        <button className="text-xl font-semibold text-blue-500">Next blog &gt;&gt;</button>
                    </Link>
                </div>
            </div>
            <div className="fixed top-[90%] left-[95%]">
                <button onClick={scrollToTop}>
                    <img src="/images/scrolltotop.png" alt="" className="w-10 h-10" />
                </button>
            </div>
        </>
    );
};

export default DetailedBlogpage;
