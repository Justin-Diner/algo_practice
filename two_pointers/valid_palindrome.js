// Valid Palindrome
// O(n) time complexity O(1) space complexity
// You iterate through the string once.
// You use two pointers to check if the string is a palindrome.
// You skip non-alphanumeric characters.
// You compare the characters at the left and right pointers.
// You return true if the string is a palindrome, false otherwise.
isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !this.alphaNum(s[left])) {
            left++;
        }

        while(right > left && !this.alphaNum(s[right])) {
            right--;
        }



        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }
    return true;
}

alphaNum(c) {
    return (
        (c >= 'A' && c <= 'Z') ||
        (c >= 'a' && c <= 'z') ||
        (c >= '0' && c <= '9')
    );
}