import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 700px;
  margin: 60px auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  padding: 40px 32px;
`;

const Title = styled.h1`
  margin-bottom: 24px;
  color: #222;
`;

const Body = styled.p`
  font-size: 1.15rem;
  color: #444;
`;

const PostDetailPage = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setPost(null);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [postId]);

  if (loading) return <Wrapper><h2>Loading...</h2></Wrapper>;
  if (!post) return <Wrapper><h2>Post not found.</h2></Wrapper>;

  return (
    <Wrapper>
      <Title>{post.title}</Title>
      <Body>{post.body}</Body>
    </Wrapper>
  );
};

export default PostDetailPage;