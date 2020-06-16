import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Drawer from "./Drawer";
import axios from "axios";
import moment from "moment";
import OverlayComponent from "./CustomComponent/overlay";
import Alert from "@material-ui/lab/Alert";

const EditDevotion = (props) => {
  const { id, date } = props.match.params;
  const [data, setData] = useState({});
  const [title, setTitle] = useState("");

  const [message, setMessage] = useState("");
  const [prayers, setPrayers] = useState("");

  const [save, setSave] = useState(false);
  const [progress, setProgress] = useState(false);

  const [formattedDate, setformatteddate] = useState(
    moment().locale("en").format("YYYY-MM-DD")
  );

  const checkAction = () => {
    if (id) {
      getdata();
      console.log("update ", id, date);
    } else {
      console.log("add");
    }
  };

  // formateed value
  const handleChange = (e) => {

    setformatteddate(e.target.value);
  };

  //update devotion here
  const toUpdate = async () => {
    setProgress(true);
    try {
      var date = await axios.put(
        "https://api-moga-devotions.herokuapp.com/devotion/" + id,
        { title: title, date: date, messageBody: message }
      );
      console.log(title, date, message);
      setProgress(false);
      setSave(true);
      console.log(data);
    } catch (error) {

      console.log();
      
    }
  };

  useEffect(() => {
    checkAction();
  }, []);

  const getdata = async () => {
    try {
      const { data } = await axios.get(
        "https://api-moga-devotions.herokuapp.com/devotion?date=" + date
      );
      console.log(data);
      setData(data[0]);
      setTitle(data[0].title);
      setMessage(data[0].messageBody);
      setPrayers(data[0].prayer);
    } catch (error) {
      console.log(error);
    }
    //converting the date format to suit that of the backend
    let a = date;
    a = a.split("-");
    const [d, m, y] = a;
    console.log(d, m, y);
    setformatteddate(y + "-" + m + "-" + d);
  };

  const summitDevotion = async (e) => {
    e.preventDefault();
    toUpdate();
    console.log(formattedDate);
    console.log(title, message);
  };

  return (
    <div className="container">
      {progress ? <OverlayComponent /> : null}
      <div className="row">
        <div className="col-md-10">
          <Drawer>
            <Form onSubmit={summitDevotion}>
              <FormGroup>
                <Label for="title">
                  <strong>Title</strong>
                </Label>
                <Input
                  onChange={(event) => setTitle(event.target.value)}
                  value={title}
                  type="text"
                  name="text"
                  id="title"
                  placeholder="Enter devotion title..."
                />
              </FormGroup>

              <FormGroup>
                <Label for="date">
                  <strong> Devotion date</strong>
                </Label>
                <Input
                  value={formattedDate}
                  onChange={handleChange}
                  type="date"
                  name="date"
                  id="date"
                />
              </FormGroup>
              <FormGroup>
                <Label for="prayer">
                  <strong>Prayer</strong>
                </Label>
                <Input
                  readOnly
                  onChange={(e) => setPrayers(e.target.value)}
                  value={data.prayer}
                  type="textarea"
                  rows="4"
                  cols="10"
                  name="text"
                  id="prayer"
                  placeholder="Enter devotion prayer..."
                />
              </FormGroup>
              <FormGroup>
                <Label for="meassage">
                  <strong>Message Body</strong>
                </Label>
                <Input
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  type="textarea"
                  rows="10"
                  cols="50"
                  name="text"
                  id="meassage"
                  placeholder="Enter devotion message..."
                />
              </FormGroup>
              {save ? (
                <div className="mb-2">
                  <Alert Alert severity="success" color="info">
                    You data was saved successfully
                  </Alert>
                </div>
              ) : (
                <div></div>
              )}
              <Button color="warning">
                {date !== null ? "Edit Devotion" : "Add Devotion"}
              </Button>
            </Form>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default EditDevotion;
