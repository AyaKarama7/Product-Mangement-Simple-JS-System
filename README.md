# Product Management System

This is a simple web-based CRUD (Create, Read, Update, Delete) application for managing products. It allows you to add, view, update, and delete product information. The data is stored locally in your browser using `localStorage`.

## Features

* **Add Products:** Add new products with a name, category, price, and description.
* **View Products:** See a list of all your products in a clean, table format.
* **Update Products:** Easily edit the details of existing products.
* **Delete Products:** Remove products you no longer need.
* **Search Functionality:** Quickly find products by searching for their name.
* **Mark as Complete:** A "check" feature to mark products as completed or handled.
* **Persistent Storage:** Your product list is saved in your browser's `localStorage`, so your data will be there when you return.

## Technologies Used

* HTML
* CSS
* JavaScript

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You will need a modern web browser that supports HTML5, CSS3, and JavaScript.

### Installation

1.  Clone the repo:
    ```sh
    git clone https://github.com/ayakarama7/product-mangement-simple-js-system.git
    ```
2.  Navigate to the project directory:
    ```sh
    cd product-mangement-simple-js-system
    ```

## Usage

1.  Open the `index.html` file in your web browser.
2.  To add a new product, fill out the "Product Name," "Product Category," and "Price" fields, and optionally add a "Description". Then click "Add Product".
3.  To see the list of all products, click the "Show Products" button. This will take you to the `table.html` page.
4.  On the product table page, you can:
    * **Search:** Use the search bar to filter products by name.
    * **Mark as Done:** Click the checkmark icon to mark a product as complete.
    * **Delete:** Click the 'X' icon to delete a product.
    * **Update:** Click the pen icon to edit a product's details. This will take you back to the main page with the product's information pre-filled. Make your changes and click "Save Product".

## File Structure
```
/
|-- index.html
|-- table.html
|-- index.js
|-- index1.js
|-- indexStyle.css
`-- tableStyle.css
```

* **`index.html`**: The main page for adding and updating products.
* **`table.html`**: The page for displaying the list of products.
* **`index.js`**: The JavaScript logic for the `index.html` page (adding and updating products).
* **`index1.js`**: The JavaScript logic for the `table.html` page (displaying, deleting, searching, and checking off products).
* **`indexStyle.css`**: The stylesheet for `index.html`.
* **`tableStyle.css`**: The stylesheet for `table.html`.
