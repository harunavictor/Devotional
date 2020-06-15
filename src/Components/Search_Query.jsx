import { TextField, FormGroup, Input } from "@material-ui/core";
import { Label } from "reactstrap";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import Drawer from "./Drawer";

import React from "react";

const Search_Query = (props) => {
  return (
    <>
      <Drawer>
        <div className="container">
          <div className="row ml-3">
            <div className="col-md-8 ml-5">
              <form>
                <FormGroup className="mt-1 ">
                  <div className="mt-3 ml-1">
                    <div className="ml-2">
                      <Label for="date">
                        <strong> Devotion date</strong>
                      </Label>
                      <Input
                        type="date"
                        name="date"
                        id="date"
                        className="form-control "
                      />
                    </div>
                  </div>
                </FormGroup>
                <Button
                  type="submit"
                  className="form-control ml-1"
                  color="success"
                >
                  View Devotion
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="ml-0">
          <div className="container-fluid mt-5 ml-4">
            <div className="card ml-5" style={{ width: "60rem" }}>
              <div className="card-header text-center">
                <div>
                  {" "}
                  <h3 className="text-primary">Title:</h3>
                </div>
                <div>
                  {" "}
                  <h3>
                    {" "}
                    <strong>Date:</strong>
                  </h3>
                </div>
              </div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Accusantium eos corporis delectus dignissimos nobis
                      necessitatibus placeat id impedit nesciunt tempore
                      pariatur porro quo vero fugiat quasi, reprehenderit
                      deserunt modi tenetur?
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Search_Query;
