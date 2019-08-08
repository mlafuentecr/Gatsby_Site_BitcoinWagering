import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"


const menuQuery = graphql`{
  allWordpressWpApiMenusMenusItems(filter: {
    name: {
      eq: "topMenu"
    }
  }){
    edges{
      node{
        name
        items{
            title
            url
            object_slug
            object
        }
      }
    }
  },
  site {
    siteMetadata {
      siteURL
    }
  }
  allWordpressWpMedia {
    edges {
      node {
        slug
        source_url
      }
    }
  }
}
`;
// const getMenu = (props) =>{
//   //Tome el primer menu que aperesca en header ya que solo 1 deberia salir porque esta filtrado arriba
//   return props.allWordpressWpApiMenusMenusItems.edges[0].node.items;
// }

  // let checkType = (props, item) =>{

  //   //Si entro a categoria le quito
  //   const propsVar = props.site.siteMetadata.siteURL;
  //   let link ='';
  //   const urlString = item.url;
  //   console.log('1'+urlString);

  //   if(item.object === 'category'){
  //     link = urlString.replace('https://', "");
  //     console.log('2'+link);
  //     link = link.replace(propsVar, "/");
  //     console.log('3'+link);
  //   }else{
  //     link = item.object_slug;
  //     console.log('4'+link);
  //   }
  //   return link
  // }

 



const mainmenu =  () => (
  <StaticQuery
   query={menuQuery}
    render={ props => (
      <header props={props} >

      <div className="collapsible-menu navbar  bg-faded col-12">
      <input type="checkbox" id="menu"  />
            <label htmlFor="menu">Menu</label>
            <div className="menu-content">
                <ul>
                    {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
                      <li  key={item.title}>
                        <Link className='menuLink' to={`/${item.object_slug}`} >
                        {item.title}
                        </Link>
                    </li>
                    ))}
                </ul>
            </div>
      </div>

      // </header>
    )}
  />
)

export default mainmenu;


