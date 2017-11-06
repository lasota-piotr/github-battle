import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledParagraph = styled.p`
  font-size: 28px;
  font-weight: bold;
  padding-top: 5rem;
  
  animation: 2s linear infinite alternate loading;
  @keyframes loading {
    0%  { transform: translate(0, 0);    }
    25% { transform: translate(3%, -2%); }
    75% { transform: translate(5%, 5%);  }
    10% { transform: translate(-4%, 0);  }
  }
`;

const Loading = ({ children }) => (
  <StyledParagraph>
    {children}
  </StyledParagraph>
);

Loading.propTypes = {
  children: PropTypes.node,
};

Loading.defaultProps = {
  children: '🚀',
};

export default Loading;
