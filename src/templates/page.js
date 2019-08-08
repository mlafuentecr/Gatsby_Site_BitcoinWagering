import React        from "react"
import Layout       from "../components/layout"
import PorfolioItem from  "../components/porfolioItems"

class page extends React.Component {

   render() {
     //pageContext viene de gatsby-node
    const pageContext = this.props.pageContext;
    return (
      <Layout sidebar={pageContext.acf.havesidebar}>

        <div
        key={pageContext.wordpress_id}
        className= {
        (pageContext.acf.havesidebar === true   ? 'no-gutters leftCol col-lg-8 col-md-8 col-sm-8 col-xs-12' : 'leftCol col-lg-12 col-md-12 col-sm-12 col-xs-12')
        }
        >

          <h1>{pageContext.title}  page{pageContext.wordpress_id} </h1>
          <div dangerouslySetInnerHTML={{__html: pageContext.content}} />
          {
          //Render Component if template is index
          pageContext.template === 'indexTemplate.php' ? <PorfolioItem />:null
          }

        </div>
      </Layout>
    );
  }

}
export default page;
