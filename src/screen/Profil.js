import React, { Component } from 'react'

class Profil extends Component {
  state = {
    character: {},
  }
  render() {
    console.log(this.props.match.params.id)
    return (
      <div>
        fr
      </div>
    )
  }
}

export default Profil
