import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {
  static #allCarts = [];

  constructor() {
    ShoppingCart.#allCarts.push(this);
  }

  static listAll() {
    return [...ShoppingCart.#allCarts];
  }

  static findBy(id) {
    return ShoppingCart.#allCarts.find((cart) => cart.id === id);
  }

  id = getId();
  #cartItems = [];

  createItem(name, price) {
    const newItem = new CartItem(name, price);
    this.#cartItems.push(newItem);
    return newItem;
  }

  getItems() {
    return [...this.#cartItems];
  }

  removeItem(id) {
    this.#cartItems = this.#cartItems.filter((item) => item.id !== id);
  }

  getTotal() {
    return this.#cartItems.reduce((total, item) => total + item.price, 0);
  }
}

export default ShoppingCart;
