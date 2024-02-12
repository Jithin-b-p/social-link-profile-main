import Card from "./components/Card";
import "./index.css";

function App() {
  return (
    <main className="min-h-svh bg-offblack flex justify-center items-center">
      <h1 className="sr-only">This is a profile card</h1>
      <Card />
    </main>
  );
}

export default App;
