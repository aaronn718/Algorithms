interface LinkProp{
    href: string,
    name: string
 }
export default function Navbar() {
    return (<><nav className="nav">
        <a href="/" className="site-title">Home</a>
        <ul>
            <CustomLink href="/cal" name="Calculator"/>
            <CustomLink href="/practice" name="Practice"/>
        </ul>

</nav></>);
}


function CustomLink(props:LinkProp){
    let activeCss = "";
    switch(window.location.pathname)
    {
        case "/":
        case "/cal":
            if(props.href  === "/cal"){
            activeCss = "active";
            console.log("cal class");
            }

            break;
        case "/practice":
            if(props.href  === "/practice"){
            activeCss = "active";
            console.log("practice");
            }

            break;
    }
    return (<li className={activeCss}>
        <a href={props.href}>{props.name}</a>
        </li>);
}