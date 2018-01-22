/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
    var map = {};
    return clone(graph, map);
};

var clone = function(node, map) {
    if (node === null) {
        return null;
    }
    if (node.label in map) {
        return map[node.label];
    }
    var result = new UndirectedGraphNode(node.label);
    
    map[result.label] = result;
    
    for (var neighbor of node.neighbors) {
        result.neighbors.push(clone(neighbor, map));
    }
    
    return result;
    
};