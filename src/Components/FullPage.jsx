import React, { useState, useEffect } from "react";
import axios from "axios";
import OverlayComponent from "./CustomComponent/overlay";
import { Link} from "react-router-dom";

const FullPage = (props) => {
  const [data, setData] = useState({});
  const { date} = props.match.params;

  const [progress, setProgress] = useState(false);
  
  
  const getdata = async () => {
    setProgress(true);
    try {
      const { data } = await axios.get(
        "https://api-moga-devotions.herokuapp.com/devotion?date=" + date
      );
      console.log(data);
      setData(data[0]);
      setProgress(false);
    } catch (error) {}
  };

  useEffect(() => {
    getdata()
  }, []);


  console.log();
  return (
    <div>
      <div className="container ">
        {progress ? <OverlayComponent /> : null}
        <div className="row mt-5">
          <div className="col-md-8 mt-5 ml-5">
            <Link to="/ViewDevotion" className="btn btn-success mb-5 p-2">
            Back
            </Link>
            <h1>{data.title}</h1>
            <h3>{data.date}</h3>
            <p>{data.messageBody}</p>
            <h3 >Prayer</h3>
            <p className='FullpagePrayer'> <li>{data.prayer}</li></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullPage;
