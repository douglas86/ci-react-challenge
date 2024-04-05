import css from './App.module.css';
import NavBarForm from './components/NavBarForm';

function App() {
    return (
        <div className={css.App}>
            <div>
                <NavBarForm/>
            </div>
        </div>
    );
}

export default App;