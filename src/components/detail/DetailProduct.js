import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Moment from 'react-moment';
import Heading from "../layout/headings/Heading";
import StyledCard from '../layout/card/StyledCard';
import Paragraph from "../layout/headings/Paragraph";
import ErrorMessage from "../error/ErrorMessage";
import { BASE_URL } from "../../constants/api";
import { PAGE_PATH } from "../../constants/api";

const url = BASE_URL + PAGE_PATH ;
const urlDetail = url + "/"

const DetailProduct = () => {
  const { id } = useParams();
  const { data: product, error, isLoading } = useFetch(urlDetail + id);
 
  return ( 
<>
    <Heading title=" Detail product" />
      { isLoading && <Spinner animation="border" variant="success" />}
      { error && <ErrorMessage>{ error }</ErrorMessage> }
      { product && (
        <StyledCard>
        <h2>{ product.title.rendered }</h2>
        <Moment className="moment" format="DD MMMM YYYY">{product.date}</Moment>
        <Paragraph dangerouslySetInnerHTML={{ __html: product.content.rendered }} />
        </StyledCard>
      )}
</>
 
   );
}
 
export default DetailProduct;


