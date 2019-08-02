class Graph {
  constructor() {
    this.nodes = [];
    this.adjecencyList = new Map();
  }

  addNodes(nodesToAdd) {
    for (const node in nodesToAdd) {
      this.nodes = [...this.nodes, nodesToAdd[node]];
      this.adjecencyList.set(nodesToAdd[node], []);
    }
  }

  addAdjecentNode(node, adjecentNode) {
    const currentAdjecentNodes = this.adjecencyList.get(node);
    if (currentAdjecentNodes) {
      this.adjecencyList.set(node, [...currentAdjecentNodes, adjecentNode]);
    } else {
      console.log('Node does not exist');
    }
  }
}

const graph = new Graph();

graph.addNodes(['A', 'B', 'C', 'D', 'E']);

graph.addAdjecentNode('A', 'B');
graph.addAdjecentNode('A', 'C');
graph.addAdjecentNode('B', 'A');
graph.addAdjecentNode('B', 'C');
graph.addAdjecentNode('B', 'D');
graph.addAdjecentNode('C', 'A');
graph.addAdjecentNode('C', 'B');
graph.addAdjecentNode('D', 'B');
graph.addAdjecentNode('D', 'E');
graph.addAdjecentNode('E', 'D');

console.log(graph);