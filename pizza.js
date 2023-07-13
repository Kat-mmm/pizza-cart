function pizzaCart() {
    return {
      itemsCart: [],
      show: false,
      total: 0,
      showPay: false,
      showCheckout: true,
      responseText: '',
      success: true,
      addPizza(size, price) {
        const existingPizza = this.itemsCart.find((pizza) => pizza.size === size);
        if (!existingPizza) {
          this.show = true;
          this.itemsCart.push({ size, price });
          this.total += price;
        }
      },
      addSmallPizza() {
        this.addPizza('Small', 31.99);
      },
      addMediumPizza() {
        this.addPizza('Medium', 58.99);
      },
      addLargePizza() {
        this.addPizza('Large', 87.99);
      },
      addToTotals(item) {
        item.price += item.price;
        this.total += item.price;
      },
      removeFromCart(index, item) {
        this.total -= item.price;
        item.price -= item.price;
        if (item.price === 0) {
          this.itemsCart.splice(index, 1);
        }
      },
      checkPayment(amount){
        if(amount >= this.total){
            this.responseText = 'Payment Successfull, Enjoy your pizza!';
            this.itemsCart = [];
            this.total = 0;
            setTimeout(()=>{
                this.show = false;
            }, 2000)
        }
        else{
            this.responseText = 'Sorry, that is not enough money!';
            this.success = false;
            setTimeout(()=>{
                this.responseText = '';
            }, 1500)
        }
      },
    };
}
  
document.addEventListener('alpine:init', () => {
    Alpine.data('pizzacart', pizzaCart);
});
  