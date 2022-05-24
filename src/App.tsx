import React from 'react';
import './App.css';
import Accordion from "./components/accordion/accordion";
import Rating from "./components/rating/rating";

function App() {
    return (
        <div className="App">
            <AppTitle title={'This is APP component'}/>
            Article 1
            <Accordion titleValue={'Menu'} collapsed={false}/>
            <Accordion titleValue={'User list'} collapsed={false}/>
            Article 2
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
        </div>
    );
}

type AppTitlePropsType = {
    title: string
}

const AppTitle = (props: AppTitlePropsType) => {
    return (
        <h1>
            {props.title}
        </h1>
    )
}

export default App;
