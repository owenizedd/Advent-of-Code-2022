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


const input_main = `noop
noop
noop
addx 6
addx -1
addx 5
noop
noop
noop
addx 5
addx -8
addx 9
addx 3
addx 2
addx 4
addx 3
noop
addx 2
noop
addx 1
addx 6
noop
noop
noop
addx -39
noop
addx 5
addx 2
addx -2
addx 3
addx 2
addx 5
addx 2
addx 2
addx 13
addx -12
noop
addx 7
noop
addx 2
addx 3
noop
addx -25
addx 30
addx -10
addx 13
addx -40
noop
addx 5
addx 2
addx 3
noop
addx 2
addx 3
addx -2
addx 3
addx -1
addx 7
noop
noop
addx 5
addx -1
addx 6
noop
noop
noop
noop
addx 9
noop
addx -1
noop
addx -39
addx 2
addx 33
addx -29
addx 1
noop
addx 4
noop
noop
noop
addx 3
addx 2
noop
addx 3
noop
noop
addx 7
addx 2
addx 3
addx -2
noop
addx -30
noop
addx 40
addx -2
addx -38
noop
noop
noop
addx 5
addx 5
addx 2
addx -9
addx 5
addx 7
addx 2
addx 5
addx -18
addx 28
addx -7
addx 2
addx 5
addx -28
addx 34
addx -3
noop
addx 3
addx -38
addx 10
addx -3
addx 29
addx -28
addx 2
noop
noop
noop
addx 5
noop
addx 3
addx 2
addx 7
noop
addx -2
addx 5
addx 2
noop
addx 1
addx 5
noop
noop
addx -25
noop
noop`
const input_sample = `addx 15
addx -11
addx 6
addx -3
addx 5
addx -1
addx -8
addx 13
addx 4
noop
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx 5
addx -1
addx -35
addx 1
addx 24
addx -19
addx 1
addx 16
addx -11
noop
noop
addx 21
addx -15
noop
noop
addx -3
addx 9
addx 1
addx -3
addx 8
addx 1
addx 5
noop
noop
noop
noop
noop
addx -36
noop
addx 1
addx 7
noop
noop
noop
addx 2
addx 6
noop
noop
noop
noop
noop
addx 1
noop
noop
addx 7
addx 1
noop
addx -13
addx 13
addx 7
noop
addx 1
addx -33
noop
noop
noop
addx 2
noop
noop
noop
addx 8
noop
addx -1
addx 2
addx 1
noop
addx 17
addx -9
addx 1
addx 1
addx -3
addx 11
noop
noop
addx 1
noop
addx 1
noop
noop
addx -13
addx -19
addx 1
addx 3
addx 26
addx -30
addx 12
addx -1
addx 3
addx 1
noop
noop
noop
addx -9
addx 18
addx 1
addx 2
noop
noop
addx 9
noop
noop
noop
addx -1
addx 2
addx -37
addx 1
addx 3
noop
addx 15
addx -21
addx 22
addx -6
addx 1
noop
addx 2
addx 1
noop
addx -10
noop
noop
addx 20
addx 1
addx 2
addx 2
addx -6
addx -11
noop
noop
noop`

const inp = input_main.split('\n');

let cycle = 0;
let x = 1;
let sum = 0;
const sumAt = [20, 60, 100, 140, 180, 220]
const mapping = {
  'addx': 2,
  'noop': 1,
}
let CRT = new Array(6).fill(0).map(() => new Array(40).fill(0));
function canSum(cmd) {
  const res = sumAt.filter((s, index) => {
    if (cycle >= s) {
      sumAt.splice(index, 1)
      return true;
    }
    return false;
  })
  return Boolean(res.length);
}

function draw() {
  let row = Math.ceil((cycle) / 40);

  let col = (cycle - 1) % 40;
  let intersected = col >= x - 1 && col <= x + 1;
  p(row - 1, col)
  CRT[row - 1][col] = intersected ? '#' : '.';
}

function solve1() {
  for (let i = 0; i < inp.length; i++) {

    const [cmd, val] = inp[i].split(' ')
    for (let j = 0; j < mapping[cmd]; j++) {
      cycle++;

      // part1
      // if (canSum(cmd)) {
      //   p('data ', cycle, x, sum);
      //   sum += (cycle * x)
      // }

      //part2
      draw();

    }
    if (cmd === 'addx') {
      x += Number(val);
    }

  }
}

// part1
// p(sum);
CRT.forEach(l => p(l.join('')))