import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import SearchInput from "../../components/Search";
import Card from "../../components/card";

const MainContainer = styled.div`
  position: relative;
  text-align: center;
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
  margin-top: 20px;
`;

const FindProduct = () => {
  const [products, setProducts] = useState([]);
  const [searchValue, setSearchValue] = useState();
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    axios
      .get(`https://62d7f6869088313935880018.mockapi.io/api/v1/catalogue`)
      .then((res: any) => {
        setProducts(res.data);
      });
  }, []);

  const handleChange = (e: any) => {
    let val = e.target.value.toLowerCase();
    if (!val) {
      setFiltered([]);
    } else {
      let result: any = products?.filter((p: any) => {
        if (
          p.model.toLowerCase().includes(val) ||
          p.brand.toLowerCase().includes(val) ||
          p.sku.toLowerCase().includes(val)
        )
          return p;
      });
      setFiltered(result);
    }
    setSearchValue(e.target.value);
  };

  return (
    <MainContainer>
      <FirstHeading>Find a</FirstHeading> <SecondHeading>product</SecondHeading>
      <ContainerSearch>
        <SearchInput handleChange={handleChange} searchValue={searchValue} />
      </ContainerSearch>
      <Card products={filtered} />
    </MainContainer>
  );
};
export default FindProduct;
