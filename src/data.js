import componentLogo from "./assets/components.png";
import stateLogo from "./assets/state-mgmt.png";
import jsxLogo from "./assets/jsx-ui.png";
import propLogo from "./assets/config.png";
export const data=[
    {
        img:componentLogo,
        title:"Components",
        description:"The core UI building block - compose the user interface by combining multiple components",
    },
    {
        img: jsxLogo,
        title: "JSX",
        description: "Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered",
    },
    {
        img:propLogo,
        title:"Props",
        description:"Make components configurable (and therefore reusable) by passing input data to them."
    },
    {
        img :stateLogo,
        title:"State",
        description: "React-managed data which. When changed, courses the component to re-render & the UI to update."
    }
]
export const example={
    component:{
        title:"Components",
        description:"Component are the building block of React application. A Component is self-contained module(HTML + optianal CSS + JS) that renders some output.",
        code:`function Component(){
            return <h1>Hello</h1>
        }`
    },
    jsx:{
        title:"JSX",
        description: "JSX is syntax extension to JavaScript. It is similar to template language, But it has full power of JavaScript(e.g., it may output dynamic content)",
        code:`function Component(){
        return <div>
            <h1>Welcome {userName</h1>
            <p>Time to learn React</p>
         </div>
        }`
    },
    props:{
        title:"Props",
        description:"Component accept arbitrary input called props.Props are like argument of the function",
        code:`
               function Component(props){
                return(
                    <h1>Hello {props.name}</h1>
                )
        `
    },
    state:{
        title:"State",
        description:"State allows React component to change their output over time in response to user actions, network responses, and anything else",
        code:`
            function Component(){
                const[isVisible,setIsVisible]=useState(false);
                function handle(){
                    setIsVisible(true);
                }                          
                return(
                    <button onClick="{handle}">Shaw details</button>
                    {isVisible&& <p>Amazing details</p>
                )
            
        `
    }
}