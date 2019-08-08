import React        from "react"
import Layout       from "../components/layout"
import PorfolioItem from  "../components/porfolioItems"

class post extends React.Component {


   render() {
 
    const postContext = this.props.pageContext;

    return (
      <Layout>
        <div key={postContext.id} className='p-2 white' >
          <h1>{postContext.title}  post</h1>
          <div dangerouslySetInnerHTML={{__html: postContext.content}} />
          <PorfolioItem />
        </div>
      </Layout>
    );
  }
}
export default post;
