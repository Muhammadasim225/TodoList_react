import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';

const Textform = () => {
    const [first, setfirst] = useState('');
    const [color, setcolor] = useState(0);
    function execute() {
        setfirst('Enter text here');

    }
    const handleChange = (event) => {
        console.log("On change");
        setfirst(event.target.value);

    }
    const [copyMessage, setCopyMessage] = useState('');
    const copyToClipboard = () => {
        navigator.clipboard.writeText(first).then(() => {
            setCopyMessage('Copied');
            setTimeout(() =>
                setCopyMessage(''), 2000
            );
        }).catch((error) => {
            console.log("Failed to copy text", err);

        })
    };
    const upper = () => {
        console.log("Converted to uppercase");
        let ntext = first.toUpperCase();
        setfirst(ntext);

    }
    const lower = () => {
        console.log("Converted to lowercase");
        let ntext = first.toLowerCase();
        setfirst(ntext);

    }

    // useEffect(() => {
    //     alert("first was changed ");
    //     setcolor(color+1);
    // }, [first])


    // useEffect(()=>{
    //     alert("Copy message is showing");
    // },[copyMessage])
    const [count, setcount] = useState(0);

    let a = useRef();
    useEffect(() => {
        console.log("Rerender");
        a.current.style.backgroundColor = "red";

    }, []);
    let comble = useRef();
    useEffect(() => {
        comble.current.style.backgroundColor = "orange";
    }, [])
    let b = useRef();
    useEffect(() => {
        console.log("B effect is applied");
        b.current.style.backgroundColor = "yellow";
    }, [first])
    const [butt, setbutt] = useState("on");
    function functer() {
        setbutt(prevButt => (prevButt === "on" ? "off" : "on"));


    };

    const [nip, trip] = useState(true);



    const [big, nig] = useState(true);
    let aim = useRef();
    useEffect(() => {
        if (big == false) {
            aim.current.style.backgroundColor = "red";
        }
    })
    const [todo,settodo]=useState([
        {
            title:"First title",
            pack:"First paragraph",

        },
        {
            title:"Second title",
            pack:"Second paragraph",

        },
        {
            title:"Third title",
            pack:"Third paragraph",
        }
    ]

    );
    // const Todo = (props) => {
    //     const title=props.title;
    //     const pack=props.pack;
    //     return (
    //         <>
    //             <div ref={cat} className="border-2 border-slate-950 flex justify-center m-6 p-8 mx-28"><h1 className='font-bold text-2xl font-serif'>I am {title}</h1><br />
    //            <h1 className='font-bold text-2xl font-serif'> &nbsp;I am {pack}</h1>
    //             </div>
    //         </>

    //     )
    // }
    let cat=useRef();
useEffect(()=>{
    cat.current.style.backgroundColor="pink";
})
function jote(){
    alert("The mouse is over");

}
const [bim,tim]=useState({
    name:"",
    password:""

});
const hamdle=(e)=>{
    tim({...bim,[e.target.name]:e.target.value});
    console.log(bim);
}













    return (
        <>
            <div>
                <div className="bg-sky-100   w-3/4 px-10 py-10  flex - mx-auto mt-10 mb-3">
                    <h1 className="w-full text-4xl font-extrabold text-gray-600">  {first.split(/\s+/).filter(word => word.length > 0).length} words and {first.length} characters</h1>
                </div>
                <div className="bg-gray-100 w-3/4 mx-auto flex p-2">
                    <button className='bg-white p-3 border-rad mx-1 text-xs font-medium  hover:bg-gray-400' onClick={upper}> UPPER CASE</button>
                    <button className='bg-white p-3 border-rad mx-1 text-xs font-medium  hover:bg-gray-400' onClick={lower}> LOWER CASE </button>
                    <button className='bg-white p-3 border-rad mx-1 text-xs font-medium  hover:bg-gray-400' onClick={copyToClipboard}> COPY </button>
                    <button className='bg-white p-3 border-rad mx-1 text-xs font-medium  hover:bg-gray-400'> SAVE </button>
                    <button className='bg-white p-3 border-rad mx-1 text-xs font-medium  hover:bg-gray-400' onClick={execute}> PREVIEW </button>
                    <button className='bg-white p-3 border-rad mx-1 text-xs font-medium  hover:bg-gray-400'> UNDO </button>
                    <button className='bg-white p-3 border-rad mx-1 text-xs font-medium  hover:bg-gray-400'> REDO </button>
                    <button className='bg-white p-3 border-rad mx-1 text-xs font-medium hover:bg-gray-400'> EXTRACT EMAIL </button>
                </div>

                <textarea id="text" className='w-3/4 p-1 flex justify-center mx-auto border-2 border-slate-600' name="myarea" rows="10" cols="100" value={first} onChange={handleChange}></textarea><br />
                {copyMessage && <div className="mx-auto bg-slate-500  text-sm text-white w-20 h-10 text-center py-2 rounded-3xl">{copyMessage}</div>}
                <br /><br />
                {/* <Navbar color={"navy" + "blue"+ color}></Navbar> */}


                <div className="preview">
                    <h1 ref={b} className=' text-gray-600 font-extrabold font-serif text-4xl flex justify-start w-3/4 mx-auto'>Preview</h1>
                    <p className='mx-auto p-1 my-5 font-serif text-grey-600 w-3/4 border-2 bg-gray-100'>{first}</p>

                    <h1>{count}</h1>
                    <button ref={a} onClick={() => {
                        trip(!nip);
                    }}>
                        CLick your

                    </button>
                    <h1>{butt}</h1>
                    <button ref={comble} onClick={
                        functer
                    }>Toggle button</button>
                </div>
                {nip && <button>I will only show when button is true</button>}
                <br />
                {big ? <h1>This is truly big</h1> : <h1 ref={aim}>This is truly Fail</h1>}
                <button onClick={() => {
                    nig(!big)
                }}>Execute</button>




            </div>
            {
                todo.map((itm)=>{
                    // return <Todo key={itm.title} title={itm.title} pack={itm.pack}/>
                    return <div ref={cat} key={itm.title} className="border-2 border-slate-950 flex justify-center m-6 p-8 mx-28">
                        
                    <h1 className='font-bold text-2xl font-serif'> &nbsp;I am {itm.pack}</h1>
                     </div>
                })
            }
           Enter username: <input className='border-2 border-zinc-950' type="text" name="name" id="username" value={bim.name} onChange={hamdle} /><br />
            Enter password: <input className='border-2 border-zinc-950' type="password" name="password" id="pass" value={bim.password} onChange={hamdle} />
            


        </>
    );
}

export default Textform;
