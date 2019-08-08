import React from "react"
import { graphql, StaticQuery } from 'gatsby'


class index extends React.Component {

 queryPages =()=> (
      <StaticQuery query={ graphql` {
            allWordpressPage{
              edges{
                node{
                  title
                  id
                  content
                  link
                }
              }
            }
          }`}  />
    )

    currentPage = (key) =>{
      return this.props.data.allWordpressPage.edges[key].node;
    }

   render() {

    const pages = Object.keys(this.props.data.allWordpressPage.edges);

    return (
      <div>
      {pages.map(key =>(
        <div key={key} index={key} data={this.props.data.allWordpressPage.edges[key].node}>
          <h1>{this.currentPage(key).title}</h1>
          <div dangerouslySetInnerHTML={{__html: this.currentPage(key).content}} />
        </div>
       ))}
      </div>

    );
  }
}
export default index;
