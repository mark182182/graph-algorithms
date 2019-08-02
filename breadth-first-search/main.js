class Graph {
  constructor() {
    this.nodes = [];
    this.adjecencyList = new Map();
    this.edges = 0;
  }

  addNodes(nodesToAdd) {
    for (const node in nodesToAdd) {
      this.nodes = [...this.nodes, nodesToAdd[node]];
      this.adjecencyList.set(nodesToAdd[node], []);
    }
  }

  addAdjecentNodes(referenceNode, adjecentNodes) {
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
}

class Queue {
  constructor() {
    this.stack = [];
  }

  enqueue(element) {
    this.stack = [...this.stack, element];
  }

  dequeue() {
    let newStack = [];
    for (const element in this.stack) {
      if (element > 0) {
        newStack = [...newStack, this.stack[element]];
      }
    }
    this.stack = newStack;
  }

  getLength() {
    return this.stack.length;
  }

}

class GraphSearch {
  constructor() {
    this.visitedNodes = [];
    this.stack = new Queue();
  }

  breadthFirstSearch(graph) {
    if (graph instanceof Graph) {
      for (const node in graph.nodes) {
        console.log(`Visit  ${graph.nodes[node]}`);
        this.stack.enqueue(graph.nodes[node]);
        this.visitedNodes = [...this.visitedNodes, graph.nodes[node]];
        const adjecentNodes = graph.adjecencyList.get(graph.nodes[node]);
        for (const node in adjecentNodes) {
          this.stack.enqueue(adjecentNodes[node]);
        }
        this.stack.dequeue();
      }
    } else {
      console.log('Must be of type Graph');
    }
  }
}

const graph = new Graph();

graph.addNodes(['K', 'T', 'M', 'J', 'N', 'F']);

graph.addAdjecentNodes('K', ['T', 'M', 'J']);
graph.addAdjecentNodes('T', ['K', 'M']);
graph.addAdjecentNodes('M', ['K', 'T', 'J', 'N', 'F']);
graph.addAdjecentNodes('J', ['K', 'M', 'F']);
graph.addAdjecentNodes('N', ['M', 'F']);
graph.addAdjecentNodes('F', ['M', 'J']);

console.log(graph);

const search = new GraphSearch();
search.breadthFirstSearch(graph);
console.log(search.stack);