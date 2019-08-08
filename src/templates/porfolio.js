import React from "react";
import Layout from "../components/layout";
import PorfolioItem from "../components/porfolioItems";
 
export default class porfolioTemplate extends React.Component {
  render() {
 
    const porfContext = this.props.pageContext;

    return (
      <Layout>
        <div key={porfContext.id} className='p-2 white' props={this.props}>
          <h1>{porfContext.title}  porfContext</h1>
          <img src={porfContext.featured_media.source_url} alt=""/>
          <div dangerouslySetInnerHTML={{__html: porfContext.content}} />
          <PorfolioItem />
        </div>
      </Layout>
    );
  }
}
 