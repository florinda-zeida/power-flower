import styled from "styled-components";

const StyledCard = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction:column;
  justify-content: space-around;
  padding: 20px 20px;
  margin: 20px auto;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.darkGrey};
`;

export default StyledCard;