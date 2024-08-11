import { Virtuoso } from "react-virtuoso";
import { Customer } from "../utils/mock-data";
import CustomerCard from "./CustomerCard";
import React from "react";

type Props = {
  customers: Customer[];
  onCustomerClick: (id: number) => void;
  currentCustomerId: number;
};

const CustomersList = ({
  customers,
  onCustomerClick,
  currentCustomerId,
}: Props) => {
  return (
    <aside
      className="w-[400px] border-r h-full absolute top-0 left-0 bottom-0"
      onClick={(e: React.MouseEvent<HTMLElement>) => {
        if (e.target instanceof HTMLElement) {
          const targetWithId = e.target.closest("[data-id]");
          if (targetWithId && targetWithId instanceof HTMLElement) {
            const customerId = parseInt(targetWithId.dataset.id || "1", 10);
            onCustomerClick(customerId);
          }
        }
      }}
    >
      <Virtuoso
        data={customers}
        className="w-full h-full"
        itemContent={(_, customer: Customer) => (
          <CustomerCard
            key={customer.id}
            customerId={customer.id}
            customerName={customer.name}
            customerTitle={customer.title}
            isSelected={currentCustomerId === customer.id}
          />
        )}
      />
    </aside>
  );
};

export default CustomersList;
