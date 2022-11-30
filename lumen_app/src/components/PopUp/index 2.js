import React from "react";
import "./PopUp.css";
import { useState, useEffect } from "react";
import WebFont from "webfontloader";

/** The PopUp Component contains a form that allows the user to add a resource to the database. It has an add button and a close button. It is triggered when the user clicks on 'Add a resource' button (see AddAndSearchDisplay ln-59)
 * 
 * @param {boolean} trigger - This is a state variable is used in conditional rendering of the popup.
 * @param {func} setTrigger - This is the function used to set the value of trigger to true. (The default value is set to false)

 * @returns Conditionally returns the PopUp component.
 */

function PopUp({
  trigger,
  handleClick,
  handleSubmit,
  submit,
  resource,
  handleChange,
}) {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Big Shoulders Display", "Open Sans"],
      },
    });
  }, []);

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="popup-btn" onClick={handleClick}>
          Close
        </button>
        {submit === true && (
          <p id="success-message">You have successfully added a resource.</p>
        )}
        <div className="form">
          <form onSubmit={handleSubmit}>
            <label>Title</label>

            <div className="details_form">
              <input
                className="title"
                type="text"
                required
                value={resource.title}
                onChange={handleChange}
                name="title"
              />
              <br></br>
              <br></br>

              <label> URL </label>
              <input
                className="URL"
                type="text"
                required
                value={resource.url}
                onChange={handleChange}
                name="url"
              />
              <br></br>
              <br></br>
              <label>Language</label>
              <select
                className="language"
                id="languages"
                name="language"
                required
                value={resource.language}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Select your option
                </option>
                <option value="JavaScript">Javascript</option>
                <option value="HTML">HTML</option>
                <option value="CSS">CSS</option>
                <option value="SQL">SQL</option>
                <option value="ReactJS">ReactJS</option>
                <option value="NodeJS">NodeJS</option>
                <option value="N/A">n/a</option>
                <option value="Other">Other</option>
              </select>
              <br></br>
              <br></br>
              <label> Category </label>
              <select
                id="category"
                name="category"
                value={resource.category}
                onChange={handleChange}
              >
                <option value="" disabled selected>
                  Select your option
                </option>
                <option value={1}>Game</option>
                <option value={2}>Workshop</option>
                <option value={3}>Video</option>
                <option value={4}>Blog/Forum</option>
                <option value={5}>Eli5</option>
                <option value={6}>Offical Docs</option>
                <option value={7}>Other</option>
              </select>
              <br></br>
              <br></br>
              <label>Description</label>
              <textarea
                id="description"
                required
                value={resource.description}
                onChange={handleChange}
                name="description"
              ></textarea>
            </div>
            <button className="popup-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUp;