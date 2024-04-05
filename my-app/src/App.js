import css from './App.module.css';
import Content from "./components/Content";

function App() {
    return (
        <div className={css.App}>
            <div>
                <Content/>
            </div>
        </div>
    );
}

export default App;