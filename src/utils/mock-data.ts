export interface Customer {
  id: number;
  name: string;
  title: string;
  details: string;
  address: string;
}

export const customers: Customer[] = Array.from(
  { length: 1000 },
  (_, index) => ({
    id: index + 1,
    name: `Customer ${index + 1}`,
    title: `Title ${index + 1}`,
    address: "123 Main Street, Anytown, USA",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  })
);
