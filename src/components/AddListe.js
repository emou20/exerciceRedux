import React, { Component } from 'react';
import {connect} from "react-redux";


class AddListe extends Component {
    state = {
        title: ""
        
    }

    handelChange = (event) => {
        const title2 = event.target.value;

        this.setState({
            title: title2,
        })
    }

    handleClick = () => {
        this.props.addPost(this.state.title)
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handelChange} />
                <br />
                <br />
                <button onClick={this.handleClick}>Enregistrer</button>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return { 
        addPost: (title) => {
            dispatch({type: "ADD_ARTICLE",title: title })
        }
    };
  };

export default connect(null, mapDispatchToProps)(AddListe);