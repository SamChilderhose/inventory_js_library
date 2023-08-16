/* JS Library usage examples */
"use strict";


// Furniture Store Example
const clothingDisplay = new ProductDisplayGenerator()
clothingDisplay.makeProductCard("#ffccee", "Nice Shoe", 
	"A chair is a piece of furniture. It is used for sitting on and it can also be used for standing on,\
	 if you can't reach something. They usually have four legs to support the weight. Some types of chairs, \
	 	such as the bar-stool, have only one leg in the center. Those chairs are usually able to spin.",
	"images/shoe.png",
	600,
	0.33,
	"ORDER",
	3)
clothingDisplay.makeProductCard("#dbccff", "Dress Shirt", 
	"A chair is a piece of furniture. It is used for sitting on and it can also be used for standing on,\
	 if you can't reach something. They usually have four legs to support the weight. Some types of chairs, \
	 	such as the bar-stool, have only one leg in the center. Those chairs are usually able to spin.",
	"images/shirt.png",
	175,
	0,
	"ORDER",
	3)
clothingDisplay.makeProductCard("#ffccee", "Sporty Blouse", 
	"A chair is a piece of furniture. It is used for sitting on and it can also be used for standing on,\
	 if you can't reach something. They usually have four legs to support the weight. Some types of chairs, \
	 	such as the bar-stool, have only one leg in the center. Those chairs are usually able to spin.",
	"images/blouse2.png",
	150,
	0,
	"ORDER",
	3)
clothingDisplay.makeProductCard("#dbccff", "Blue Blouse", 
	"A chair is a piece of furniture. It is used for sitting on and it can also be used for standing on,\
	 if you can't reach something. They usually have four legs to support the weight. Some types of chairs, \
	 	such as the bar-stool, have only one leg in the center. Those chairs are usually able to spin.",
	"images/blouse4.png",
	85,
	0,
	"ORDER",
	3)
clothingDisplay.makeProductCard("#ffccee", "Old Dress", 
	"A chair is a piece of furniture. It is used for sitting on and it can also be used for standing on,\
	 if you can't reach something. They usually have four legs to support the weight. Some types of chairs, \
	 	such as the bar-stool, have only one leg in the center. Those chairs are usually able to spin.",
	"images/dress.png",
	179,
	0.45,
	"ORDER",
	3)
clothingDisplay.makeProductCard("#dbccff", "Drape Dress", 
	"A chair is a piece of furniture. It is used for sitting on and it can also be used for standing on,\
	 if you can't reach something. They usually have four legs to support the weight. Some types of chairs, \
	 	such as the bar-stool, have only one leg in the center. Those chairs are usually able to spin.",
	"images/dress2.png",
	325,
	0,
	"ORDER",
	3)
clothingDisplay.makeProductCard("#ffccee", "Leather Belt", 
	"A chair is a piece of furniture. It is used for sitting on and it can also be used for standing on,\
	 if you can't reach something. They usually have four legs to support the weight. Some types of chairs, \
	 	such as the bar-stool, have only one leg in the center. Those chairs are usually able to spin.",
	"images/belt.png",
	50,
	0.66,
	"ORDER",
	3)
clothingDisplay.displayCart()
clothingDisplay.placeDisplayCartBtn()
clothingDisplay.displayCards()
