import React        from "react"
import Layout       from "../components/layout"
import Index        from '../components/index'
import Review       from '../components/review'
import PageItem       from '../components/pageItem'

//aca voya mannejar todo lo que sea typo pagina
//lo demas el router lo hgo e gatsby-node
class page extends React.Component {

   render() {
     //pageContext viene de gatsby-node
    const pageContext = this.props.pageContext;
    const pageTitle   = this.props.location.pathname.replace(/[/]/g,"", -1)


let renderSwitch=(param)=> {

  switch(param) {

     case 'index':
      return <Index />;

    case 'portsbook-reviews':
      return <Review />;

    default:
      return <PageItem pageContext={pageContext} />;
  }
}

    return (
      <Layout sidebar={pageContext.acf.havesidebar}>

        <div
        key={pageContext.wordpress_id}
        className= {
        (pageContext.acf.havesidebar === true   ? 'pageIdex sibar no-gutters leftCol col-lg-8 col-md-8 col-sm-12 col-xs-12' : 'pageIdex noBar leftCol col-lg-12 col-md-12 col-sm-12 col-xs-12')
        }
        >

          {/* If index call indexpg */ }
           {renderSwitch(pageTitle)}

        </div>
      </Layout>
    );
  }

}
export default page;
