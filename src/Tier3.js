import React from 'react'
import { getReducedColor } from './randomColorGenerator.js'
// import { updateChildColors, updateColors } from './updateColor.js'


class Tier3 extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			color: this.props.color,
		}
	}

	componentWillReceiveProps(nextProps) {
      this.setState({
        color: getReducedColor(nextProps.color)
      })
	}

  render() {
	  return(
	  	<div className="tier3" onClick={this.props.handleChildClick} style={{backgroundColor: this.state.color, color: this.state.color}}></div>
	  )}

}
export default Tier3
