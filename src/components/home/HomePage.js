
import ProductsList from "../home/ProductsList";
import useFetch from "../../hooks/useFetch";
import { BASE_URL } from "../../constants/api";
import { PAGE_PATH } from "../../constants/api";
import Heading from "../layout/headings/Heading";
import CardGroup from '../layout/card/CardGroup';
import Spinner from "react-bootstrap/Spinner";

import ErrorMessage from "../error/ErrorMessage";

const urlProducts = BASE_URL + PAGE_PATH;

const Home = () => {
  const { error, isLoading, data: product } =  useFetch(urlProducts)
  
  return (
    <>
    <Heading title=" Welcome to Power Flower" />
    <CardGroup>
      { error && <ErrorMessage>{ error }</ErrorMessage> }
      { isLoading && <Spinner animation="border" variant="success" /> }
      {product && <ProductsList product={product} />}
    </CardGroup>
    </>
  );
}
 
export default Home;