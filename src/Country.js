import React, { useEffect, useState } from "react";
import axios from "axios";
const Country = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const getData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("https://restcountries.com/v3.1/all");
      console.log(response);
      setCountryData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {isLoading ? (
        "Loading..."
      ) : (
        <div className="main-container">
          {countryData.map((item) => {
            return (
              <div className="container">
                <div className="img">
                  <img src={item.flags.png} alt="country-flag-image" />
                </div>
                <p>{item.name.common}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Country;
