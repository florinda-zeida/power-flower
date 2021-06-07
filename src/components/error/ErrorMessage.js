import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledErrorMessage = styled.div`
    color: ${({ theme }) => theme.colors.error};
    font-weight: 300;
`;

function ErrorMessage({ children }) {
    return (
        <StyledErrorMessage>{children}</StyledErrorMessage>
    );
}

ErrorMessage.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ErrorMessage;
