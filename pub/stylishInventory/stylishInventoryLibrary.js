/* JS Libraries */
"use strict";


(function(global, document) {

	function ProductDisplayGenerator() {
		this.cards = []
		this.cart = {
			items: [],
			total: 0.0,
		}
		this.numCards = 0
		this.numPages = 0
		this.currPage = 0
	}

	ProductDisplayGenerator.prototype = {

		placeDisplayCartBtn: function(modal) {
			const showCartBtn = document.createElement('BUTTON')
			showCartBtn.innerHTML = "CART (0)"
			showCartBtn.className = "cartBtn"
			showCartBtn.style = "width: 100px;"
			showCartBtn.onclick = () => {
				let modal = document.getElementById("myModal");
				this.updateItemizedCardList()
				this.updateCartTotal()
				if (modal) { 
					modal.style.display = "block";
				}
			}
			document.body.appendChild(showCartBtn)
		},

		displayCart: function() {
			let cartModal = document.createElement('div')
			cartModal.className = "cartModal"
			const cartModalContent = document.createElement('div')
			cartModalContent.className = "cartModalContent"

			const closeBtn = document.createElement('span')
			closeBtn.className = "close"
			closeBtn.innerHTML = "&times;"
			closeBtn.onclick = function() {
				let modal = document.getElementById("myModal");
				if (modal) { 
					modal.style.display = "none";
				}
			}
			cartModalContent.appendChild(closeBtn)

			const cartTitle = document.createElement('h2')
			cartTitle.innerHTML = "Cart"
			cartModalContent.appendChild(cartTitle)
			
			const itemizedCartList = document.createElement('div')
			itemizedCartList.className = "itemizedCartList" 
			const itemsInList = this.createCartItems()
			itemizedCartList.appendChild(itemsInList)
			cartModalContent.appendChild(itemizedCartList)

			const cartTotal = document.createElement('h3')
			cartTotal.className = "cartTotal"
			cartTotal.innerHTML = "Total: $" + "0.00"
			cartModalContent.appendChild(cartTotal)

			const checkoutBtnWrapper = document.createElement('a')
			checkoutBtnWrapper.id = "checkoutBtnWrapper"
			const checkoutBtn = document.createElement('BUTTON')
			checkoutBtn.className = "checkoutBtn"
			checkoutBtn.innerHTML = "CHECKOUT"
			checkoutBtnWrapper.appendChild(checkoutBtn)
			cartModalContent.appendChild(checkoutBtnWrapper)

			cartModal.appendChild(cartModalContent)

			cartModal.style.display = "none"
			cartModal.id = "myModal"

			document.body.appendChild(cartModal)
		},

		createCartItems: function(cartDisplay){
			const itemizedCartList = document.createElement('div')

			for (let i = 0; i < this.cart.items.length; i++) {
				const itemToAdd = this.cart.items[i]
				const itemCard = document.createElement('div')
				itemCard.className = "itemInCart"

				const imgWrapper = document.createElement('div')
				imgWrapper.style = "height: 80px; float: left; display: inline-block; display: flex; background-color: " + itemToAdd.bgColor + "; border-radius: 100%; align-items: center;"
				const img = document.createElement('img');
				img.src = itemToAdd.imgPath
				img.className="itemImage"
				imgWrapper.appendChild(img)
				itemCard.appendChild(imgWrapper)

				const productNameWrapper = document.createElement('div')
				productNameWrapper.className = "itemName"
				const productName = document.createElement('h3')
				productName.innerHTML = itemToAdd.productName
				productNameWrapper.appendChild(productName)
				itemCard.appendChild(productNameWrapper)

				const removeFromCart = document.createElement('span')
				removeFromCart.className = "removeFromCartBtn"
				removeFromCart.innerHTML = "&times;"
				removeFromCart.onclick = () => {
					let list = this.cart.items
					let cartBtn = document.getElementsByClassName('cartBtn')[0]

					this.cards[this.cart.items[i].cardId].stock += 1
					let stockDiv = document.getElementById('stockDiv' + this.cart.items[i].cardId)
					let imgWrapper = document.getElementById(this.cart.items[i].cardId)
					if (stockDiv) {
						stockDiv.innerHTML = "In Stock"
					}
					if (imgWrapper) {
						imgWrapper.style.filter = "grayscale(0%)"
					}



					list.splice(i, 1)
					this.cart.items = list
					this.updateItemizedCardList()
					this.updateCartTotal()
					cartBtn.innerHTML = "CART (" + this.cart.items.length + ")"
				}
				itemCard.appendChild(removeFromCart)

				const price = document.createElement('p')
				price.className = "itemPrice"
				price.innerHTML = "$" + itemToAdd.price.toFixed(2)
				itemCard.appendChild(price)

				itemizedCartList.appendChild(itemCard)
			}
			return itemizedCartList
		},

		updateItemizedCardList: function() {
			let itemizedCardList = document.getElementsByClassName('itemizedCartList')[0]
			if (itemizedCardList){
				itemizedCardList.innerHTML = ""
				const itemList = this.createCartItems()
				itemizedCardList.appendChild(itemList)
			}
		},

		updateCartTotal: function() {
			let cartTotal = 0
			for (let i = 0; i < this.cart.items.length; i++) {
				cartTotal += (this.cart.items[i].price)
			}
			cartTotal = cartTotal.toFixed(2)
			let cartTotalDiv = document.getElementsByClassName('cartTotal')[0]
			cartTotalDiv.innerHTML = "Total: $" + cartTotal

		},

		createShowCartButton: function(modal){
			const showCartBtn = document.createElement('BUTTON')
			showCartBtn.id = "cart"
			showCartBtn.innerHTML = "Cart"
			showCartBtn.onclick = this.showCart();
			
			const btnWrapper = document.createElement('div')
			btnWrapper.style = "text-align: right;"
			btnWrapper.appendChild(showCartBtn)
			return btnWrapper
		},



		displayCards: function() {
			const fullDisplay = document.createElement('div')
			const cardDisplay = document.createElement('div')
			cardDisplay.id = "cardDisplay"
			cardDisplay.style = "margin-left: 70px; height: 660px; display: block; position: relative;"

			let numCardsToShow = this.cards.length
			if (this.cards.length > 6) {
				numCardsToShow = 6
			}
			for (let i = 0; i < numCardsToShow; i++) {
				cardDisplay.appendChild(this.cards[i].cardDiv)
			}
			
			if ((this.numCards % 6) > 0 && (this.numCards % 6) >= 3 ){
				this.numPages = Number((this.numCards / 6).toFixed(0))
			} else if ((this.numCards % 6) > 0 && (this.numCards % 6) < 3 ){
				this.numPages = Number((this.numCards / 6).toFixed(0)) + 1
			} else {
				this.numPages = this.numCards / 6
			}
			const pageBar = this.selectPageBtns()

			fullDisplay.appendChild(cardDisplay)
			fullDisplay.appendChild(pageBar)
			document.body.appendChild(fullDisplay)

			const toast = document.createElement('div')
			toast.id = "toast"
			toast.innerHTML = "Added to Cart"
			document.body.appendChild(toast)
		},

		updateCardsDisplay: function() {
			let cardDisplay = document.getElementById("cardDisplay")
			cardDisplay.innerHTML = ""
			let i = this.currPage * 6
			let lastCardToAdd = this.numCards
			if ( ((this.currPage + 1) * 6) < this.numCards) {
				lastCardToAdd = (this.currPage + 1) * 6
			}

			let currCardNum = 0
			for ( i; i < lastCardToAdd; i++) {
				this.cards[i].cardDiv.className = ("cardFadeIn" + currCardNum)
				currCardNum += 1
				cardDisplay.appendChild(this.cards[i].cardDiv)
			}

			let currPageText = document.getElementById("currPageText")
			currPageText.innerHTML = "Page: " + (this.currPage + 1) + " of " + this.numPages
		},

		selectPageBtns: function() {
			const selectPageBar = document.createElement('div')
			selectPageBar.style = "display: block; float: right; margin-right: 150px; clear: left;"
			const prevBtn = document.createElement('a')
			prevBtn.className = "pageBtn"
			prevBtn.innerHTML = "&#8249;"
			prevBtn.onclick = () => {
				if (this.currPage > 0) {
					this.currPage -= 1
					this.updateCardsDisplay()
				}
			}

			const nextBtn = document.createElement('p')
			nextBtn.className = "pageBtn"
			nextBtn.innerHTML = "&#8250;"
			nextBtn.onclick = () => {
				if ((this.currPage + 1) < this.numPages) {
					this.currPage += 1
					this.updateCardsDisplay()
				}
			}

			const currPageText = document.createElement('p')
			currPageText.id = "currPageText"
			currPageText.style = "display: inline; margin-left: 10px; margin-right: 10px; margin-top: 0px;"
			currPageText.innerHTML = "Page: " + (this.currPage + 1) + " of " + this.numPages

			selectPageBar.appendChild(prevBtn)
			selectPageBar.appendChild(currPageText)
			selectPageBar.appendChild(nextBtn)
			return selectPageBar
		},

		makeProductCard: function(bgColor, title, description, imgPath, price, sale, selectBtnName, stock) {
			const cardDiv = document.createElement('div');
			cardDiv.style = "padding: 10px; padding-bottom: 0px; float: left; margin: 10px; width: 400px; height: 300px; border: 2px dashed lightgrey; border-radius: 20px;"
			cardDiv.setAttribute("id", this.numCards)

			let cardPrice = 0;
			if (sale === 1) {
				cardPrice = price
			} else {
				cardPrice = (price * (1 - sale))
			}

			let card = {
				cardDiv: cardDiv,
				price: cardPrice,
				stock: stock,
				cardId: this.numCards,
				imgPath: imgPath,
				bgColor: bgColor,
				productName: title,
				productDescription: description,
			}

			const image = this.createImageContainer(imgPath, bgColor, stock, card)
			cardDiv.appendChild(image)
			const productTitle = this.createProductTitle(title)
			cardDiv.appendChild(productTitle)
			const priceDiv = this.createProductPrice(price, sale)
			cardDiv.appendChild(priceDiv)
			const stockDiv = this.createProductStock(stock, card.cardId)
			cardDiv.appendChild(stockDiv)
			const productBtn = this.createProductButton(selectBtnName, card)
			cardDiv.appendChild(productBtn)
			const productDescription = this.createProductDescription(description)
			cardDiv.appendChild(productDescription)
			card.cardDiv = cardDiv

			this.numCards += 1;
			this.cards.push(card)
		},

		makeProductCardsByArray: function(arr) {
			for (let i = 0; i < are.length; i++) {
				this.makeProductCard(arr[i].bgColor, arr[i].title, arr[i].description, arr[i].imgPath, arr[i],sale, arr[i].selectBtn, arr[i].stock)
			}
		},

		createImageContainer: function(imgPath, bgColor, stock, card) {
			const image = this.handleProductImage(imgPath, bgColor, stock, card);
			const container = document.createElement('div');
			container.style = "margin-right: 25px; display: inline-block; float: left;"
			container.appendChild(image);
			return container;
		},

		handleProductImage: function(imgPath, bgColor, stock, card) {
			let greyscale
			if (stock === 0){
				greyscale = " filter: grayscale(100%); "
			} else {
				greyscale = " filter: grayscale(0%);"
			}

			const container = document.createElement('div');
			container.id = "imgWapper" + card.cardId
			container.style = "background-color: " + bgColor +"; border-radius: 100%; \
				display: flex; align-items: center; width: 150px; height: 200px; \
				margin-top:5px;" + greyscale
			container.id = this.numCards
			const img = document.createElement('img');
			img.src = imgPath
			img.style = "width: 150px;" + greyscale
			container.onmouseover = function() {container.style = "background-color: " + bgColor +"; \
				border-radius: 100%; display: flex; align-items: center; width: 150px; height: \
				200px; cursor: pointer; filter: brightness(110%); margin-top: 0px; \
				margin-bottom: 5px;"}
			container.onmouseout = function() {container.style = "background-color: " + bgColor +"; \
				border-radius: 100%; display: flex; align-items: center; width: 150px; height: 200px; \
				filter: brightness(100%); margin-top: 5px; margin-bottom: 0px;" + greyscale}
			container.appendChild(img);
			container.onclick = this.resizeProductCard
			return container
		},

		createProductTitle: function(title) {
			const productTitle = document.createElement('div')
			productTitle.innerHTML = "<h2> " + title + " </h2>"
			productTitle.style = "text-align: right;"
			return productTitle
		},

		createProductDescription: function(description) {
			const desc = document.createElement('div')
			desc.innerHTML = description
			desc.style = "text-align: justify; text-justify: inter-word; "
			return desc
		},

		createProductPrice: function(price, sale) {
			const priceDiv = document.createElement('div')
			if (sale === 1) {
				priceDiv.innerHTML = "$" + price.toFixed(2)
				priceDiv.style = "color: black; margin: 0px; text-align: right; font-weight: bold;"
			} else {
				priceDiv.innerHTML = "<strike style=\"color: grey;\"> $" + (price) + " </strike> SALE: $" + (price * (1 - sale)).toFixed(2)
				priceDiv.style = "color: red; margin: 0px; text-align: right; font-weight: bold;"
			}
			
			
			return priceDiv
		},

		createProductStock: function(stock, cardId) {
			const stockDiv = document.createElement('div')
			stockDiv.id = 'stockDiv' + cardId
			if (stock !== 0){
				stockDiv.innerHTML = "In Stock"
			} else {
				stockDiv.innerHTML = "Out of Stock"
			}
			
			stockDiv.style = "text-align: right; font-weight: bold;"
			return stockDiv
		},

		createProductButton: function(selectBtnName, card) {
			const productBtn = document.createElement('BUTTON')
			productBtn.className = "productBtn"
			productBtn.innerHTML = selectBtnName
			productBtn.onclick = () => {
				let cartBtn = document.getElementsByClassName('cartBtn')[0]
				if (card.stock !== 0) {
					let toast = document.getElementById("toast");
  					toast.className = "show";
  					setTimeout(function(){ toast.className = toast.className.replace("show", ""); }, 3000)



					this.cart.items.push(card)
					card.stock -= 1
					cartBtn.innerHTML = "CART (" + this.cart.items.length + ")" 
					if (card.stock === 0){
						let stockDiv = document.getElementById('stockDiv' + card.cardId)
						let imgWrapper = document.getElementById(card.cardId)
						if (stockDiv) {
							stockDiv.innerHTML = "Out of Stock"
						}
						if (imgWrapper) {
							imgWrapper.style.filter = "grayscale(100%)"
						}
					}
				}
			}

			
			const btnWrapper = document.createElement('div')
			btnWrapper.style = "text-align: right;"
			btnWrapper.appendChild(productBtn)
			return btnWrapper
		},

		setStock: function(productName, newStock) {
			for (let i = 0; i < this.cards.length; i++) {
				if (this.cards[i].productName === productName) {
					this.cards[i].stock = newStock
				}
			}
		},

		getCartList: function() {
			return this.cart.items
		},

		setCheckOutFunction: function(func) {
			let checkoutBtn = document.getElementsByClassName("checkoutBtn")[0]
			checkoutBtn.onclick = func;

		},

		resizeProductCard: function() {
			
		},
	}
	global.ProductDisplayGenerator = global.ProductDisplayGenerator || ProductDisplayGenerator
})(window, window.document)