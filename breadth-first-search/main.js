const { InvalidGraphError } = require('../exceptions/invalid-graph-exception'),
  { InvalidNodeError } = require('../exceptions/invalid-node-exception');

class Graph {
  constructor() {
    this.nodes = [];
    this.adjecencyList = new Map();
    this.childNodes = [];
  }

  addNodes = nodesToAdd => {
    for (const node in nodesToAdd) {
      this.nodes = [...this.nodes, nodesToAdd[node]];
      this.adjecencyList.set(nodesToAdd[node], []);
    }
  }

  addAdjecentNodes = (referenceNode, adjecentNodes) => {
    const nodeExists = this.adjecencyList.get(referenceNode);
    if (nodeExists) {
      for (const node in adjecentNodes) {
        const currentAdjecentNodes = this.adjecencyList.get(referenceNode);
        this.adjecencyList.set(referenceNode, [...currentAdjecentNodes, adjecentNodes[node]]);
      }
    } else {
      console.log('Node does not exist');
    }
  }

  searchChildNodes = referenceNode => {
    const nodeExists = this.adjecencyList.get(referenceNode);
    if (nodeExists) {
      for (const node in nodeExists) {
        const child = this.nodes.find(elem => elem === nodeExists[node]);
        if (child) {
          this.childNodes = [...this.childNodes, child];
          this.searchChildNodes(child);
        } else {
          this.childNodes = [...this.childNodes, nodeExists[node]];
        }
      }
    } else {
      console.log('Node does not exist');
    }
  }
}

class FifoQueue {
  constructor() {
    this.queue = [];
  }

  enqueue = element => {
    this.queue = [element, ...this.queue];
  }

  dequeue = () => {
    this.queue.pop();
  }

  getLength = () => {
    return this.queue.length;
  }

}

class GraphSearch {
  constructor() {
    this.visitedNodes = [];
    this.queue = new FifoQueue();
    this.distance = new Map();
  }

  initialDistance = (rootNode, node) => {
    this.distance.set(rootNode, 0);
    this.distance.set(node, Infinity);
  }

  incrementDistance = node => {
    this.distance.get(node) === Infinity ? this.distance.set(node, 1) : this.distance.set(node, this.distance.get(node) + 1);
  }

  breadthFirstSearch = (graph, startingNode) => {
    if (graph instanceof Graph) {
      for (const node in graph.nodes) {
        this.initialDistance(startingNode, graph.nodes[node]);
      }
      const startingAdjecent = graph.adjecencyList.get(startingNode);
      this.visitedNodes = [...this.visitedNodes, startingNode];

      console.log(this.distance);
    } else {
      throw new InvalidGraphError('Parameter must be a Graph');
    }
  }
}

const graph = new Graph();

graph.addNodes(['K', 'T', 'M', 'J', 'N', 'F']);

const testGraph = [['K', ['T', 'M', 'J']],
['T', ['K', 'M']],
['M', ['K', 'T', 'J', 'N', 'F']],
['J', ['K', 'M', 'F']],
['N', ['M', 'F']],
['F', ['M', 'J']]];

for (const nodes in testGraph) {
  graph.addAdjecentNodes(...testGraph[nodes]);
}


console.log(graph);

const search = new GraphSearch();
search.breadthFirstSearch(graph, 'K');
console.log(search.queue);

console.log(graph);