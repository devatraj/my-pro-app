import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PostList from '../components/PostList';
import SearchBar from '../components/SearchBar';

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 16px 60px 16px;
  background: #f5f7fa;
  min-height: 100vh;
`;

const Feed = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
`;

const Homepage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts');
                const data = await response.json();
                setPosts(data.slice(0, 20));
            } catch (error) {
                console.error('Failed to fetch posts:', error);
                setPosts([]);
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.body.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Container>
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Feed>
                <PostList posts={filteredPosts} loading={loading} />
            </Feed>
        </Container>
    );
};

export default Homepage;