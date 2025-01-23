import { useState } from "react";
import "./App.css";

function App() {
  const [country_List, setcountry_List] = useState([]); // 국가 리스트
  const [country, setcountry] = useState({
    name: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  }); // 새로입력되는 1개의 국가가

  // 국가 추가 함수
  const addCountries = (e) => {
    e.preventDefault(); // 기본 동작 막기
    setcountry_List([...country_List, country]); // 새로운 국가 추가
    setcountry({
      name: "",
      gold: 0,
      silver: 0,
      bronze: 0,
    }); // input안에 기본세팅하기
  };

  const updateCountry = (e) => {
    e.preventDefault();
    const updateCountries = country_List.map((countries) => {
      if (countries.name === country.name) {
        return country;
      } else {
        return countries;
      }
    });

    setcountry_List([...updateCountries]);
    setcountry({
      name: "",
      gold: 0,
      silver: 0,
      bronze: 0,
    });
  };

  const deleteCountry = (name) => {
    const filteredCountries = country_List.filter((countries) => {
      return countries.name !== name;
    });
    setcountry_List([...filteredCountries]);
  };


  return (
    <>
      <h1>2024 파리올림픽</h1>
      <form onSubmit={addCountries}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <h3>국가명</h3>
            <input
              type="text"
              placeholder="국가명"
              value={country.name}
              onChange={(e) => {
                setcountry({ ...country, name: e.target.value });
              }}
            />
          </div>
          <div>
            <h3>금메달</h3>
            <input
              type="number"
              placeholder="금메달 수"
              value={country.gold}
              onChange={(e) =>
                setcountry({
                  ...country,
                  gold: parseInt(e.target.value, 10) || 0, // 입력되는 값을 10진수로 변환 , 정수변환(parseInt) ,NaN(falsy 값)이면 0
                })
              }
            />
          </div>
          <div>
            <h3>은메달</h3>
            <input
              type="number"
              placeholder="은메달 수"
              value={country.silver}
              onChange={(e) =>
                setcountry({
                  ...country,
                  silver: parseInt(e.target.value, 10) || 0,
                })
              }
            />
          </div>
          <div>
            <h3>동메달</h3>
            <input
              type="number"
              placeholder="동메달 수"
              value={country.bronze}
              onChange={(e) =>
                setcountry({
                  ...country,
                  bronze: parseInt(e.target.value, 10) || 0,
                })
              }
            />
          </div>
          <div>
            <button type="submit" onClick={addCountries}>
              국가 추가
            </button>
            <button type="submit" onClick={updateCountry}>
              업데이트
            </button>
          </div>
        </div>
      </form>

      <div>
        {" "}
        <h2>올림픽 국가 리스트</h2>
      </div>
      <table>
        <thead>
          <tr>
            <th>국가명</th>
            <th>금메달</th>
            <th>은메달</th>
            <th>동메달</th>
            <th>액션</th>
          </tr>
        </thead>
        <tbody>
          {country_List.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.gold}</td>
              <td>{item.silver}</td>
              <td>{item.bronze}</td>
              <td>
                <button
                  onClick={() => {
                    return deleteCountry(item.name);
                  }}
                >
                  삭제
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
