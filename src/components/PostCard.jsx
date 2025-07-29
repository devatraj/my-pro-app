import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  width: 350px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
  overflow: hidden;
  background: #fff;
  margin: 0 auto;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 20px rgba(0,0,0,0.13);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
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


const PostCard = ({ post }) => {
    const { title, body } = post;
    return (
        <Card>
            <Content>
                <Title>{title}</Title>
                <Message>{body}</Message>
            </Content>
        </Card>
    );
};

export default PostCard;