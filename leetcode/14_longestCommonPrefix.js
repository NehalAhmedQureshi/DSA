function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    
    let prefix = strs[0]; // Start by assuming the first string is the longest common prefix
    
    for (let i = 1; i < strs.length; i++) {
        console.log('prefix =>',prefix)
        // Keep trimming the prefix until it's a prefix of strs[i]
        console.log(strs[i].indexOf(prefix))
        while (strs[i].indexOf(prefix) !== 0) {
            console.log("second",prefix.length)
            prefix = prefix.slice(0, prefix.length - 1); // Shorten the prefix by one character
            if (prefix === "") return ""; // If no common prefix exists
        }
    }
    console.log(prefix)
    return prefix;
}
longestCommonPrefix(["gap", "gasp"]); // Output: "fl"
// console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
