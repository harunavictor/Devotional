import React from "react";
// import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import axios from "axios";

const GetDevotion = ({ data }) => {
  var myStyle = {
    whiteSpace: "nowrap",
    width: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const removeData = async () => {
    axios
      .delete("https://api-moga-devotions.herokuapp.com/devotion/" + data.id)
      .then((result) => {
        window.location.reload();
        console.log(result);
      });
  };

  return (
    <div>
      <div className="row mb-2">
        <div className="col-md-8 ml-5">
          <div className="card ml-5" style={{ width: "30rem", Height: "5rem" }}>
            <div className="card-body">
              <h2>{data.title}</h2>
              <h6>{data.date}</h6>
              <p style={myStyle}>{data.messageBody}</p>
              <Link
                className="btn btn-primary"
                to={`/edit/${data.id}/${data.date}`}
              >
                Edit
              </Link>
              <Link
                className="btn btn-primary ml-1"
                to={`fullPage/${data.date}`}
              >
                Read
              </Link>

              <Button
                onClick={removeData}
                className="float-right"
                color="danger"
                style={{ boxShadow: "10px 10px 10px gray" }}
              >
                DELETE
              </Button>
              {/* <Button
                style={{ boxShadow: '10px 10px 10px gray'}}
                color="primary text-center"
               >Add Devotion</Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetDevotion;
