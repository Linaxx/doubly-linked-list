const Node = require('./node');

class LinkedList {
    
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }

    append(data) {
        var curr = new Node(data, this._tail, null);
        
        if(!this._head) {
            this._head = curr;
        }
        if(this._tail) {
            this._tail.next = curr;
        }
        this._tail = curr;
        this.length += 1;
        
        return this;
    }

    head() {
        return (this._head || {}).data || null;
    }

    tail() {
        return (this._tail || {}).data || null;
    }

    _at(index) {
        var el = this._head;
        
        for(var i = 1; i <= index; i++) {
            if(!el) {
                break;
            }
            el = el.next;
        }
        
        return el;
    }
    
    at(index) {
        return (this._at(index) || {}).data || null;
    }

    insertAt(index, data) {
        var el = this._at(index);
        var curr = new Node(data, (el || {}).prev, el);
        
        if((el || {}).prev) {
            el.prev.next = curr;
        }
        
        if(el) {
            el.prev = curr;
        }
        this.length += 1;

        return this;
    }

    isEmpty() {
        return !this._head && !this._tail;
    }

    clear() {
        this._head = null;
        this._tail = null;
        this.length = 0;
        
        return this;
    }

    deleteAt(index) {
        var el = this._at(index) || {};
        
        if(el.prev) {
            el.prev.next = el.next;
        }
        if(el.next) {
            el.next.prev = el.prev;
        }
        
        this.length -= 1;

        return this;
    }

    reverse() {
        if(this.isEmpty()) {
            return;
        }

        var head = this._head;
        var tail = this._tail;
        
        this._head = tail;
        this._tail = head;
        
        while(head){
            var temp = head.prev;
            head.prev = head.next;
            head.next = temp;
            head = head.prev;
        }
        
        return this;        
    }

    indexOf(data) {
        var el = this._head;
        var i = 0;
        while(el) {
            if(el.data == data) {
                return i;
            }
            el = el.next;
            i++;
        }
        
        return -1;
    }
}

module.exports = LinkedList;
