import DummyDb from "./DummyDb";

function DummyData(){
    return(
<>
{
    DummyDb.map((ele,i)=>{
        return(
            <>
            <p>ID:{i}</p>
            <p>{ele.name}</p>
            <p>{ele.pass}</p>
            </>
        )
    })
}
</>
    );
}

export default DummyData;