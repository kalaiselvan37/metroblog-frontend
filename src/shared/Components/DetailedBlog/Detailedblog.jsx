/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Tooltip } from "@nextui-org/react";

const DetailedBlogpage = (props) => {

    const {post, handleEmailShare, handleFacebookShare, handleTwitterShare, handleWhatsappShare, prependBaseUrl, scrollToTop, nextPost} = props;


    return (
        <>
            <div className="lg:h-[300px] h-20 w-full bg-[url(/images/blogsTop.jpg)] bg-cover bg-no-repeat flex justify-center items-center relative">
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
                    <div className="text-xl font-medium">{new Date(post.created_date).toLocaleString()}</div>
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
                    <Link to={`/detailedblog/${nextPost.id}`} onClick={scrollToTop}>
                        <button className="text-xl font-semibold text-blue-500">Next blog &gt;&gt;</button>
                    </Link>
                </div>
            </div>
            <div className="fixed lg:top-[90%] lg:left-[95%] hidden md:block">
                <button onClick={scrollToTop}>
                    <img src="/images/scrolltotop.png" alt="" className="w-10 h-10" />
                </button>
            </div>
        </>
    );
};

export default DetailedBlogpage;
