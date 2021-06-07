import { Link } from "react-router-dom";
import StyledBtn from "../layout/button/StyledBtn";
import StyledCard from '../layout/card/StyledCard';
import Paragraph from '../layout/headings/Paragraph';

const ProductsList = ({ product }) => {
  return (
    <>
      {product.map(product => (
        <StyledCard key={product.id} >
       
          <h2 className="h2">{ product.title.rendered }</h2>
          <Paragraph dangerouslySetInnerHTML={{ __html: product.content.rendered }} />
        
          <Link to={ `/detail/${product.id}`}><StyledBtn className="btn">View more</StyledBtn></Link>
        </StyledCard>
      ))}
    </>
  
  );
}
 
export default ProductsList;