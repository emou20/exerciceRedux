import React, { Component } from 'react';
import { connect } from "react-redux";
class List extends Component {

    render() {
        const titres = this.props.ArticlesTitle;
        console.log("tt :", titres)
        return (
            <ul>
                {titres.map((el, index) => (
                <li key={index}>{el.title}</li>
                ))}
            </ul>   
        )
        
    }
}

/* const mapStateToProps = (state) => {
    const { statearticle }: state ;
    return { articles: state };
    
  }; */

  
function mapStateToProps(state) {
    return { ArticlesTitle: state.articles}
    
  }

export default connect(mapStateToProps)(List);