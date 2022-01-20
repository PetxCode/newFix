// class NewLink {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//   }

//   append(value) {
//     let Node = { value: value, next: null };

//     if (this.tail) {
//       this.tail.next = Node;
//     }
//     this.tail = Node;
//     if (!this.head) {
//       this.head = Node;
//     }
//   }

//   prepent(value) {
//     let Node = { value: value, next: this.head };
//     this.head = Node;

//     if (!this.tail) {
//       this.tail = Node;
//     }
//   }

//   toRemove(value) {
//     if (!this.head) {
//       return;
//     }

//     let Node = this.head;

//     while (this.head && this.head.value === value) {
//       this.head = this.head.next;
//     }
//     while (Node.next) {
//       if (Node.value.next === value) {
//         Node.next = Node.next.next;
//       } else {
//         Node = Node.next;
//       }
//     }

//     if (this.tail.value === value) {
//       this.tail = Node;
//     }
//   }

//   toPrint() {
//     let element = [];
//     let Node = this.head;

//     while (Node) {
//       element.push(Node);
//       Node = Node.next;
//     }
//     return element;
//   }
// }

// const myLink = new NewLink();

// myLink.append("Hello");
// myLink.append("New Node");
// myLink.append("New Course");
// myLink.prepent("New Game");
// myLink.toRemove("New Game");

// console.log(myLink.toPrint());

class NewLink {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  toAppend(value) {
    let Node = { value: value, next: null };

    if (this.tail) {
      this.tail.next = Node;
    }
    this.tail = Node;
    if (!this.head) {
      this.head = Node;
    }
  }

  toPrepent(value) {
    let Node = { value: value, next: this.head };
    this.head = Node;

    if (!this.tail) {
      this.tail = Node;
    }
  }

  toRemove(value) {
    if (!this.head) {
      return;
    }

    while (this.head && this.head.value === value) {
      this.head = this.head.next;
    }
    let Node = this.head;

    while (Node.next) {
      if (Node.next.value === value) {
        Node.next = Node.next.next;
      } else {
        Node = Node.next;
      }
    }

    if (this.tail.value === value) {
      this.tail = Node;
    }
  }

  toPrint() {
    let element = [];
    let Node = this.head;

    while (Node) {
      element.push(Node);
      Node = Node.next;
    }
    return element;
  }
}

const myLink = new NewLink();

myLink.toAppend("Game");
myLink.toAppend("MediaLab");
myLink.toAppend("CodeLab");
myLink.toPrepent("SkillHub");
myLink.toRemove("Game");

console.log(myLink.toPrint());
