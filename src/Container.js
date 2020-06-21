import React, {Component} from 'react'
import Box from './Box'
import { findByLabelText } from '@testing-library/react'
class Container extends Component{
static defaultProps={colorsArray:['Red','Blue','Green','Orange','Yellow','Violet','Purple','Brown','Cyan','Pink','Indigo','#34495E','#000066','#00FFCC','#C39BD3','#1B4F72','#CACFD2','#1B4F72','#0000FF','#145A32','#17202A','#F1C40F','#2980B9','#C0392B','#48C9B0 ','#CCD1D1']}
constructor(props){
super(props)
this.handleClick=this.handleClick.bind(this)
this.state={
    mycolor:this.randomArray()
}
}

randomArray(){
    var myarray=[];
    for(var i=0;i<16;i++){
myarray.push(this.generateRandom())

    }
    return myarray
}

generateRandom(){
    
   return this.props.colorsArray[Math.floor(Math.random()*this.props.colorsArray.length)]
}
handleClick(e){
  var selection=e.target.id;
      this.setState(curstate=>{
        
        var newArray=[...curstate.mycolor]
var oldColor=newArray[selection]
var newColor=this.generateRandom()
while(oldColor===newColor){
    newColor=this.generateRandom()
}
        newArray[selection]=newColor
             
        return ({mycolor:newArray})
    })
}

render(){
   var boxes=[];
   for(var i=0;i<this.state.mycolor.length;i++){
    boxes.push(<Box color={this.state.mycolor[i]} id={i} key={i}/>)
   }
    return(
        <div className='Container' onClick={this.handleClick} style={{display:'flex',flexWrap:'wrap',height:'100%' }}>
            {boxes.map(x=>x)}           
          
             </div>
    )
}
}
export default Container
