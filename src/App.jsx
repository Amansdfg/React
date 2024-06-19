import "./App.css";
import Header from "./components/Header/Header.jsx"
import {data} from "./data.js";
import Component from "./components/Component/Component.jsx";
import Button from "./components/Button/Button.jsx";
import {useState} from "react";
import {example} from  "./data.js";
function App(){
    const[select,setSelect]=useState();
    let content=<p>Please select one of the topic</p>
    function handleSelect(select){
        setSelect(select);
    }
    if(select){
        content=
            <div id="content">
                <h3>{example[select].title}</h3>
                <p>{example[select].description}</p>
                <pre>
                    <code>
                        {example[select].code}
                    </code>
                </pre>
            </div>
    }
    return(
        <div>
            <Header/>
            <main>
                <section id="concept">
                    <h1>Core concepts</h1>
                    <ul>
                        {data.map(core=><Component key={core.title} {...core}/>)}
                    </ul>
                </section>
                <section id="examples">
                    <h2>Example</h2>
                    <menu>
                        <Button isSelected={select==="component"} title="Componets" onSelect={()=>handleSelect("component")}/>
                        <Button isSelected={select==="jsx"} title="Jsx" onSelect={()=>handleSelect("jsx")}/>
                        <Button isSelected={select==="props"} title="Props" onSelect={()=>handleSelect("props")}/>
                        <Button isSelected={select==="state"} title="State" onSelect={()=>handleSelect("state")}/>
                    </menu>
                    {content}
                </section>
            </main>
        </div>
    )
}
export default App;