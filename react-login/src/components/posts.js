import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts } from "../store/posts";
import SignIn from "./SignIn";

const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.list);

    useEffect(() => {
        dispatch(loadPosts());
    }, [dispatch]);

    return (
        <div>
            
            <ul>
                {Posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;
