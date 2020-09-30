import React, {Component} from 'react';

class Menu extends Component {
    constructor(props){
      super(props);
      this.state = {
        open: this.props.open? this.props.open:false,
      }
    }
      
    componentWillReceiveProps(nextProps){
      if(nextProps.open !== this.state.open){
        this.setState({open:nextProps.open});
      }
    }
    
    render(){
      return (
        <div className="menu-container">
          {
            this.state.open?
              <div className="menu-list">
                {this.props.children}
              </div>:null
          }
        </div>
      )
    }
  }

  export default Menu;
  