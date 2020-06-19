import React, { useState, useEffect } from "react";
import Drawer from "./Drawer";
import { Button, Label, Input, FormGroup } from "reactstrap";
import OverlayComponent from "./CustomComponent/overlay";
import axios from "axios";
import GetDevotion from "./GetDevotion";
import moment from "moment";

function ViewDevotion() {
  const [data, setData] = useState([]);
  const [searchDate, setSearchdate] = useState();

  const [progress, setProgress] = useState(false);
  useEffect(() => {
    getdata();
  }, []);

  //Get a single Devotion by date
  const getdata = async () => {
    let e = new Date();
    e = e.toLocaleDateString("en-GB");
    e = e.split('/');
    const [d, m, y] = e
    const g =  y + '-' + m + '-' + d
    let h = moment(g).locale("en").format("DD-MM-YYYY");  
    setProgress(true);
    try {
      const { data } = await axios.get(
        "https://api-moga-devotions.herokuapp.com/devotion?date=" + h
      );
      // console.log(data)
      setData(data);
      setProgress(false);
    } catch (error) {}
  };

  const getSingleData = async () => {
    makeRequest();
  };

  const makeRequest = async () => {
    console.log(searchDate);
    var d = moment(searchDate).locale("en").format("DD-MM-YYYY");

    setProgress(true);
    try {
      const { data } = await axios.get(
        "https://api-moga-devotions.herokuapp.com/devotion?date=" + d
      );
      console.log(data);
      setData(data);
      setProgress(false);
    } catch (error) {}
  };

  return (
    <div>
      <Drawer>
        <div className="container">
          <div className="row">
            <div className="col-md-6"></div>
            <div className="col-md-8 bodydev">
              <div className="centeringDiv">
                {progress ? <OverlayComponent /> : null}
                <h1 className="text-center font-itallics text-secondary">
                  View All Devotions
                </h1>
                <FormGroup className="mt-1 ">
                  <Label for="date">
                    <strong > Search by Date</strong>
                  </Label>
                  <Input
                    onChange={(event) => setSearchdate(event.target.value)}
                    type="date"
                    name="date"
                    id="date"
                    className="form-control "
                  />
                </FormGroup>
                <Button
                  onClick={getSingleData}
                  className="form-control ml-1"
                  color="success"
                >
                  View Devotion
                </Button>
              </div>
              {/* getAll devotion component */}
              {data.map((res) => (
                <GetDevotion data={res} key={res.id} />
              ))}
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default ViewDevotion;
