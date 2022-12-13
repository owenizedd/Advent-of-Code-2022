const algo = require('algorithms');

//setup 

function p(...args) { console.log(...args) }

const ds = algo.DataStructures
const maxHeap = new ds.Heap.MaxHeap()
const minHeap = new ds.Heap.MinHeap()
const graph = new ds.Graph(true) // false to undirected
const binarySearch = algo.Search.binarySearch; // function returns -1 if not found
const set = new Set();
const pq = new ds.PriorityQueue();


const input_main = `
99, 67, 92, 61, 83, 64, 98
* 17
3
4
2

78, 74, 88, 89, 50
* 11
5
3
5

98, 91
+ 4
2
6
4

59, 72, 94, 91, 79, 88, 94, 51
* old
13 
0
5

95, 72, 78
+ 7
11
7
6

76
+ 8
17
0
2

69, 60, 53, 89, 71, 88
+ 5
19
7
1

72, 54, 63, 80
+ 3
7
1
3`

const input_sample = `
79, 98
* 19
23
2
3

54, 65, 75, 74
+ 6
19
2
0

79, 60, 97
* old
13
1
3

74
+ 3
17
0
1`

const inp = input_sample.split('\n').filter(line => line)

const data = [];
let tmp = [];
inp.forEach((l, indx) => {
  if (indx % 5 == 0) {
    const vals = l.split(',').map(val => +val)
    if (tmp.length)
      data.push(tmp), tmp = [vals];
    else tmp = [vals]
  }
  else tmp.push(l)
})
data.push(tmp);


let inspect = new Array(data.length).fill(0);
const MOD = 9699690;
let rounds = 20;
while (rounds--) {

  for (let i = 0; i < data.length; i++) {
    const nums = [...data[i][0]];
    data[i][0] = [];
    for (let j = 0; j < nums.length; j++) {
      inspect[i]++;
      let newVal = nums[j];
      const [op, amt] = data[i][1].split(' ');
      const calc = (val, op, amt) => {
        if (op == '+')
          return val + amt
        else
          return val * amt

      }
      if (amt == 'old') {
        newVal = calc(newVal, op, newVal)
      }
      else {
        newVal = calc(newVal, op, amt)
      }
      newVal %= MOD;
      const div = +data[i][2];
      if (newVal % div == 0) data[+data[i][3]][0].push(newVal)
      else data[+data[i][4]][0].push(newVal)
    }
  }
}
p(data);
p(inspect);
inspect.sort((a, b) => a - b);
p(inspect[inspect.length - 1] * inspect[inspect.length - 2])

/**
 * 
10197

 */