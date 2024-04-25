import { useState, useEffect, useRef } from "react";
import { API_GET_DATA } from "../../global/constants.js";
import Edit from "./components/Edit";
import List from "./components/List";
import "./index.css";

async function fetchData(setData) {
  const res = await fetch(API_GET_DATA);
  const { data } = await res.json();
  setData(data);
}

async function fetchSetData(data) {
  await fetch(API_GET_DATA, {
    method: "PUT",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
}

const Home = () => {
  const [data, setData] = useState([]);
  const submittingDataStatus = useRef(false);

  useEffect(() => {
    if (!submittingDataStatus.current) return;
    fetchSetData(data).then((data) => (submittingDataStatus.current = false));
  }, [data]);

  useEffect(() => {
    fetchData(setData);
  }, []);

  return (
    <div className="app">
      <Edit add={setData} submittingDataStatus={submittingDataStatus} />
      <List
        listData={data}
        deleteData={setData}
        submittingDataStatus={submittingDataStatus}
      />
    </div>
  );
};
export default Home;
