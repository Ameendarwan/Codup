import styled from "styled-components";

const CardBox = styled.div`
  background: #ffffff;
  border: 1px solid #e3e5e6;
  border-radius: 16px;
  display: block;
  margin: 10px 0px;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  overflow-y: auto;
`;

const CardSection = styled.div`
  display: table-cell;
  padding: 10px 40px;
`;

const Heading = styled.span`
  display: table-cell;
  font-weight: 700;
  color: #090a0a;
  font-size: 12px;
`;

const Suggestion = styled.span`
  display: block;
  text-align: left;
  font-weight: 700;
  color: #090a0a;
  font-size: 18px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export default function Card({ products }: any) {
  return (
    <div>
      <Suggestion>{products.length} Suggestions</Suggestion>

      <Container>
        {products?.map((p: any) => (
          <CardBox key={p.id}>
            <CardSection>
              <Heading>Product</Heading>
              <span>{`${p.brand}  ${p.model}`}</span>
            </CardSection>
            <CardSection>
              <Heading>Spec</Heading>
              <span>{`${p.capacity}GB/${p.color}`}</span>
            </CardSection>
            <CardSection>
              <Heading>SKU</Heading>
              <span>{p.sku}</span>
            </CardSection>
            <CardSection>
              <Heading>Price</Heading>
              <span>{p.price}</span>
            </CardSection>
          </CardBox>
        ))}
      </Container>
    </div>
  );
}
