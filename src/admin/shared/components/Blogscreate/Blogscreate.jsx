import { useState } from 'react';
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { savepost } from '../../../shared/services/apipost/apipost';
import toast from 'react-hot-toast';

const Blogscreate = () => {
    const [editorContent, setEditorContent] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [postTitle, setPostTitle] = useState('');
    const [coverImage, setCoverImage] = useState('');
    const [keywords, setKeywords] = useState('');

    const handleCoverImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setCoverImage(reader.result);
        };
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleCreatePost = async () => {
        try {
            const formData = {
                content: editorContent,
                createdby: createdBy,
                posttitle: postTitle,
                coverimage: coverImage,
                keywords: keywords,
            };
            const response = await savepost(formData);
            console.log('Post saved successfully:', response);
            toast.success("Post saved successfully");
            // window.location.reload();
        } catch (error) {
            console.error('Error saving post:', error);
        }
    };

    return (
        <div>
            <div className="p-3 text-xl font-semibold text-white bg-pink-500 rounded-full shadow-lg w-fit">
                Create a new post</div>
            <div className="flex gap-3 py-5">
                <div>
                    <h1 className='font-semibold'>Post Title :</h1>
                    <div className="py-2">
                        <input
                            type="text"
                            className="p-3 bg-gray-100 rounded-lg "
                            required
                            placeholder="Enter Post title"
                            value={postTitle}
                            onChange={(e) => setPostTitle(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <h1 className='font-semibold'>Cover Image : <span className='text-sm font-normal'>(Size: 800px * 600px)</span></h1>
                    <div className="py-2">
                        <input
                            type="file"
                            className="p-3 bg-gray-100 rounded-lg"
                            required
                            onChange={handleCoverImageChange}
                        />
                    </div>
                </div>
                <div>
                    <h1 className='font-semibold'>Keywords : <span className='text-sm font-normal'>(Eg: Word,Word,..)</span></h1>
                    <div className="py-2">
                        <input
                            type="text"
                            className="p-3 bg-gray-100 rounded-lg"
                            placeholder='Enter Keywords'
                            required
                            onChange={(e) =>setKeywords(e.target.value)}
                        />
                    </div>
                </div>
                <div>
                    <h1 className='font-semibold'>Created By :</h1>
                    <div className="py-2">
                        <input
                            type="text"
                            className="p-3 bg-gray-100 rounded-lg"
                            required
                            placeholder="Enter your name"
                            value={createdBy}
                            onChange={(e) => setCreatedBy(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <SunEditor
                setContents={editorContent}
                onChange={setEditorContent}
                setOptions={{
                    buttonList: [
                        ['undo', 'redo', 'font', 'fontSize', 'formatBlock'],
                        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'removeFormat'],
                        ['fontColor', 'hiliteColor', 'textStyle'],
                        ['align', 'list', 'lineHeight'],
                        ['outdent', 'indent'],
                        ['table', 'link', 'image', 'video'],
                        ['fullScreen', 'showBlocks', 'codeView'],
                        ['preview', 'print']
                    ]
                }}
                height="350px"
            />
            <div className="mt-4">
                <button
                    className="p-3 text-white bg-orange-500 rounded-lg"
                    onClick={handleCreatePost}
                >
                    Submit
                </button>
            </div>
        </div>
    );
};

export default Blogscreate;
