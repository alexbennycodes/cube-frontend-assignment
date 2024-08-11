import { useState } from "react";
import CustomersList from "./components/CustomersList";
import { Customer, customers } from "./utils/mock-data";
import CustomerDetails from "./components/CustomerDetails";

function App() {
  const [currentCustomer, setCurrentCustomer] = useState<Customer>(
    customers[0]
  );
  return (
    <main className="h-screen max-h-screen flex flex-col">
      <header className="flex items-center justify-center py-4 border-b text-3xl font-medium uppercase">
        Customers 101
      </header>
      <section className="flex flex-1 relative w-full h-full">
        <CustomersList
          customers={customers}
          onCustomerClick={(id) =>
            setCurrentCustomer(
              customers.find((c) => c.id === id) ?? customers[0]
            )
          }
          currentCustomerId={currentCustomer.id}
        />
        <div className="absolute left-[400px] right-0 top-0 bottom-0 bg-blue-100/30 overflow-auto">
          {currentCustomer && (
            <CustomerDetails
              customerId={currentCustomer.id}
              customerName={currentCustomer.name}
              customerAddress={currentCustomer.address}
              customerDetails={currentCustomer.details}
            />
          )}
        </div>
      </section>
    </main>
  );
}

export default App;
