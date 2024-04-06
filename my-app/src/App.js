import css from './App.module.css';
import HttpPost from "./components/HttpPost";
import ContentAPI from "./components/ContentAPI";

function App() {
    return (
        <div className={css.App}>
            <div>
                <ContentAPI/>
            </div>
        </div>
    );
}

export default App;