// Export Nav Items
export const NAVITEMS = [
  { id: 1, label: "Home" },
  { id: 2, label: "Features" },
  { id: 3, label: "Pricing" },
];

// Export More Option
export const NAVITEMS2 = [
  { id: 1, label: "Contact" },
  { id: 2, label: "Pages" },
];

// Export Tabs
export const TABS = [
  {
    title: "Products",
    Component: "Products",
  },
  {
    title: "Pricing",
    Component: "Pricing",
  },
  {
    title: "Blog",
    Component: "Blog",
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));