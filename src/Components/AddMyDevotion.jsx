import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Alert from "@material-ui/lab/Alert";
import Drawer from "./Drawer";
import OverlayComponent from "./CustomComponent/overlay";
import axios from "axios";
import moment from "moment";
import { Link} from "react-router-dom";



const AddMyDevotion = () => {
  const [devotion, setDevotion] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [prayer, setPrayer] = useState("");
  const [save, setSave] = useState(false);
  const [saveErr, setSaveErr] = useState(false);
  const [progress, setProgress] = useState(false);
  const[isDisabled,setIsDisabled]=useState(false)

  
  const summitDevotion = (e) => {
    e.preventDefault();
    var d = moment(date).locale("en").format("DD-MM-YYYY");

    console.log(title, devotion, d, prayer);
    if (title !== "" && prayer !== "" && devotion !== "" && date !== "") {
      setIsDisabled(true)
      setProgress(true)
      
       axios.post(
        "https://api-moga-devotions.herokuapp.com/devotion", {
        title: title,
        date: d,
        messageBody: devotion,
        prayer: prayer,
      }
    ).then((result) => {
      setProgress(false)
      setSave(true)
      setSaveErr(false)

      console.log(result);
    }).catch(er => {
      console.log(er);
      setIsDisabled(false)
      setSaveErr(true)
    });
     } else {
       setSaveErr(true)
    }
    
  };
  
  
  return (

    <div>
      {progress? <OverlayComponent/>: null}
      <div className="container">
       
      <div className="row ">
          <div className="col-md-10 ">
            <Drawer>
              <Link to="/ViewDevotion" className="btn btn-success mb-3 mr-2">
              Back
            </Link>
            <Form className="mt-2" onSubmit={summitDevotion}>
              <FormGroup>
                <Label for="title">
                  <strong>Title</strong>
                </Label>
                <Input
                  type="text"
                  value={title}
                  onChange={(event) => setTitle(event.target.value)}
                  name="text"
                  id="title"
                  placeholder="Enter devotion title..."
                />
              </FormGroup>
              {/* <CircularProgress color="secondary" /> */}
              <FormGroup>
                <Label for="date">
                  <strong> Devotion date</strong>
                </Label>
                <Input
                  type="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  name="date"
                  id="date"
                />
              </FormGroup>
              <FormGroup>
                <Label for="prayer">
                  <strong>Prayer</strong>
                </Label>
                <Input
                  type="textarea"
                  rows="3"
                  cols="50"
                  name="text"
                  id="prayer"
                  value={prayer}
                  onChange={(event) => setPrayer(event.target.value)}
                  placeholder="Prayer..."
                />
              </FormGroup>
              <FormGroup>
                <Label for="meassage">
                  <strong>Message Body</strong>
                </Label>
                <Input
                  type="textarea"
                  rows="5"
                  cols="50"
                  name="text"
                  id="meassage"
                  value={devotion}
                  onChange={(event) => setDevotion(event.target.value)}
                  placeholder="Enter devotion message..."
                />
              </FormGroup>
                {save && (
                  <div className='mb-2'>
                    <Alert Alert severity="success" color="info">
                      You data was saved successfully
                </Alert>
                  </div>
                )}
              { saveErr &&   (
                <div className="mb-2">
                   <Alert Alert severity="danger" color="info">
                  failed to save.
                </Alert>    
                </div>
              )}

              <Button
                style={{ boxShadow: '10px 10px 10px gray'}}
                color="primary text-center"
                className="form-control" disabled={isDisabled}>Add Devotion</Button>
            </Form>
          </Drawer>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AddMyDevotion;

