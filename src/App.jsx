import { useState } from "react";
import "./App.css";
import Input, { InputWrap, OptionsWrap } from "./components/Input";
import styled from "styled-components";
import Button, { ButtonWrap } from "./components/Button";
import Table from "./components/Table";
function App() {
  const [country_List, setCountry_List] = useState(() => {
    const savedCountries = localStorage.getItem("countries");
    return savedCountries ? JSON.parse(savedCountries) : [];
  });
  const [country, setCountry] = useState({
    name: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });
  const resetCountry = () => {
    setCountry({ name: "", gold: 0, silver: 0, bronze: 0 });
  };
  // 국가 추가 함수
  const addCountries = () => {
    const haveCountry = country_List.some(
      (countries) => countries.name === country.name
    );
    if (haveCountry) {
      alert("이미 등록된 국가입니다.");
      resetCountry();
      return;
    } else if (country.gold < 0 || country.silver < 0 || country.bronze < 0) {
      alert("메달 수를 확인하세요 !");
      resetCountry();
      return;
    }
    setCountry_List([...country_List, country]);
    localStorage.setItem(
      "countries",
      JSON.stringify([...country_List, country])
    );
    resetCountry();
  };

  const updateCountry = () => {
    const haveCountry = country_List.some(
      (countries) => countries.name === country.name
    );
    if (!haveCountry) {
      alert("등록되지 않은 국가입니다.");
      resetCountry();
      return;
    } else if (country.gold < 0 || country.silver < 0 || country.bronze < 0) {
      alert("메달 수를 확인하세요 !");
      resetCountry();
      return;
    }
    const updatedCountries = country_List.map((countries) =>
      countries.name === country.name ? country : countries
    );
    setCountry_List([...updatedCountries]);
    const Local_countries = JSON.parse(localStorage.getItem("countries"));
    const update_LCountry = Local_countries.map((Lcountry) =>
      Lcountry.name === country.name ? country : Lcountry
    );
    localStorage.setItem("countries", JSON.stringify([...update_LCountry]));
    setCountry({ name: "", gold: 0, silver: 0, bronze: 0 });
  };

  const deleteCountry = (name) => {
    const filteredCountries = country_List.filter(
      (countries) => countries.name !== name
    );
    setCountry_List([...filteredCountries]);
    const Local_countries = JSON.parse(localStorage.getItem("countries"));
    const delete_LCountry = Local_countries.filter(
      (Lcountry) => Lcountry.name !== name
    );
    localStorage.setItem("countries", JSON.stringify([...delete_LCountry]));
  };

  const onInputChange = (e) => {
    const { name, value, type } = e.target;
    setCountry({
      ...country,
      [name]: type === "number" ? +value : value,
    });
  };

  return (
    <>
      <div
        style={{
          boxShadow: "0 4px 8px #0000001a",
          padding: "20px 20px 100px 20px",
        }}
      >
        <h1>2024 파리 올림픽</h1>
        <OptionsWrap>
          <InputWrap>
            <Input
              label="국가명" // label: PropTypes.string.isRequired,
              value={country.name} //   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
              name="name"
              type="text" // type: PropTypes.oneOf(["text", "number"]),
              onChangeFunc={onInputChange}
            />
          </InputWrap>
          <InputWrap>
            <Input
              label="금메달"
              value={country.gold}
              name="gold"
              type="number"
              onChangeFunc={onInputChange}
            />
          </InputWrap>
          <InputWrap>
            <Input
              label="은메달"
              value={country.silver}
              name="silver"
              type="number"
              onChangeFunc={onInputChange}
            />
          </InputWrap>
          <InputWrap>
            <Input
              label="동메달"
              value={country.bronze}
              name="bronze"
              type="number"
              onChangeFunc={onInputChange}
            />
          </InputWrap>
          <ButtonWrap>
            <Button text="국가추가" type="primary" onClickFunc={addCountries} />
            <Button
              text="업데이트"
              type="primary"
              onClickFunc={updateCountry}
            />
          </ButtonWrap>
        </OptionsWrap>
        <div>
          <h2>올림픽 국가 리스트</h2>
        </div>
        <Table
          removeFunc={deleteCountry}
          countryList={JSON.parse(localStorage.getItem("countries"))}
        />
      </div>
    </>
  );
}

export default App;
