import { useState } from "react";
const Landingpage = () => {
    const hello="Asim";
    const [first, setfirst] = useState(0);
    const [third, fourth] = useState("Asim");
    function setfirsttt(){
        setfirst(first+1);
        fourth("Haider");
        

    }
    const [list,nlist]=useState([
        {books:"Sibli Noumani",level:"regular"},
        {books:"Altaf Hussain Hali",level:"complex"},
        {books:"Maths",level:"Hardest"}
    ])

    return ( 
        <div className="full">
            <h1 className="headline">
                The #1 AI work management platform
                <p>{third}-{first}</p>
                <button onClick={setfirsttt}>
                     Click Me

                </button>
            </h1>
            <br />
           {
            list.map((ddd)=>(
                <div className="preview" key={ddd.books}>

                    <h1>Books: </h1>
                    <p>{ddd.books}</p>
                    <br /><br/>
                    <h1>Level</h1>
                    <p>{ddd.level}</p>
                </div>
            )


            )
           }
        </div>
     );
}
 
export default Landingpage;