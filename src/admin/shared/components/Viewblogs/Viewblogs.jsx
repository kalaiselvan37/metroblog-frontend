import { useEffect, useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Input } from "@nextui-org/react";
import SunEditor from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { deletepost, getviewpost, updatepost } from '../../services/apipost/apipost';
import toast from 'react-hot-toast';
import apiurl from '../../services/apiendpoint/apiendpoint';

const Viewblogs = () => {
    const [posts, setPosts] = useState([]);
    const [editingPost, setEditingPost] = useState(null);
    const [content, setContent] = useState('');
    const [posttitle, setPostTitle] = useState('');
    const [createdby, setCreatedBy] = useState('');
    const [keywords, setKeywords] = useState('');

    const { isOpen: isEditOpen, onOpen: onEditOpen, onOpenChange: onEditOpenChange } = useDisclosure();
    const { isOpen: isDeleteOpen, onOpen: onDeleteOpen, onOpenChange: onDeleteOpenChange } = useDisclosure();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postData = await getviewpost();
                const baseUrl = apiurl(); // Get the base URL dynamically
                const adjustedPostData = postData.map(post => {
                    // Adjust image URLs in post content
                    const adjustedContent = post.content.replace(/src="\/Upload\//g, `src="${baseUrl}/Upload/`);
                    return { ...post, content: adjustedContent };
                });
                setPosts(adjustedPostData);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
    
        fetchPosts();
    }, []);
    
    

    const handleEdit = (post) => {
        setEditingPost(post);
        const baseUrl = apiurl(); // Get the base URL dynamically
        const adjustedContent = post.content.replace(/src="\/Upload\//g, `src="${baseUrl}/Upload/`);
        setContent(adjustedContent);
        setPostTitle(post.posttitle);
        setCreatedBy(post.createdby);
        setKeywords(post.keywords);
        onEditOpen(true);
    };
    
    

    const handleDelete = (post) => {
        setEditingPost(post.id);
        onDeleteOpen(true); 
    };
    
    const confirmDelete = async () => {    
        try {
            await deletepost(editingPost);
            setPosts(prevPosts => prevPosts.filter(post => post.id !== editingPost));
            toast.success("Post deleted successfully");
            onDeleteOpenChange();
        } catch (error) {
            toast.error("Failed to delete post");
        }
    };
    
    const handleSave = async () => {
        const cleanedKeywords = keywords.split(',').map(keyword => keyword.trim()).filter(keyword => keyword);
        const updatedPost = {
            id: editingPost.id,
            content,
            posttitle,
            createdby,
            keywords: cleanedKeywords.join(', ')
        };
        const updated = await updatepost(editingPost.id, updatedPost);

        if (updated && updated.id) {
            setPosts(posts.map(post => (post.id === updated.id ? updated : post)));
            toast.success("Post updated successfully");
        } else {
            console.error('Updated post does not have id:', updated);
        }
        onEditOpenChange();
    };

    return (
        <div>
            <Table aria-label="Example static collection table">
                <TableHeader>
                    <TableColumn>Posted By</TableColumn>
                    <TableColumn>Title</TableColumn>
                    <TableColumn>Date & Time</TableColumn>
                    <TableColumn>Actions</TableColumn>
                </TableHeader>
                <TableBody>
                    {posts?.map((post) => (
                        <TableRow key={post.id}>
                            <TableCell>{post.createdby}</TableCell>
                            <TableCell>{post.posttitle}</TableCell>
                            <TableCell>{new Date(post.created_date).toLocaleString()}</TableCell>
                            <TableCell>
                                <Button color='success' onClick={() => handleEdit(post)} className='mx-3'>Edit</Button>
                                <Button color='danger' onClick={() => handleDelete(post)}>Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            <Modal isOpen={isEditOpen} onOpenChange={onEditOpenChange} size='4xl' scrollBehavior='inside' >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader><h3>Edit Post</h3></ModalHeader>
                            <ModalBody>
                                <Input label="Title" value={posttitle} onChange={(e) => setPostTitle(e.target.value)} fullWidth />
                                <Input label="Posted By" value={createdby} onChange={(e) => setCreatedBy(e.target.value)} fullWidth />
                                <Input label="Keywords" value={keywords} onChange={(e) => setKeywords(e.target.value)} fullWidth />
                                <SunEditor 
                                    setContents={content}
                                    onChange={setContent}
                                    setOptions={{
                                        buttonList: [
                                            ['undo', 'redo'],
                                            ['bold', 'italic', 'underline', 'strike'],
                                            ['font', 'fontSize', 'formatBlock'],
                                            ['paragraphStyle', 'blockquote'],
                                            ['fontColor', 'hiliteColor', 'textStyle'],
                                            ['removeFormat'],
                                            ['outdent', 'indent'],
                                            ['align', 'horizontalRule', 'list', 'lineHeight'],
                                            ['table', 'link', 'image', 'video', 'audio'],
                                            ['fullScreen', 'showBlocks', 'codeView', 'preview', 'print'],
                                            ['save']
                                        ],
                                    }}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onClick={onClose}>Cancel</Button>
                                <Button color='primary' auto onClick={handleSave}>Save</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <Modal isOpen={isDeleteOpen} onOpenChange={onDeleteOpenChange}>
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader><h3>Delete Post</h3></ModalHeader>
                            <ModalBody>
                                <p>Are you sure you want to delete this post?</p>
                            </ModalBody>
                            <ModalFooter>
                                <Button auto color="danger" variant="light" onClick={onDeleteOpenChange}>Cancel</Button>
                                <Button auto color="danger" onClick={confirmDelete}>Delete</Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
};

export default Viewblogs;
