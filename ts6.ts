// 6. Order System
// Assignments:
// Type all functions and objects.
// Use Partial<> for updates and Readonly<> for summary input.

const defaultOrder = {
  id: 0,
  customer: "John",
  items: [],
  status: "pending"
};

function createOrder(customer: string, items: string[]) {
  return { ...defaultOrder, id: Date.now(), customer, items };
}

function updateOrder(order: typeof defaultOrder, updates: Partial<typeof defaultOrder>) {
  return { ...order, ...updates };
}

function getOrderSummary(order: Readonly<typeof defaultOrder>) {
  return `${order.customer} - ${order.status}: ${order.items.length} items`;
}

console.log(createOrder("Alice", ["item1", "item2"]));
console.log(updateOrder(defaultOrder, { status: "shipped" }));
console.log(getOrderSummary(defaultOrder));