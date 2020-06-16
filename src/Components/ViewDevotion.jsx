import React, { useState, useEffect } from "react";
import Drawer from "./Drawer";
import { Button,Label,Input,FormGroup } from "reactstrap";
import OverlayComponent from "./CustomComponent/overlay";
import axios from 'axios'
import GetDevotion from "./GetDevotion";
import moment from "moment";

function ViewDevotion() {
  const [data, setData] = useState([]);
 const [searchDate, setSearchdate] = useState();

  const [progress, setProgress] = useState(false);
  useEffect(() => {
    getdata()
  }, []);

  const getdata = async () => {
    setProgress(true)
    try {
      const {data} = await axios.get("https://api-moga-devotions.herokuapp.com/devotion")
      console.log(data)
      setData(data)
      setProgress(false)
    } catch (error) {
      
    }
  }
  
  const getSingleData = async() => {
   
    makeRequest()
     
    
  }

  const makeRequest = async () => {
    console.log(searchDate)
    var d = moment(searchDate).locale("en").format("DD-MM-YYYY");
  
    
    
    
    
    setProgress(true)
     try {
      const {data} = await axios.get("https://api-moga-devotions.herokuapp.com/devotion?date="+d)
      console.log(data)
      setData(data)
      setProgress(false)
    } catch (error) {
      
    }
  }

  return (
    <div>
      <Drawer>
        <div className="container">
          {progress ? <OverlayComponent /> : null}
          <h1 className="text-center font-itallics text-secondary">
            View All Devotions
              </h1>
          
         {/* search by date  forminput*/}
          <div className="container mb-4">
          <div className="row ml-3">
            <div className="col-md-8 ml-5">
            
                <FormGroup className="mt-1 ">
                  <div className="mt-3 ml-1">
                    <div className="ml-2">
                      <Label for="date">
                        <strong> Search by Date</strong>
                      </Label>
                      <Input
                      
                          onChange={(event) => setSearchdate(event.target.value)}
                        type="date"
                        name="date"
                        id="date"
                        className="form-control "
                      />
                    </div>
                  </div>
                </FormGroup>
                  <Button
                    onClick={getSingleData}
                   
                 
                  className="form-control ml-1"
                  color="success"
                >
                  View Devotion
                </Button>
            
            </div>
            </div>
          </div>
          
              {/* getAll devotion component */}
          {data.map(res => (
           
            <GetDevotion data={res} key={res.id}
            />
         ))}
        </div>
      </Drawer>
    </div>
  );
}

export default ViewDevotion;
