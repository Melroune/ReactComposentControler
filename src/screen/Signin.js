import React from "react"
import { Link } from "react-router-dom"

import Form from "../components/Form"

class Signin extends React.Component {
  render() {
    return (
      <>
        <div className="signin">
          <Form />
          <br />
          <Link to="/">Home</Link>
        </div>
      </>
    )
  }
}

export default Signin
