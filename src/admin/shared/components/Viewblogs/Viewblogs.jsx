import { useEffect, useState } from 'react';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Button, Modal, ModalContent, ModalHeader, ModalBody, Input, ModalFooter, useDisclosure } from "@nextui-org/react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { deletepost, getviewpost, updatepost } from '../../services/apipost/apipost';
import toast from 'react-hot-toast';

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
                setPosts(postData);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    const handleEdit = (post) => {
        setEditingPost(post);
        setContent(post.content);
        setPostTitle(post.posttitle);
        setCreatedBy(post.createdby);
        setKeywords(post.keywords); 
        onEditOpen(true);
    };

    const handleDelete = async (postId) => {
        onDeleteOpen(true); 
        setEditingPost(postId);
    };

    const confirmDelete = async () => {
        try {
            await deletepost(editingPost);
            setPosts(posts.filter(post => post._id !== editingPost));
            toast.success("Post deleted sccessfully");
            onDeleteOpenChange();
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const handleSave = async () => {
        try {
            const cleanedKeywords = keywords.split(',').map(keyword => keyword.trim()).filter(keyword => keyword);
            const updatedPost = {
                content,
                posttitle,
                createdby,
                keywords: cleanedKeywords.join(', ') 
            };
            const updated = await updatepost(editingPost._id, updatedPost);
    
            if (updated && updated._id) {
                setPosts(posts.map(post => (post._id === updated._id ? updated : post)));
                toast.success("Post updated Sccessfully");
            } else {
                console.error('Updated post does not have _id:', updated);
            }
    
            onEditOpenChange();
        } catch (error) {
            console.error('Error updating post:', error);
        }
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
                    {posts.map((post) => (
                        <TableRow key={post._id}>
                            <TableCell>{post.createdby}</TableCell>
                            <TableCell>{post.posttitle}</TableCell>
                            <TableCell>{new Date(post.createdAt).toLocaleString()}</TableCell>
                            <TableCell>
                                <Button color='success' onClick={() => handleEdit(post)} className='mx-3'>Edit</Button>
                                <Button color='danger' onClick={() => handleDelete(post._id)}>Delete</Button>
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
                                <ReactQuill value={content} onChange={setContent} />
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
                    {(onClose) => (
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
