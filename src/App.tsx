import HeaderScreen from "./components/HeaderScreen";
import "./App.css";
import ProjectScreen from "./components/ProjectScreen";
import { Suspense } from "react";
import Footer from "./components/Footer";

function App() {
  return (
    <Suspense fallback={<p>blablalbal</p>}>
      <main className="font-ops ">
        <HeaderScreen />
        <ProjectScreen />
      </main>
      <Footer />
    </Suspense>
  );
}

export default App;
