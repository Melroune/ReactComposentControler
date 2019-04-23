import React, { Component } from "react"
import DisplayProfil from "../components/DisplayProfil"
class Profil extends Component {
  render() {
    console.log(this.props.match.params.id)
    return (
      <div>
        <DisplayProfil id={this.props.match.params.id} />
      </div>
    )
  }
}

export default Profil
