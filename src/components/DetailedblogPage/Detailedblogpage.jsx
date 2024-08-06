import { useEffect, useState } from "react";
import Detailedblog from "../../shared/Components/DetailedBlog/Detailedblog";
import { getviewpost } from "../../admin/shared/services/apipost/apipost";
import { useParams } from "react-router-dom";
import apiurl from "../../admin/shared/services/apiendpoint/apiendpoint";

export default function DetailedBlogpage () {

    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [allPosts, setAllPosts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [nextPost, setNextPost] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsData = await getviewpost();
                const postData = postsData.find(p => p.id === parseInt(id));
                setPost(postData);
                setAllPosts(postsData);
                setCurrentIndex(postsData.findIndex(p => p.id === postData.id));
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
        if (!htmlContent) {
            console.log('HTML content is empty');
            return '';
        }
        const imgRegex = /<img.*?src="(\/Upload\/.*?\.png)".*?>/g;
        const updatedContent = htmlContent.replace(imgRegex, (match, p1) => {
            const newSrc = `${apiurl()}${p1}`;
            return match.replace(p1, newSrc);
        });
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
        const message = `I found this article interesting and wanted to share it with you: ${url}`;
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

    return(
       
        <Detailedblog 
            post={post}
            handleEmailShare={handleEmailShare}
            handleFacebookShare={handleFacebookShare}
            handleTwitterShare={handleTwitterShare}
            handleWhatsappShare={handleWhatsappShare}
            prependBaseUrl={prependBaseUrl}
            scrollToTop={scrollToTop}
            nextPost={nextPost}
        />
    )
}