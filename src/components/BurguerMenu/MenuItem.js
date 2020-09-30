import React, {Component} from 'react';

class MenuItem extends Component{
    constructor(props){
      super(props);
      this.state = {
        hover:false,
      }
    }
    handleHover(){
      this.setState({hover:!this.state.hover});
    }
    render(){
      return(
        <div className="menuitem-container">
          <div className="menuitem" 
            onMouseEnter={()=>{this.handleHover();}} 
            onMouseLeave={()=>{this.handleHover();}}
            onClick={this.props.onClick}>
            {this.props.children}  
          </div>
        <div className="menuitem-line" />
      </div>  
      )
    }
  }
  
  export default MenuItem;