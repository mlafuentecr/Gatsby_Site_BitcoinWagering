import React from "react"
import { StaticQuery, graphql } from "gatsby"

const allPost = graphql`{
  allWordpressPage(filter: {slug: {eq: "portsbook-reviews"}}) {
    edges {
      node {
        acf {
          reviews {
            logo {
              source_url
            }
            pros
            cons
            features
            summary
          }
        }
      }
    }
  }
}

`;

const reviews = (props) => {
  return props.allWordpressPage.edges[0].node.acf.reviews; 
}

const review = () => {

  return(
    <div className='feature'>
     <h2 className="featureTitle col-12 ">  Sportsbook Reviews</h2>

        <StaticQuery
        query={allPost}
        render={props => Object.keys(reviews(props)).map((item) =>
          <div className="container-review" key={item}   >
          

<div className=" logoSidebar mt-0 col-lg-4" number={item} key={item.key}>
  <div id="number" className="circle"> {( parseInt(item)+1 )} </div>
   <img className=" mx-auto d-block align-middle logo" src={reviews(props)[item].logo.source_url}  alt={reviews(props)[item].summary} />
  </div>

<div className=" descrip" >
<div className="prosCons ml-4">

  <div className="pros p-0 ">
      <h2>Pro's</h2>
      <div  className='pros1' dangerouslySetInnerHTML={{__html: reviews(props)[item].pros}} />
  </div>

  <div className="cons  p-0">
      <h2>Con's</h2>
      <div className='cons1' dangerouslySetInnerHTML={{__html: reviews(props)[item].cons}} />
  </div>
  
</div>
</div>

<div className=" featurePosts">
<h2>Features</h2>
<div  className='feature1' dangerouslySetInnerHTML={{__html: reviews(props)[item].features}} />
</div>

<div className="Summary">
  <h2>Summary</h2>
  <div className='Summary1' dangerouslySetInnerHTML={{__html: reviews(props)[item].summary}} />
</div> 

</div>
        )}/>

    </div>
    )
  
  }

export default review;
