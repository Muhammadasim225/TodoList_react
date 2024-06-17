import { useEffect, useState } from "react";

const Cards = () => {

    const [data,ndata]=useState([]);
    const dat=async ()=>{
        let a=await fetch('https://jsonplaceholder.typicode.com/posts');
        let dim=await a.json();
        ndata(dim);
        console.log(dim);

    }
    useEffect(()=>{
        dat() 
    },[])

    return (
        <div className="container flex  flex-row justify-center flex-wrap mx-28 px-60 ">
            {data.map((fsi)=>{
            return  <div key={fsi.id} className="border-2 border-black m-5 p-5 justify-center flex-wrap bg-slate-800 font-sans text-gray-50">
                    <h1 className="text-xl" ><b className="text-2xl">User ID: </b>{fsi.userId}</h1>
                    <h4 className="text-xl"><b className="text-2xl">ID:</b> {fsi.id}</h4>
                    <h4 className="text-xl"><b className="text-2xl">Title: <br /></b>{fsi.title}</h4>
                    <p className="text-xl"><b className="text-2xl">Body: <br /></b>{fsi.body}</p>
                </div>
            })
            }

        </div>
        // <p>{data}</p>
        // <p>{data}</p>
    );
}
 
export default Cards;