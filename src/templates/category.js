import React from "react";
import Layout from "../components/layout";



const category = (props) => {

  return(
  <Layout  >
     <div key={props.pageContext.wordpress_id} >


        <div className='catItems p-2 white' >
          <h1>{ props.pageContext.name } </h1>
          {/* <div dangerouslySetInnerHTML={{__html: cats(props)[item].node.description }} /> */}
        </div>

</div>
     </Layout>
    );
  }

export default category;
