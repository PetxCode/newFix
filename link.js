function Link2() {
  let length = 0;
  let head = null;

  let Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
    let node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };
}

function LinkList() {
  let length = 0;
  let head = null;

  this.Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };
  this.head = function () {
    return head;
  };

  this.add = function (element) {
    let newNode = new Node(element);

    if (head === null) {
      newNode = head;
    } else {
      newNode = node;

      while (newNode.next) {
        newNode = newNode.next;
      }
      newNode.next = node;
    }
    length++;
  };

  this.remove = function (element) {
    let currentNode = head;
    let prevNode;

    if (currentNode.next === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        prevNode = currentNode;
        currentNode = currentNode.next;
      }
      prevNode.next = currentNode.next;
    }
    length--;
  };
}
