import React from "react";
import Layout from "../components/layout";
import PorfolioItem from "../components/porfolioItems";
 

  class category extends React.Component {

  render() {
 
    const pageContext = this.props.pageContext;

    return (
      <Layout>
        <div key={pageContext.id} className='p-2 white' >
          <h1>{pageContext.title}  CATEGORY PAGE</h1>
          <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
          <PorfolioItem />
        </div>
      </Layout>
    );
  }
}
export default category;