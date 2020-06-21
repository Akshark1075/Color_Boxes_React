import React, {Component} from 'react'
import './Box.css'
class Box extends Component{
render(){
    return(
        <div className='Box' id={this.props.id}style={{background:this.props.color}}></div>
    )
}
}
export default Box;