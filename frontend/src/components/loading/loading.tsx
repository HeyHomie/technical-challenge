import React from 'react';
import { FaGithub } from 'react-icons/fa';
import './loading.styled.css';

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <FaGithub size={100} />
      <p>loading...</p>
    </div>
  );
};

export default Loading;
