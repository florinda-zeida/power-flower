import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const ContainerForm = styled(Container)`
max-width: 700px;
margin: 0px auto;
padding: 60px 20px 20px 20px;
border-radius: 5px;
margin-bottom: 20px;
background: ${({ theme }) => theme.colors.darkGrey};
`

export default ContainerForm;