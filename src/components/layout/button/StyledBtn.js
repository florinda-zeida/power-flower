
import styled from 'styled-components';

const StyledBtn = styled.button`
    width: 300px;
    height: 40px;
    padding: 20px auto;
    margin: 10px auto;
    text-align: center;
    border: none;
    color: white;
    font-weight: 300;
    
    background: ${({ theme }) => theme.colors.green};
    &:hover {
        background: ${({ theme }) => theme.colors.darkGreen};
    }
`

export default StyledBtn;