class MinStack {
    constructor() {
        this.stack = [];
        this.minArr = [];
    }

    push(val) {
        this.stack.push(val);
        // Need to consider minArr
        if (this.minArr.length === 0) {
            this.minArr.push(val);
        } else {
            if (this.getMin() >= val) {
                this.minArr.push(val);
            }
        }
    }

    pop() {
        const val = this.stack.pop();
        if (val === this.getMin()) {
            this.minArr.pop();
        }

    }

    top() {
        if (this.stack.length > 0) {
            return this.stack[this.stack.length - 1];
        }
        return [];
    }

    getMin() {
        return this.minArr[this.minArr.length - 1];
    }
}