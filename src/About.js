function Myabout() {
    return <h1>This is y first Node Program</h1>
}
export default Myabout; //Default Export


export function Mycontainer()//Export by name
{
    return <h1 style={{ color: 'red', backgroundColor: "aqua", fontSize: 50 }}>This is Mohit Dwivedi</h1>
}

export function Mycss() {
    return <div className="page">
        <h1>Hello Mohit</h1>
        <section>ok</section>
    </div>
}

export function Mypage() {

    const name="kumar";
    const age=10000;
    const y=true;
    const abc="Yo";

    return (
        <div>This is mohit dwivedi {name}
        <h1>My age : {age}</h1>
        <h1>Age{age>=800? "first condition":"second secondition"}</h1>
        <h1>Age{age===100? "first condition":age===900?"second condition":age===200?"third condition":<h1>Wrong</h1>}</h1>

        <input type="text" placeholder="username" value={abc}></input>
        </div>
    )
}
