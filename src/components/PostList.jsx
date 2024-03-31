import NewPost from './NewPost.jsx';
import Modal from "./Modal.jsx";
import classes from "./PostList.module.css";
import {useState} from "react";
import Post from "./Post.jsx";

function PostList({isPosting, onStopPosting}) {
    const [posts, setPosts] = useState([]);
    return (
        <>
            {isPosting && (<Modal onClose={onStopPosting}>
                <NewPost onCancel={onStopPosting}
                         onAddPost={(post) => {
                             setPosts((prevPosts) => {
                                 return [...prevPosts, post]
                             })
                             onStopPosting()
                         }}
                />
            </Modal>)
            }

            {posts.length > 0 && <ul className={classes.posts}>
                {posts.map((post, index) => (
                    <Post key={index} author={post.author} body={post.body}/>
                ))}
            </ul>}
            {
                posts.length === 0 && <div style={{textAlign: 'center', color: 'white'}}>
                    <h2>No posts found</h2>
                    <p>Start adding some!</p>
                </div>
            }


        </>
    );
}

export default PostList;
