class Graph {
 constructor() {
  this.adjacency = {};
 }
 addVertex(vertex) {
  if (!this.adjacency[vertex]) {
   this.adjacency[vertex] = [];
   return true;
  }
  return false;
 }
 addEdge(vertexOne, vertexTwo) {
  if (this.adjacency[vertexOne] && this.adjacency[vertexTwo]) {
   this.adjacency[vertexOne].push(vertexTwo);
   this.adjacency[vertexTwo].push(vertexOne);
   return true;
  }
  return false;
 }
 removeEdge(vertexOne, vertexTwo) {
  if (this.adjacency[vertexOne] && this.adjacency[vertexTwo]) {
   this.adjacency[vertexOne] = this.adjacency[vertexOne].filter(
    (item) => item !== vertexTwo
   );
   this.adjacency[vertexTwo] = this.adjacency[vertexTwo].filter(
    (item) => item !== vertexOne
   );
   return true;
  }
  return false;
 }
 removeVertex(vertex) {
  if (!this.adjacency[vertex]) return undefined;
  const vertexEdges = this.adjacency[vertex];
  for (const key of vertexEdges) {
   this.adjacency[key] = this.adjacency[key].filter((item) => item !== vertex);
  }
  delete this.adjacency[vertex];
 }
}

const testGraph = new Graph();
testGraph.addVertex('A');
testGraph.addVertex('B');
testGraph.addEdge('A', 'B');
testGraph.addVertex('C');
testGraph.addEdge('C', 'A');
testGraph.addEdge('C', 'B');
testGraph.removeVertex('C');
console.log(testGraph);
