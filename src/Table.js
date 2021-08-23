import React from "react";
import "./Table.css";
import numeral from "numeral";

function Table({ countries }) {
  return (
    <div className="table">
      <table>
        <tbody>
          {countries.map((country, index) => (
            <tr key={index}>
              <td key={country.country}>{country.country}</td>
              <td key={country.countryInfo.iso2}>
                <strong>{numeral(country.cases).format("0,0")}</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;