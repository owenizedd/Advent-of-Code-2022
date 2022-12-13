const algo = require('algorithms');
const { abs } = require('mathball');

//setup 

function p(...args) { console.log(...args) }

const ds = algo.DataStructures
const maxHeap = new ds.Heap.MaxHeap()
const minHeap = new ds.Heap.MinHeap()
const graph = new ds.Graph(true) // false to undirected
const binarySearch = algo.Search.binarySearch; // function returns -1 if not found
const set = new Set();
const pq = new ds.PriorityQueue();

const input1 = ``
const input2 = ``
const inp = input1.split('\n')
p(inp);
