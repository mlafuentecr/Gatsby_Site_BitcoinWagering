import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const allPost = graphql`{
  allWordpressPost {
    edges {
      node {
        wordpress_id
        title
        slug
        path
        excerpt
        content
        acf{
          thumbnail {
            source_url
          }
        }
      }
    }
  }
}
`;


const index = () => {

  return(
    <div>
        <h2 className="featureTitle col-12 "> Featured Articles  </h2>

        <StaticQuery
        query={allPost}
        render={props => props.allWordpressPost.edges.map(item =>
<div className='item' key={item.node.wordpress_id}>

<div className="featurePost">
  <div className="thumbnailArticle col-lg-3 col-md-3 col-sm-3">
    <img width="150" height="150" src={ item.node.acf.thumbnail.source_url }  className="alignleft wp-post-image" alt="" />
  </div>

  <div className="  f_Article float-right col-lg-9 col-md-9 col-sm-9 ">
  <span className="title"> {item.node.title}</span>
    - <span className="date"> Nov 30, 2017</span>
  <div className="copy">
  <div className='excerpt' dangerouslySetInnerHTML={{__html: item.node.excerpt}} />
  <Link to={`post/${item.node.path}`}  className="btn btn-danger">Read More...</Link>
  </div>
  </div>
</div>

</div>
        )}/>

    </div>
    )
  
  }

export default index;
