import React from "react"
import { Link } from "react-router-dom"

class Signin extends React.Component {
  render() {
    return (
      <>
        <div className="signin">Home</div>
        <Link to="/signin">Login</Link>
      </>
    )
  }
}

export default Signin
