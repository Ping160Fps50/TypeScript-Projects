var ListNode = /** @class */ (function () {
    function ListNode(value) {
        this.value = value;
    }
    return ListNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
    }
    LinkedList.prototype.add = function (value) {
        var node = new ListNode(value);
        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    };
    Object.defineProperty(LinkedList.prototype, "numberOfElements", {
        get: function () {
            return this.length;
        },
        enumerable: false,
        configurable: true
    });
    LinkedList.prototype.print = function () {
        var current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    };
    return LinkedList;
}());
var numberList = new LinkedList();
numberList.add(1);
numberList.add(2);
numberList.add(3);
console.log(numberList.numberOfElements);
console.log("---------------------");
console.log(numberList.print());
var nameList = new LinkedList();
