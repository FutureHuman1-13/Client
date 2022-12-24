import React from "react";
import Netflix from "./Netflix";
import Sdata from "./Sdata";
 
const NetflixCo=()=>{
    return(
        <Netflix
        key={Sdata[1].id}
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        link={Sdata[1].link}
        sname={Sdata[1].sname}
      />
    )
};
export default NetflixCo;