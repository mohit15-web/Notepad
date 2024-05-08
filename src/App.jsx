import React from 'react';
import Home from './components/Home';
// import MarkdownRenderer from './components/MarkdownRenderer';
// import Preloader from './components/Preloader';

const App = () => {
    const markdownContent = "# Hello Markdown!\n\nThis is a **bold** and _italic_ text.";

    return (
        <div className="App">
          <Home/>
            {/* <h1>Markdown Example</h1>
            <MarkdownRenderer markdownContent={markdownContent} /> */}
        </div>
    );
};

export default App;
