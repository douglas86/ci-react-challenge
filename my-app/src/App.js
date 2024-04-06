import css from './App.module.css';
import HttpRequests from "./components/HttpRequests";

function App() {
    return (
        <div className={css.App}>
            <div>
                <HttpRequests/>
            </div>
        </div>
    );
}

export default App;