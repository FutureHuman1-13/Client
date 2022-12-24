import React from "react";
import Netflix from "./Netflix";
import Sdata from "./Sdata";

const AmazonCo =()=>{
    return(
        <Netflix
        key={Sdata[5].id}
        imgsrc={Sdata[5].imgsrc}
        title={Sdata[5].title}
        link={Sdata[5].link}
        sname={Sdata[5].sname}
      />
    )
};
export default AmazonCo;