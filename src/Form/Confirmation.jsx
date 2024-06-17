const Confirmation = () => {
    const confirmationmsg=(id)=>{
             if(window.confirm("Are you sure you want to delete")===true){
                deleteTodo(id)
             } 
            
             else{
                 alert("Error try again");
        
             }
           }
    return (  
        <h1>Hello</h1>

    );
}

 
export default Confirmation;