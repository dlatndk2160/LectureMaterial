import Header from './Header'; //<header></header>부분에 들어감
import Footer from './Footer'; //<Footer></Footer>부분에 들어감
import './App.css';

function App() {
    return (
        <div class="container">
            <Header></Header>

            <section id="page1" data-role="page">
                <div class="content" data-role="content">
                    컨텐츠
                </div>
            </section>

            <Footer></Footer>
        </div>
    );
}
export default App;
