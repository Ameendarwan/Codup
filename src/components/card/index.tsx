import styled from "styled-components";
import { ProductDetails } from "../../interfaces/findProduct";

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow-y: auto;
`;

const CardBox = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  background: #ffffff;
  border: 1px solid #e3e5e6;
  border-radius: 16px;
  padding: 24px;
  margin: 10px 0px;
  @media (max-width: 768px) {
    display: block;
  }
`;

const CardSection = styled.div`
  text-align: left;
  @media (max-width: 768px) {
    padding: 10px 0px;
  }
`;

const Heading = styled.span`
  display: table-cell;
  font-weight: 700;
  color: #090a0a;
  font-size: 12px;
`;
interface CardProps {
  products: ProductDetails[];
}

export default function Card({ products }: CardProps) {
  return (
    <Container>
      {products?.map((p: ProductDetails) => (
        <CardBox key={p.id}>
          <CardSection>
            <Heading>Product</Heading>
            <span>{`${p.brand}  ${p.model}`}</span>
          </CardSection>
          <CardSection>
            <Heading>Spec</Heading>
            <span>{`${p.capacity}GB / ${p.color}`}</span>
          </CardSection>
          <CardSection>
            <Heading>SKU</Heading>
            <span>{p.sku}</span>
          </CardSection>
          <CardSection>
            <Heading>Price</Heading>
            <span>$ {p.price}</span>
          </CardSection>
        </CardBox>
      ))}
    </Container>
  );
}
