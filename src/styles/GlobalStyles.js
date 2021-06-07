import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

body{
  max-width: 1100px;
  margin: 0px auto;
  padding:0px;
  height: auto;
  background: rgb(216, 216, 216); 
}

*,
  *:after,
  *:before {
      margin: 0;
      box-sizing: border-box;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      font-family: "Poppins";
      color: rgb(41, 40, 40);
  }

.btn{
    padding: 5px 25px;
    margin: 5px 5px;
    text-align: center;
    border: none;
    background: ${({ theme }) => theme.colors.darkGreen};
    color:white;

    &:hover {
        background: ${({ theme }) => theme.colors.hoverGreen};
        color:white;
}
}

.logg{
  background: #F2A341;
  &:hover {
    background: #b0742c;
    
}
}

.navbar{
  max-width: 1100px;
  margin: 0px auto;
  padding: 10px 15px;
  background: ${({ theme }) => theme.colors.green};
  border-bottom: 1px dashed white;
}
 
.navbar-collapse{
  border-top: 1px dashed white;
  text-align: center;
  font-size:18px;
  padding-top:10px;
}
.navbar-toggler{
  border: none;
}

@media only screen and (min-width:993px) {
  .navbar-collapse{
   border-top:none;
}
}

.brand{
  font-family: 'Dancing Script', cursive;
  font-size: 30px;
  letter-spacing: 2px;
}

.h2{
  font-size: 26px;
  font-weight: 500;
}

.moment{
  color: #125b23;
}
`

export default GlobalStyle;
