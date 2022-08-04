// https://www.hackerrank.com/challenges/sock-merchant/problem

const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

function count(arr, item) {
    let count = {}
    for (let i of arr) {
        count[i] = (count[i] || 0) + 1
    }
    return count[item]
}

let res = 0
for (let item of [... new Set(ar)]) {
    res += Math.floor(count(ar,item) / 2)
}

console.log(res);