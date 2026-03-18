class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.word = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }

    /**
     * @param {string} word
     * @return {void}
     */

    getIndex(c) {
        return c.charCodeAt(0) - 'a'.charCodeAt(0);0.
    }

    addWord(word) {
        let curr = this.root;
        for (let c of word) {
            const idx = this.getIndex(c);
            if (!curr.children[idx]) {
                curr.children[idx] = new TrieNode();
            }
            curr = curr.children[idx];
        }
        curr.word = true;
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        return this.dfs(word, 0, this.root);
    }

    dfs(word, j, root) {
        let curr = root;

        for (let i = j; i < word.length; i++) {
            let c = word[i];
            if (c === '.') {
                for (let child of curr.children) {
                    if (child !== null && this.dfs(word, i+1, child)) {
                        return true;
                    }
                }
                return false;
            } else {
                const idx = this.getIndex(c);
                if (!curr.children[idx]) {
                    return false;
                }
                curr = curr.children[idx];
            }
        }
        return curr.word;
    }