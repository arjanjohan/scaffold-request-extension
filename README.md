# 🏗 Scaffold-ETH 2 Request Network Extension

This SE2 extension comes with pre-configured Request Network pages and components to create and view invoices.

## 💸 Request Network

[Request Network](https://request.network/) is a decentralized platform that allows you to create, manage, and pay invoices seamlessly on the blockchain.

- 🧾 **Decentralized Invoicing**: Request Network enables the creation and management of invoices on the blockchain, ensuring transparency, security, and trust between parties.
- 💰 **Efficient Payments**: The platform facilitates swift, secure payments in various cryptocurrencies, providing flexibility for global transactions.
- 🌐 **Collaborative Ecosystem**: Request Network empowers businesses and developers to integrate invoicing and payment functionalities into their applications, promoting innovation and collaboration!

For detailed instructions and more context, check out the [Developer Documentation](https://docs.request.network/).

## Installation

```shell
npx create-eth@latest -e request-network
```

### Tailwind color scheme

SE2 Extensions currently do not allow custom tailwind configurations. You can manually replace the themes in `packages/nextjs/tailwind.config.js` by the code below to get the Request Network color scheme:
```
    themes: [
      {
        light: {
          primary: "#0BB489", // dark green
          "primary-content": "#F9FBFF", //White
          secondary: "#0BB489",
          "secondary-content": "#F9FBFF",
          accent: "#0BB489",
          "accent-content": "#F9FBFF",
          neutral: "#02050f",

          "neutral-content": "#ffffff",
          "base-100": "#58E1A5", // light green
          "base-200": "#f4f8ff", // bg (white)
          "base-300": "#58E1A5",
          "base-content": "#02050f",
          info: "#adfa91",
          success: "#58E1A5",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        dark: {
          primary: "#0BB489",            // Vibrant green
          "primary-content": "#F9FBFF",  // Light text on primary
          secondary: "#05856E",          // Darker green for secondary
          "secondary-content": "#F9FBFF",// Light text on secondary
          accent: "#046F5A",             // Even darker green for accents
          "accent-content": "#F9FBFF",   // Light text on accent
          neutral: "#1A1A1A",            // Near-black neutral background
          "neutral-content": "#0BB489",  // Green content on neutral background
          "base-100": "#2C7F6E",         // Black-like base background
          "base-200": "#217B64",         // Slightly lighter than base-100
          "base-300": "#196D54",         // Another step lighter, still very dark
          "base-content": "#F9FBFF",     // Light content on dark base
          info: "#0BB489",               // Consistent info color with primary
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
```

## Pages and components

### Create Invoice
The Create Invoice page leverages the [`create-invoice-form`](https://docs.request.network/building-blocks/components/create-invoice-form) component created by Request Network.

### Invoice Dashboard
Custom page that displays an overview of invoices sent and received. Clicking on an invoice takes you to the `Invoice Details` page for this invoice. 

### Invoice Details
Custom pages that displays the details of an invoice.



## Team
This extension is created by [arjanjohan](https://x.com/arjanjohan) for the [Scaffold-ETH 2 Extensions Hackathon](https://extensions.buidlguidl.com/).