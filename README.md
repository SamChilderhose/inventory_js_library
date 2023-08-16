# Inventory js-library
Landing Page: https://stylishinventory.herokuapp.com

About The Library:
======
Stylish Inventory is a JavaScript library for displaying any type of products or inventory in a pattern with each item having it's own individual card. Each card displays the relevant information such as title, description, price, whether its in stock and a "purchase" button for adding it to a cart. The library keeps track of which and how many items are available to purchase and the end user is able to view and edit what's in their cart from the cart button. 

See More detailed explanation: https://stylishinventory.herokuapp.com/aboutPage.html


Getting Started:
=======

All attributes and methods are made by calling on an instance of ProductDisplayGenerator().

stylishInstance = ProductDisplayGenereator()

Once instantiated, an instance of Stylish Inventory has the following attributes:

{
  cards: An array of product cards.
  
  cart: The cart object that holds the user's purchases and the cost.
  
  cart.items: an array of product cards. Multiples of the same one represents that the use wishes to purchase more than one.
  
  cart.total: a float repreating the total cost of the cart.
  
  numCards: the number of (unique) product cards total.
  
  numPages: the number of pages it takes to display all the product cards. Up to 6 cards are displayed on any given page.
  
  currPage: the current product card page being view. The currPage is always one less than the actual page number.
}

The product cards themselves are organized as follows:


{
  cardDiv: The div containing all the elements to display the card.
  
  price: The price of the product.
  
  stock: The quantity of the product available for purchase.
  
  cardId: The unique number id given to this product.
  
  imgPath: The path to the product image.
  
  bgColor: The color chosen the the backgrounds of the image. Note: it is recommended images have transparent backgrounds for this reason.
  
  productName: The name of the product.
  
  productDescription: A description of the product.
}



To create a display of product cards, first you must create the cards by calling on the methods makeProductCard or makeProductCardsByArray (see below for more detail in methods section).

Example Starter Code:

stylishInstance.makeProductCard("white", "title", "description", "/images/example.jpeg", 0.0, 3})

stylishInstance.displayCart()

stylishInstance.displayCartBtn()

stylishInstance.displayCards()





Methods:
=========

All of the following methods require you to have created an instance of Stylish Inventory by calling ProductDisplayGenerator(). All methods called make changes to that specific instance and not any other instances.


.makeProductCard(bgColor, title, description, imgPath, price, selectBtn, stock)
  Creates a product card and appends it to the card list.



.makeProductCardsByArray(arr)
Makes product cards from an array of js objects where the properties of each object are the arguments to the makeProductCard method.
Example of such an array:


[{bgColor: "white", title: "title", description: "description", imgPath: "/images/example.jpeg", price: 0.0, stock: 3}]



.displayCart()
Appends the cart modal to the document body. The displayCartBtn() method has to be calling afterward inorder to have the button to make the modal visible to the end-user.



.displayCartBtn()
Appends the cart button to the document body. It keeps track of how many items the end-user has in their cart and opens the cart modal where they can edit their cart and checkout.



.setStock(productName, newStock)
Finds the product card that matches the productName (a string) and sets its stock attribute to newStock (an int).



.getCartList()
Returns the list of products in the user's cart. Stylish Library is only a front end library so this function is for updating the backend.



.setCheckOutFunction(func)
Checkout functionality is not a part of this library but setChckOutFunction takes a function and sets it on the checkout button's onclick function.
Example Useage:
  
  
  
  testFunc: function() {console.log(test)}
  
  
  stylishInstance.setCheckOutFunction(testFunc)
