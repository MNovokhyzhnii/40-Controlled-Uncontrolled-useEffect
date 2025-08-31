import ControlledForm from "./components/ControlledForm.jsx";
import UncontrolledForm from "./components/UncontrolledForm.jsx";
import DataFetcher from "./components/DataFetcher.jsx";

export default function App() {
  return (
    <div className="container">
      <h1>React Forms: Controlled vs Uncontrolled</h1>

      <div className="grid">
        <section>
          <h2>ControlledForm</h2>
          <ControlledForm />
        </section>
        <section>
          <h2>UncontrolledForm</h2>
          <UncontrolledForm />
        </section>
      </div>

      <section>
        <h2>DataFetcher (useEffect)</h2>
        <DataFetcher />
      </section>
    </div>
  );
}
