export interface Customer {
  name: string;
  title: string;
  details: string;
}

export const customers: Customer[] = Array.from(
  { length: 1000 },
  (_, index) => ({
    id: index + 1,
    name: `Customer ${index + 1}`,
    title: `Title ${index + 1}`,
    details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry for Customer ${
      index + 1
    }.`,
  })
);
