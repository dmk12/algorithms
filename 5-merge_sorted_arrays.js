function mergeSortedArrays(a, b) {
    var x = 0, y = 0;
    var result = [];
    while (x < a.length && y < b.length) {
        if (a[x] < b[y]) {
            result.push(a[x]);
            x++;
        }
        else {
            result.push(b[y]);
            y++;
        }
    }
    while (x < a.length) {
        result.push(a[x]);
        x++;
    }
    while (y < b.length) {
        result.push(b[y]);
        y++;
    }
    return result;
}
console.log(mergeSortedArrays([1, 5, 5, 5, 7, 7, 7, 9], [1, 2, 6, 7, 13]));
