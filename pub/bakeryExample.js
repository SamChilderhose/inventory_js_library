/* JS Library usage examples */
"use strict";


const bakeryDisplay = new ProductDisplayGenerator()
bakeryDisplay.makeProductCard("#ffcdc9", "Birthday Cake", 
	"An item of soft, sweet food made from a mixture of flour, shortening, eggs, sugar, and other \
	ingredients, baked and often decorated.",
	"images/birthdayCake.png",
	40,
	0.5,
	"ORDER",
	0)
bakeryDisplay.makeProductCard("#ffcdc9", "Croissant", 
	"A croissant is a buttery, flaky, viennoiserie pastry of Austrian origin, named for its \
	historical crescent shape. Croissants and other viennoiserie are made of a layered yeast-leavened dough.", 
	"images/croissant.png",
	5,
	1,
	"ORDER",
	10)
bakeryDisplay.makeProductCard("#ffcdc9", "Donut", 
	"A doughnut or donut is a type of fried dough confection or dessert food. It is popular \
	in many countries and is prepared in various forms as a sweet snack that can be homemade \
	or purchased in bakeries, supermarkets, food stalls, and franchised specialty vendors.",
	"images/donut.png",
	2.25,
	0.5,
	"ORDER",
	10)
bakeryDisplay.makeProductCard("#ffcdc9", "macarons", 
	"A night stand is a small table or cupboard that you have next to your bed.", 
	"images/macaron.png",
	15,
	1,
	"ORDER",
	10)
bakeryDisplay.makeProductCard("#ffcdc9", "Cupcake", 
	"A couch, also known as a sofa, settee, futon, or chesterfield, is a piece of \
	furniture for seating two or three people. It is commonly found in the form of a bench, with \
	upholstered armrests, and often fitted with springs and tailored cushions. Although a couch is used \
	primarily for seating, it may be used for sleeping.[3] In homes, couches are normally put in the \
	family room, living room, den or lounge.",
	"images/cupcake.png",
	2,
	0.25,
	"ORDER",
	10)
bakeryDisplay.makeProductCard("#ffcdc9", "Cheesecake", 
	"A decorative container, typically made of glass or china and used as an ornament or for displaying cut flowers.", 
	"images/cheesecake.png",
	30,
	1,
	"ORDER",
	10)
bakeryDisplay.displayCart()
bakeryDisplay.placeDisplayCartBtn()
bakeryDisplay.displayCards()