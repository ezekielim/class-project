import React, { Component } from "react";
import { Link } from "react-router-dom";
import community from "./community";

class CreateProject extends Component {
  state = {};
  render() {
    return (
      <div class="page-content">
        <div class="form-v10-content">
          <form class="form-detail" action="#" method="post" id="myform">
            <div class="form-left">
              <h2>Create a community project</h2>
              <div class="form-row">
                <select name="title">
                  <option class="option" value="title">
                    project type
                  </option>
                  <option class="option" value="businessman">
                    Technology
                  </option>
                  <option class="option" value="reporter">
                    Science
                  </option>
                  <option class="option" value="secretary">
                    Volunteer/Social
                  </option>
                </select>
                <span class="select-btn">
                  <i class="zmdi zmdi-chevron-down"></i>
                </span>
              </div>
              <div class="form-group">
                <div class="form-row form-row-1">
                  <input
                    type="text"
                    name="first_name"
                    id="first_name"
                    class="input-text"
                    placeholder="First Name"
                    required
                  ></input>
                </div>
                <div class="form-row form-row-2">
                  <input
                    type="text"
                    name="last_name"
                    id="last_name"
                    class="input-text"
                    placeholder="Last Name"
                    required
                  ></input>
                </div>
              </div>
              <div class="form-row">
                <select name="position">
                  <option value="position">Position</option>
                  <option value="director">Co-ordinator</option>
                  <option value="manager">PR</option>
                  <option value="employee">Recruiter</option>
                </select>
                <span class="select-btn">
                  <i class="zmdi zmdi-chevron-down"></i>
                </span>
              </div>
              <div class="form-row">
                <input
                  type="text"
                  name="company"
                  class="company"
                  id="company"
                  placeholder="Organization"
                  required
                ></input>
              </div>
              <div class="form-group"></div>
            </div>
            <div class="form-right">
              <h2>A bit more details</h2>
              <div class="form-row">
                <input
                  type="text"
                  name="street"
                  class="street"
                  id="street"
                  placeholder="Short Description"
                  required
                ></input>
              </div>
              <div class="form-row">
                <input
                  type="text"
                  name="additional"
                  class="additional"
                  id="additional"
                  placeholder="Additional Information"
                  required
                ></input>
              </div>
              <div class="form-group"></div>
              <div class="form-row">
                <select name="country">
                  <option value="country">Country</option>
                  <option value="Canada">Canada</option>
                  <option value="United States">United States</option>
                  <option value="UK">UK</option>
                </select>
                <span class="select-btn">
                  <i class="zmdi zmdi-chevron-down"></i>
                </span>
              </div>
              <div class="form-group">
                <div class="form-row form-row-2">
                  <input
                    type="text"
                    name="phone"
                    class="phone"
                    id="phone"
                    placeholder="Phone Number"
                    required
                  ></input>
                </div>
              </div>
              <div class="form-row">
                <input
                  type="text"
                  name="your_email"
                  id="your_email"
                  class="input-text"
                  required
                  pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                  placeholder="Your Email"
                ></input>
              </div>
              <div class="form-checkbox">
                <label class="container">
                  <p>
                    I do accept the{" "}
                    <a href="#" class="text">
                      Terms and Conditions
                    </a>{" "}
                    of your site.
                  </p>
                  <input type="checkbox" name="checkbox"></input>
                  <span class="checkmark"></span>
                </label>
              </div>
              <Link to="Community">
                <div class="form-row-last">
                  <input
                    type="submit"
                    name="register"
                    class="register"
                    value="Create Project"
                  ></input>
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateProject;
