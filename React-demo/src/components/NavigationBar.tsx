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
            <CustomLink href="/weather" name="Weather"/>
        </ul>

</nav></>);
}


function CustomLink(props:LinkProp){
    let activeCss = "";
    if(window.location.pathname === props.href) {
        activeCss = "active";
    }
    // switch(window.location.pathname)
    // {
    //     case "/":
    //     case "/cal":
    //         if(props.href  === "/cal"){
    //         activeCss = "active";
    //         }

    //         break;
    //     case "/practice":
    //         if(props.href  === "/practice"){
    //         activeCss = "active";
    //         }

    //         break;
    //     case "/weather":
    //         if(props.href  === "/practice"){
    //         activeCss = "active";
    //         }

    //         break;
    // }
    return (<li className={activeCss}>
        <a href={props.href}>{props.name}</a>
        </li>);
}