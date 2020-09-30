import React, {Component} from 'react';

class MenuButton extends Component {
    constructor(props){
      super(props);
      this.state={
        open: this.props.open? this.props.open:false,
      }
    }
  
    componentWillReceiveProps(nextProps){
      if(nextProps.open !== this.state.open){
        this.setState({open:nextProps.open});
      }
    }
    
    handleClick(){
    this.setState({open:!this.state.open});
    }
    
    render(){
      return(
        <div className="menuButton-container" 
          onClick={this.props.onClick ? this.props.onClick: ()=> {this.handleClick();}}>
          <div className={(this.state.open?"menuButton-lineTop-open":"menuButton-lineTop-close") + " menuButton-line"}/>
          <div className={(this.state.open?"menuButton-lineMiddle-open":"menuButton-lineMiddle-close") + " menuButton-line"}/>
          <div className={(this.state.open?"menuButton-lineBottom-open":"menuButton-lineBottom-close") + " menuButton-line"}/>
        </div>
      )
    }
  }

export default MenuButton;