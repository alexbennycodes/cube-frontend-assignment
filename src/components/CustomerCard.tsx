type Props = {
  customerId: number;
  customerName: string;
  customerTitle: string;
  isSelected: boolean;
};

const CustomerCard = ({
  customerId,
  customerName,
  customerTitle,
  isSelected,
}: Props) => {
  return (
    <div data-id={customerId} className="h-full">
      <div
        className={`border-b p-4 cursor-pointer ${
          isSelected ? "bg-gray-200 border-r-2 border-r-blue-500" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-2">
          <h1 className="text-xl font-medium">{customerName}</h1>
          <p className="text-sm border rounded-full px-2 bg-blue-100 border-blue-700 text-blue-700">
            {customerTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
