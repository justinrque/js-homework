class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    var item
    this.items.push(item);
    return item + " added"
  }

  pop() {
    if (this.items.length == 0)
      return "Stack is Empty";
    return this.items.pop() + " removed";
  }

  check() {
    return this.items[this.items.length - 1];
  }
}

var stack = new Stack();
console.log(stack.pop());
console.log(stack.push("Hello"));
console.log(stack.check());
console.log(stack.push("Noob"));
console.log(stack.check());
console.log(stack.pop());
console.log(stack.check());
