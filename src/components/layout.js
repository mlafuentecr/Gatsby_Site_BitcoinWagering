import React    from "react"
import Mainmenu from './mainMenu'
import Header   from './header'
import Footer   from './footer'
import Sidebar  from './sidebar'



const Layout = ({ children, sidebar }) => (
 //sitebar viene de page lo mando por props via pageContext via gastbynode
  <div className='container sizeFix' >
    <Header/>
    <Mainmenu/>

    <div className= { sidebar === true  ? 'p-2 white mainContent d-flex' : 'p-2 white mainContent'} >
    { children }
    { sidebar === true  ?  <Sidebar /> : '' }
    </div>

    <Footer />
  </div>
)



 export default Layout
