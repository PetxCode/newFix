class BuildLink {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const Node = { value: value, next: null };

    if (this.tail) {
      this.tail.next = Node;
    }
    this.tail = Node;
    if (!this.head) {
      this.head = Node;
    }
  }

  perpent(value) {
    let Node = { value: value, next: this.head };
    this.head = Node;
    if (this.head) {
      this.head = Node;
    }
  }

  remove(value) {
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

  toView() {
    const element = [];
    let Node = this.head;

    while (Node) {
      element.push(Node);
      Node = Node.next;
    }
    return element;
  }
}

const build = new BuildLink();

build.append("Helloo");
build.append("Peter");
build.append("Bukky");
build.perpent("Lizzy");

console.log(build.toView());

const textBuild = (text) => {
  const letter = "abcdefghijklmnopqrstuvwxyz".split("");

  return text.replace(/[a-z]/gi, function (el) {
    return letter.indexOf(el.toLowerCase()) + 1;
  });
};

console.log(textBuild("I am Peter!"));
