import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const porfolioQuery = graphql`{
  allWordpressWpPorfolio {
    edges {
      node {
        id
        title
        slug
        content
        excerpt
        featured_media {
          source_url
        }
      }
    }
  }
}
`;



const porfolioItem = () => {

return(
  <StaticQuery
  query={porfolioQuery}
  render={props => props.allWordpressWpPorfolio.edges.map(key =>
      <div className='item' props={props} key={key.node.id}>
        <h2>{key.node.title}</h2>
        <img src={key.node.featured_media.source_url} alt={key.node.title}/>
        <div dangerouslySetInnerHTML={{__html: key.node.excerpt}} />
        <Link to={`/porfolio/${key.node.slug}`}> Read More </Link>
      </div>
  )}/>
  )

}

export default porfolioItem;