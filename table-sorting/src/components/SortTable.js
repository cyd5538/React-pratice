import React, { useState } from "react";
import MockData from "../MOCK_DATA.json";

const SortTable = () => {
  const [data, setData] = useState(MockData);
  const [order, setOrder] = useState("ASC");

  const sorting = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setData(sorted);
      setOrder("ASC");
    }
  };
  const sortingNumber = (col) => {
    if (order === "ASC") {
      const sorted = [...data].sort((a, b) => b[col] - a[col]);
      setData(sorted);
      setOrder("DSC");
    }
    if (order === "DSC") {
      const sorted = [...data].sort((a, b) => a[col] - b[col]);
      setData(sorted);
      setOrder("ASC");
    }
  };


  return (
    <>
      <table>
        <thead>
          <th onClick={() => sorting("first_name")}>First Name</th>
          <th onClick={() => sortingNumber("id")}>ID</th>
          <th onClick={() => sorting("last_name")}>Last Name</th>
          <th onClick={() => sorting("email")}>Email</th>
          <th onClick={() => sorting("gender")}>Gender</th>
        </thead>
        <tbody>
          {data.map((d) => (
            <tr key={d.id}>
              <td>{d.first_name}</td>
              <td>{d.id}</td>
              <td>{d.last_name}</td>
              <td>{d.email}</td>
              <td>{d.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SortTable;
