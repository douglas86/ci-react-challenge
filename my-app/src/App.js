import css from './App.module.css';
import RenderingLists from "./components/RenderingLists";

function App() {
    return (
        <div className={css.App}>
            <div>
                <RenderingLists/>
            </div>
        </div>
    );
}

export default App;