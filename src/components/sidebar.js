import React from "react"
import { StaticQuery, graphql } from "gatsby"

//239 is the index page where I get the logo info
const sidebarQuery = graphql`{
   allWordpressAcfPages(filter: {wordpress_id: {eq: 328}}) {
     edges {
       node {
         acf {
           reviews {
             pros
             cons
             features
             summary
             logo {
               source_url
               slug
             }
           }
         }
       }
     }
   }
 } 
 `;

 const acfMedia = (props) => {
   return props.allWordpressAcfPages.edges[0].node.acf.reviews;
 }


const sidebar =  () => (
   <StaticQuery
     query={sidebarQuery}
     render={props => (
 
<div datatest={props} className="col-lg-4 col-md-4 col-sm-12 hidden-sm-down hidden-md-down sideBar no-gutters">

<div className="titleSidebar">
<h2>top bitcoin sportsbooks</h2>
</div>


<div className="container-fluid">
{
   acfMedia(props).map((review, index) => 
   <div className="row box my-3 " key={index}>
      <div className="col-lg-6 logoSidebar ">
         <div id="number" className="circle">  {index + 1} </div>
         <img src={review.logo.source_url} alt={review.logo.slug} />
         </div>

         <div className="col-lg-6  link">
         <a className="wagerNow col-lg-12 " href="/category/wagering-news/">Wager</a>
         <a className="review col-lg-12 " href="/category/wagering-news/">Review</a>
         </div>

         <div className="col-lg-12 features" >
         <p dangerouslySetInnerHTML={{__html: review.cons }}/>
         </div>

      </div>



)
}

   </div>
</div>

 
    )}
   />
 )

 

export default sidebar
