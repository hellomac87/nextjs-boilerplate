import React from 'react'
import fetch from "isomorphic-unfetch";

const Academy = ({data}:any) => {
    console.log(data);
    return (
        <div>
            {data.data.first_name}
        </div>
    )
}

Academy.getInitialProps = async function(ctx:any){
    const { id } = ctx.query;
    console.log(id);
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json();
 
  return {
      data
  };
}

export default Academy
