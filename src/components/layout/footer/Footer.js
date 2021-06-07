import styled from 'styled-components';

const Footer = styled.footer`
    height: auto;
    color: white;
    text-align: center;
    font-size: 15px;
    font-weight: 200;
    background: ${({ theme }) => theme.colors.darkGreen};
    padding: 10px;
    bottom:0;
   
`;

export default Footer;