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
        setTimeout(() => {
            setPosts([
                {
                    id: 1,
                    title: 'First Post',
                    image: 'https://via.placeholder.com/150',
                    message: 'This is the first post.',
                    sender: 'Alice',
                    recipient: 'Bob'
                },
                {
                    id: 2,
                    title: 'Second Post',
                    image: 'https://via.placeholder.com/150',
                    message: 'This is the second post.',
                    sender: 'Charlie',
                    recipient: 'Dave'
                },
                {
                    id: 3,
                    title: 'Third Post',
                    image: 'https://via.placeholder.com/150',
                    message: 'This is the third post.',
                    sender: 'Eve',
                    recipient: 'Frank'
                },
            ]);
            setLoading(false);
        }, 2000);
    }, []);

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.recipient.toLowerCase().includes(searchTerm.toLowerCase())
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