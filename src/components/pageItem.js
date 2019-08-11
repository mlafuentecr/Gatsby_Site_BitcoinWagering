import React from "react";



const pageItem = (props) => {
  const postContext = props.pageContext;
  return(

     <div className='pageItems p-2 white' props={props} >
          <h1>{ postContext.title } </h1>
          <div dangerouslySetInnerHTML={{__html: postContext.content  }} />
        </div>

    )

  }

export default pageItem;
