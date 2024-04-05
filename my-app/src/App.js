import css from './App.module.css';
import SearchBar from "./components/SearchBar";

function App() {
    return (
        <div className={css.App}>
            <div>
                <SearchBar/>
            </div>
        </div>
    );
}

export default App;