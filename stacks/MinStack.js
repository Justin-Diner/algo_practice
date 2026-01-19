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

// Different appraoch storing only the difference. Requires one less array. So if space is a concern, this is a better approach.
class MinStack {
    constructor() {
        this.min = Infinity;
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length === 0) {
            this.stack.push(0);
            this.min = val;
        } else {
            this.stack.push(val - this.min);
            if (val < this.min) this.min = val;
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.length === 0) return;

        const pop = this.stack.pop();

        if (pop < 0) this.min -= pop;
    }

    /**
     * @return {number}
     */
    top() {
        const top = this.stack[this.stack.length - 1];
        return top > 0 ? top + this.min : this.min;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min;
    }
}