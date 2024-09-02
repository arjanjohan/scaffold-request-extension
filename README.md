# 🏗 Scaffold-ETH 2 Request Network Extension

This SE2 extension comes with pre-configured Request Network pages and components to create and view invoices. [Preview the template here.](https://scaffold-request.vercel.app/)

## 💸 Request Network

[Request Network](https://request.network/) is a decentralized platform that allows you to create, manage, and pay invoices seamlessly on the blockchain.

- 🧾 **Decentralized Invoicing**: Request Network enables the creation and management of invoices on the blockchain, ensuring transparency, security, and trust between parties.
- 💰 **Efficient Payments**: The platform facilitates swift, secure payments in various cryptocurrencies, providing flexibility for global transactions.
- 🌐 **Collaborative Ecosystem**: Request Network empowers businesses and developers to integrate invoicing and payment functionalities into their applications, promoting innovation and collaboration!

For detailed instructions and more context, check out the [Developer Documentation](https://docs.request.network/).

## Installation

```shell
npx create-eth@latest -e arjanjohan/scaffold-request-extension
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