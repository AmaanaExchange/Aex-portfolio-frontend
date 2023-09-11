import "bootstrap/dist/css/bootstrap.min.css";
import AppRoutes from "./AppRoutes";
import AppHeader from "./components/shared/Header/Header";
import "./assets/css/styles.min.css";
import AppFooter from "./components/shared/Footer/Footer";

function App() {
  return (
    <div className="app-wrapper">
      <AppHeader />
      <main>
        <AppRoutes />
      </main>
      <AppFooter />
    </div>
  );
}

export default App;
