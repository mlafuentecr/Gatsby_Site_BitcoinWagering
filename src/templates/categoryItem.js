import React from "react";
import Layout from "../components/layout";
import { StaticQuery, graphql } from "gatsby"

const allCat = graphql`{
  allWordpressCategory {
    edges {
      node {
        wordpress_id
        name
        slug
        description
      }
    }
  }
}

`;

const cats = (props) => {
  return props.allWordpressCategory.edges;
}

const categoryItem = (props) => {
  return(
  <Layout  >
    <div className="cat" props={props} >

        <StaticQuery
        query={allCat}
        render={props => Object.keys(cats(props)).map( (item) =>

        <div className='catItems p-2 white' >
          <h1>{cats(props)[item].node.name }</h1>
          <div dangerouslySetInnerHTML={{__html: cats(props)[item].node.description }} />
        </div>

)}/>
</div>
     </Layout>

    )

  }

export default categoryItem;
