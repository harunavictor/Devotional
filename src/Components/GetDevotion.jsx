import React from "react";
// import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import axios from "axios";
import Modals from './Modals'

const GetDevotion = ({ data }) => {
  var myStyle = {
    whiteSpace: "nowrap",
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
 // modal states
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const removeData = async () => {
    axios
      .delete("https://api-moga-devotions.herokuapp.com/devotion/" + data.id)
      .then((result) => {
        window.location.reload();
        // console.log(result);
      });
  };

  return (
    <>
      <Modals
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        handleOpen={handleOpen}
       removeData={removeData}
      />
      <div className="row mb-2">
        <div className="col-md-6">
          <div className="card" style={{ width: "30rem", Height: "5rem" }}>
            <div className="card-body">
              <h2>{data.title}</h2>
              <h6>{data.date}</h6>
              <p style={myStyle}>{data.messageBody}</p>
              <Link
                className="btn btn-success"
                to={`/edit/${data.id}/${data.date}`}
              >
                Edit
              </Link>
              <Link
                className="btn btn-success ml-1"
                to={`fullPage/${data.date}`}
              >
                Read
              </Link> 

              <Button
                onClick={handleOpen}
                className="float-right"
                color="danger"
                style={{ boxShadow: "10px 10px 10px gray" }}
              >
                Delete
              </Button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetDevotion;
