import css from './App.module.css';
import ContentHooks from "./components/ContentHooks";

function App() {
    return (
        <div className={css.App}>
            <div>
                <ContentHooks/>
            </div>
        </div>
    );
}

export default App;