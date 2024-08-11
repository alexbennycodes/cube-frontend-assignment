import CustomersList from "./components/CustomersList";
import { customers } from "./utils/mock-data";

function App() {
  return (
    <main className="h-screen max-h-screen flex flex-col">
      <header className="flex items-center justify-center py-4 border-b">
        Header
      </header>
      <section className="flex flex-1 relative w-full h-full">
        <CustomersList customers={customers} />
        <div className="absolute left-[400px] right-0 top-0 bottom-0 p-4 bg-blue-100/30 ">
          Main
        </div>
      </section>
    </main>
  );
}

export default App;
