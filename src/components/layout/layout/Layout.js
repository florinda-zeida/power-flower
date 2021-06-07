import Container from 'react-bootstrap/Container';
import styled from "styled-components";

const Layout = styled(Container)`
max-width: 1100px;
min-height: 100vh;
padding: 0px;
padding-top: 70px;
margin: 0px auto;
background:${({ theme }) => theme.colors.lightGrey}; 
`;

export default Layout;