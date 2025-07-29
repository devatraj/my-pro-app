import React from 'react';
import PostCard from './PostCard';

const PostList = ({ posts, loading }) => {
    if (loading) {
        return <h1>Loading posts...</h1>;
    }

    return (
        <>
            {posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))}
        </>
    );
};

export default PostList;