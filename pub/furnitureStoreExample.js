/* JS Library usage examples */
"use strict";


// Furniture Store Example
const furnitureDisplay = new ProductDisplayGenerator()
furnitureDisplay.makeProductCard("lightblue", "Premium Chair", 
	"A chair is a piece of furniture. It is used for sitting on and it can also be used for standing on,\
	 if you can't reach something. They usually have four legs to support the weight. Some types of chairs, \
	 	such as the bar-stool, have only one leg in the center. Those chairs are usually able to spin.",
	"images/chair.png",
	200,
	0.5,
	"BUY",
	10)
furnitureDisplay.makeProductCard("pink", "Fine Wood Desk", 
	"A desk or bureau is a piece of furniture with a flat table-style work surface used in a school, office, \
	home or the like for academic, professional or domestic activities such as reading, writing, or using \
	equipment such as a computer. Since many people lean on a desk while using it, a desk must be sturdy.", 
	"images/desk.png",
	200,
	1,
	"BUY",
	5)
furnitureDisplay.makeProductCard("lightblue", "Antique Lamp", 
	"a device for giving light, either one consisting of an electric bulb together with its holder and \
	shade or cover, or one burning gas or a liquid fuel and consisting of a wick or mantle and a glass shade.",
	"images/lamp.png",
	50,
	1,
	"BUY",
	10)
furnitureDisplay.makeProductCard("pink", "Natural Night Stand", 
	"A night stand is a small table or cupboard that you have next to your bed.", 
	"images/nightStand.png",
	75,
	1,
	"BUY",
	10)
furnitureDisplay.makeProductCard("lightblue", "Comfy Sofa", 
	"A couch, also known as a sofa, settee, futon, or chesterfield, is a piece of \
	furniture for seating two or three people. It is commonly found in the form of a bench, with \
	upholstered armrests, and often fitted with springs and tailored cushions. Although a couch is used \
	primarily for seating, it may be used for sleeping.",
	"images/sofa.png",
	575,
	0.33,
	"BUY",
	6)
furnitureDisplay.makeProductCard("pink", "Night Table", 
	"A decorative container, typically made of glass or china and used as an ornament or for displaying cut flowers.", 
	"images/nightTable.png",
	85,
	1,
	"BUY",
	2)
furnitureDisplay.makeProductCard("lightblue", "Sofa Chair", 
	"A decorative container, typically made of glass or china and used as an ornament or for displaying cut flowers.", 
	"images/sofaChair.png",
	149,
	1,
	"BUY",
	10)
furnitureDisplay.makeProductCard("pink", "Boring Table", 
	"A decorative container, typically made of glass or china and used as an ornament or for displaying cut flowers.", 
	"images/table.png",
	50,
	1,
	"BUY",
	6)
furnitureDisplay.makeProductCard("lightblue", "Modern Chair", 
	"A decorative container, typically made of glass or china and used as an ornament or for displaying cut flowers.", 
	"images/modernChair.png",
	99,
	1,
	"BUY",
	4)
furnitureDisplay.makeProductCard("pink", "Hard Wood Dresser", 
	"A decorative container, typically made of glass or china and used as an ornament or for displaying cut flowers.", 
	"images/dresser.png",
	220,
	1,
	"BUY",
	1)
furnitureDisplay.makeProductCard("lightblue", "Tv Stand", 
	"A decorative container, typically made of glass or china and used as an ornament or for displaying cut flowers.", 
	"images/tvStand.png",
	235,
	1,
	"BUY",
	8)
furnitureDisplay.makeProductCard("pink", "Coffee Table", 
	"A decorative container, typically made of glass or china and used as an ornament or for displaying cut flowers.", 
	"images/coffeeTable.png",
	60,
	1,
	"BUY",
	6)
furnitureDisplay.makeProductCard("lightblue", "Dining Set", 
	"A decorative container, typically made of glass or china and used as an ornament or for displaying cut flowers.", 
	"images/diningSet.png",
	1250,
	1,
	"BUY",
	2)
furnitureDisplay.makeProductCard("pink", "Ancient Desk", 
	"A decorative container, typically made of glass or china and used as an ornament or for displaying cut flowers.", 
	"images/ancientDesk.png",
	40,
	1,
	"BUY",
	3)
furnitureDisplay.makeProductCard("lightblue", "Ceramic Vase", 
	"A decorative container, typically made of glass or china and used as an ornament or for displaying cut flowers.", 
	"images/vase.png",
	60,
	1,
	"BUY",
	5)

furnitureDisplay.displayCart()
furnitureDisplay.placeDisplayCartBtn()
furnitureDisplay.displayCards()
furnitureDisplay.setStock("Premium Chair", 1)

const checkoutFunc = () => {console.log("Checkout function has been set!")}

furnitureDisplay.setCheckOutFunction(checkoutFunc)
