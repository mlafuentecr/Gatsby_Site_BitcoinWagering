import React from "react"
import { StaticQuery, graphql } from "gatsby"


//239 is the index page where I get the logo info
const footerQuery = graphql`{

  allWordpressAcfPages(filter: {wordpress_id: {eq: 239}}) {
    edges {
      node {
        acf {
          col1
          col2
          col3
          col4
          col5
          col6
        }
      }
    }
  }
}
`;
const acfMedia = (props) => {
  return props.allWordpressAcfPages.edges[0].node.acf;
}

const footer =  () => (
  <StaticQuery
    query={footerQuery}
    render={props => (

<div className="row footer">

  <div className=" justify-content-end cat justify-content-center align-items-center px-2 col-lg-2">
    <p dangerouslySetInnerHTML={{__html: acfMedia(props).col1 }}/>
  </div>

  <div className=" justify-content-end cat justify-content-center align-items-center px-2 col-lg-2">
  <p dangerouslySetInnerHTML={{__html: acfMedia(props).col2 }}/>
  </div>


  <div className=" justify-content-end cat justify-content-center align-items-center px-2 col-lg-2">
  <p dangerouslySetInnerHTML={{__html: acfMedia(props).col3 }}/>
  </div>

  <div className=" justify-content-end cat justify-content-center align-items-center px-2 col-lg-2">
  <p dangerouslySetInnerHTML={{__html: acfMedia(props).col4 }}/>
  </div>

  <div className=" justify-content-end cat justify-content-center align-items-center px-2 col-lg-2">
  <p dangerouslySetInnerHTML={{__html: acfMedia(props).col5 }}/>
  </div>

  <div className=" justify-content-end cat justify-content-center align-items-center px-2 col-lg-2">
  <p dangerouslySetInnerHTML={{__html: acfMedia(props).col6 }}/>
  </div>
</div>




   )}
  />
)

export default footer;
