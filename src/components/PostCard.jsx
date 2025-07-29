import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card = styled(Link)`
  display: block;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  width: 350px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  overflow: hidden;
  background: #fff;
  margin: 0 auto;
  text-decoration: none;
  color: inherit;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 20px rgba(0,0,0,0.13);
  }
`;

const Content = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  margin: 0 0 10px 0;
  font-size: 1.3rem;
  color: #222;
`;

const Message = styled.p`
  margin: 0 0 18px 0;
  color: #555;
`;

const PostCard = ({ post }) => (
  <Card to={`/posts/${post.id}`}>
    <Content>
      <Title>{post.title}</Title>
      <Message>{post.body}</Message>
    </Content>
  </Card>
);

export default PostCard;