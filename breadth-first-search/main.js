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

const graph = new Graph();

graph.addNodes(['K', 'T', 'M', 'J', 'N', 'F']);

graph.addAdjecentNodes('K', ['T', 'M', 'J']);
graph.addAdjecentNodes('T', ['K', 'M']);
graph.addAdjecentNodes('M', ['K', 'T', 'J', 'N', 'F']);
graph.addAdjecentNodes('J', ['K', 'M', 'F']);
graph.addAdjecentNodes('N', ['M', 'F']);
graph.addAdjecentNodes('F', ['M', 'J']);

console.log(graph);