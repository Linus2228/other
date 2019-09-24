const Node = require('./node');

class LinkedList {
    constructor() { 
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        
        var node = new Node(data);
     if (this.length) {
        this._tail.next = node;
        node.prev = this._tail;
        this._tail = node;
    } else {
        this._head = node;
        this._tail = node;
        
    }

    this.length++;
    return this;
    }
        

    head() {
        if (this._head === null)
        return null; 
        else
            return this._head.data;
    }

    tail() {
        if (this._tail === null)
            return null;
        else
            return this._tail.data;
    }

    at(index) {
       var curNode = this._head, count = 0;
       while(count < index) {
           count++;
            curNode = curNode.next;
        }
        return curNode.data;
    }
    

    insertAt(index, data) {
        var count = 0, curNode = this._head;
        while(curNode) {
            if (count === index) {
                curNode.data = data;
                break; 
            }
            curNode = curNode.next;
            count++;
        }
        return this;
    }
    

    
    isEmpty() {
        if (this.length === 0) 
            return true; 
        else
            return false;
    }
 
    clear() {
        
        this._head = null;
        this._tail = null;
        this.length = 0;
        return this;
    }

    
    
    deleteAt(index) {
        var count = 0, curNode = this._head;
        if (index === 0) {
        this._head = this._head.next;
            } else {
        while (curNode) {
            if (count === index) {
                 if (curNode.next)
                 {
                    curNode.next.prev = curNode.prev;
                 }
                if (curNode.prev)
                 {
                     curNode.prev.next = curNode.next;
                  }
                this.length--;
                break;
            };
            curNode = curNode.next;
            count++;
        }
            };
        return this;
    }
    

    reverse() {
       var cur = this._head; 
        
         while(cur != null) {
        var next = cur.next;
        cur.next = cur.prev;
        cur = next
      }
      var temp = this._head;
      this._head = this._tail;
      this._tail = temp;
      return this
       
    }

    
    indexOf(data) {
        var curNode = this._head, count = 0, fail = -1;
            while(curNode) {
            if (curNode.data === data) 
                return count;
                count++;
            curNode = curNode.next;
        };
        return fail;
    }
}

module.exports = LinkedList;