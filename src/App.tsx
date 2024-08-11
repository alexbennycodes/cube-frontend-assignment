import { customers } from "./utils/mock-data";

function App() {
  return (
    <main className="h-screen max-h-screen flex flex-col">
      <header className="flex items-center justify-center py-4 border-b">
        Header
      </header>
      <section className="flex flex-1 relative w-full h-full">
        <aside
          className="w-[400px] border-r h-full absolute top-0 left-0 bottom-0 overflow-auto p-2"
          onClick={(e) => {
            console.log(e.target.closest("[data-id]").dataset.id);
          }}
        >
          {customers.map((customer) => (
            <div
              key={customer.index}
              className="border rounded-md p-4 mb-2"
              data-id={customer.id}
            >
              <h1 className="text-xl font-bold">{customer.name}</h1>
              <p>{customer.title}</p>
              <p>{customer.details}</p>
            </div>
          ))}
        </aside>
        <div className="absolute left-[400px] right-0 top-0 bottom-0 p-4 bg-blue-100/30 ">
          Main
        </div>
      </section>
    </main>
  );
}

export default App;
