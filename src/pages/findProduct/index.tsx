import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import SearchInput from "../../components/Search";
import Card from "../../components/card";
import { ProductDetails } from "../../interfaces/findProduct";
import alertIcon from "../../assets/alert.svg";

const MainContainer = styled.div`
  position: relative;
  text-align: center;
  margin-top: 30px;
`;
const InsideContainer = styled.div`
  position: relative;
  width: 80%;
  margin: auto;
`;
const FirstHeading = styled.span`
  font-size: 48px;
  font-weight: 700;
  color: #090a0a;
`;
const SecondHeading = styled.span`
  font-size: 48px;
  font-weight: 700;
  color: #6b4eff;
`;
const ContainerSearch = styled.div`
  position: relative;
  margin-top: 25px;
  display: flex;
  justify-content: center;
`;
const TipContainer = styled.div`
  position: relative;
  margin-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TipBox = styled.div`
  position: relative;
  padding: 8px 16px 8px 16px;
  background: #c9f0ff;
  color: #0065d0;
  border-radius: 8px;
`;
const TipMessage = styled.span`
  font-size: 14px;
  font-weight: 400;
  padding-left: 15px;
`;
const NoMatchContainer = styled.div`
  position: relative;
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: start;
  background: #f7f9fa;
  border-radius: 16px;
  padding: 16px 40px 16px 40px;
`;
const NoMatchIcon = styled.img`
  position: relative;
`;

const NoMatchTextContainer = styled.span`
  position: relative;
  text-align: left;
  padding-left: 20px;
`;
const NoMatchText = styled.span`
  font-size: 18px;
  font-weight: 700;
`;
const NoMatchText2 = styled.span`
  font-size: 16px;
  font-weight: 400;
  display: block;
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

const FindProduct = () => {
  const [products, setProducts] = useState<ProductDetails[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const [filtered, setFiltered] = useState<ProductDetails[]>([]);
  const [focus, setFocus] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`https://62d7f6869088313935880018.mockapi.io/api/v1/catalogue`)
      .then((res: any) => {
        setProducts(res.data);
      });
  }, []);

  useEffect(() => {
    if (!searchValue) setFiltered([]);
  }, [searchValue]);

  const handleChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    let val = value.toLowerCase();
    if (!val) {
      setFiltered([]);
    } else {
      let result: ProductDetails[] = products?.filter((p: ProductDetails) => {
        if (
          p.model.toLowerCase().includes(val) ||
          p.brand.toLowerCase().includes(val) ||
          p.sku.toLowerCase().includes(val)
        )
          return p;
      });
      setFiltered(result);
    }
    setSearchValue(value);
  };

  return (
    <MainContainer>
      <FirstHeading>Find a</FirstHeading> <SecondHeading>product</SecondHeading>
      <InsideContainer>
        <ContainerSearch>
          <SearchInput
            handleChange={handleChange}
            searchValue={searchValue}
            setFocus={setFocus}
            focus={focus}
            setSearchValue={setSearchValue}
          />
        </ContainerSearch>
        {filtered.length === 0 && searchValue && (
          <NoMatchContainer>
            <NoMatchIcon src={alertIcon} alt="alert" />
            <NoMatchTextContainer>
              <NoMatchText>{`No matches found for “${searchValue}”`}</NoMatchText>
              <NoMatchText2>
                Please try searching for something else.
              </NoMatchText2>
            </NoMatchTextContainer>
          </NoMatchContainer>
        )}

        <TipContainer>
          <TipBox>Tip</TipBox>
          <TipMessage>
            You can search by product brand, model, or SKU
          </TipMessage>
        </TipContainer>
      </InsideContainer>
      {filtered.length > 0 && (
        <Suggestion>{filtered.length} Suggestions</Suggestion>
      )}
      <Card products={filtered} />
    </MainContainer>
  );
};
export default FindProduct;
