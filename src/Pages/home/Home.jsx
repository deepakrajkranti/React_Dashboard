import React, { useState } from "react";
import "./home.scss";
import Sidebar from "../../Component/sidebar/Sidebar";
import Navbar from "../../Component/navbar/Navbar";
import Widgets from "../../Component/widget/Widget";
import Featured from "../../Component/featured/Featured";
import Chart from "../../Component/chart/Chart";
import Table from "../../Component/table/Table";
import Form from "../form/Form";

const Home = () => {
  const [openpop, setopenpop] = useState(true);
  const handleclick=()=>{
    setopenpop(!openpop);
  }
  return (
    <div className="home">
      <Sidebar handleclick={handleclick} />
      <div className="homecontainer">
      <Navbar />
        {
        openpop ?
        <>
        {/* <Navbar /> */}
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transaction</div>
          <Table />
        </div>
        </> : 
        <>
         <Form />
        </>
}
      </div>
    </div>
  );
};

export default Home;
