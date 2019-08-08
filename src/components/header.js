import React from "react"
import { StaticQuery, graphql } from "gatsby"


//239 is the index page where I get the logo info
const menuQuery = graphql`{
  allWordpressSiteMetadata{
    edges{
      node{
        name
        description
      }
    }
  }

  allWordpressAcfPages(filter: {wordpress_id: {eq: 239}}) {
    edges {
      node {
        acf {
          logo{
            wordpress_id
            slug
            source_url 
          }
          banner {
            wordpress_id
            slug
            source_url
          }
          bannerlink
        }
      }
    }
  }
}
`;

  const propsbase = (props) => {
    return props.allWordpressSiteMetadata.edges[0].node;
  }
  const acfMedia = (props) => {
    return props.allWordpressAcfPages.edges[0].node.acf;
  }
 
const header =  () => (
  <StaticQuery
    query={menuQuery}
    render={props => (
      <div className="header col-12" >

        <div className="row"  >
            <div  className="logo col-sm-12  col-lg-5   mr-5 text-center text-lg-left"  >
            {  
              <a href='/'>
              <img src={acfMedia(props).logo.source_url} 
              alt={ propsbase(props).description} /> 
            </a>
            }{/* aca lemando props */}
            </div>
            <div className="banner  col-md-12 my-1 col-lg-7   text-center  text-lg-right hidden-sm-down">
            {
              <a href={ acfMedia(props).bannerlink}>
                <img src={acfMedia(props).banner.source_url} 
                alt={acfMedia(props).banner.slug}/> 
              </a>
              }
            </div>
        </div>


      </div>
    )}
  />
)

export default header


