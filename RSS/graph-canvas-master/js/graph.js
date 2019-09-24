window.onload = function() {
let id = 1;
let string = '';
let count = 0; 

function Graph() {
    this.nodes = [];
    this.edges = [];
}

function Node() {  
    this.edge_list = [];
    this.id = id;
    this.data = string;
    this.x = 100;
    this.y = 100;
    this.radius = 20;
}

Graph.prototype.addNode = function(vertex) {
    let node = new Node();
    node.name = vertex;
    this.nodes.push(node);
    this.edges.vertex = [];
    id++;
};

let graph = new Graph();
let createNewNode = document.getElementById('createNode');
let textButton = document.getElementById('textButton');
  
Graph.prototype.removeNode = function(vertex) {
    let index = this.nodes.indexOf(vertex);
    if(index) {
        this.nodes.splice(index, 1);
    }
    while(this.edges[vertex].length) {
        let adjacentVertex = this.edges[vertex].pop();
        this.removeEdge(adjacentVertex, vertex);
    }
};    
    
Graph.prototype.addEdge = function(vertex1, vertex2) {
    this.edges[vertex1].push(vertex2);
    this.edges[vertex2].push(vertex1);
};
     
Graph.prototype.removeEdge = function(vertex1, vertex2) {
    let index1 = this.edges[vertex1] ? this.edges[vertex1].indexOf(vertex2) : -1;
    let index2 = this.edges[vertex2] ? this.edges[vertex2].indexOf(vertex1) : -1;
    if (index1) {
        this.edges[vertex1].splice(index1, 1);
    };
    if (index2) {
        this.edges[vertex2].splice(index2, 1);
    }
};
    
Graph.prototype.size = function() {
    return this.nodes.length;
};
    
createNewNode.addEventListener('click', function() {
    string = textButton.value;
    graph.addNode('newNode');
    textButton.value = '';
    if (graph.nodes.length > 2) {
        links.push([count - 1, count]);
    }
    if (graph.nodes.length > 3) {
        links.push([count-2, count]);
    }
    count++;
    render();
});
     
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let dragNode;
let links = [
    [0, 1]  
];
    
let render = function() {
    ctx.fillStyle = "#f3f3f3";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    links.forEach(function(link) {
        if (graph.nodes.length > 1) {
            let i0 = link[0],
            i1 = link[1];
            ctx.fillStyle = "#000";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(graph.nodes[i0].x, graph.nodes[i0].y);
            ctx.lineTo(graph.nodes[i1].x, graph.nodes[i1].y);
            ctx.stroke();
        }
    });
      
    graph.nodes.forEach(function(node) { 
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, 2*Math.PI);
        ctx.fillStyle = "#a0c3fa";
        ctx.fill();     
        ctx.stroke();
        ctx.fillStyle = 'black';
        ctx.font="20px Georgia";
        ctx.fillText(node.id, node.x - 5, node.y + 5);
    });
};

let getMousePosFromEvent = function(event) {
    let rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
};

let getNodeByPos = function(pos) {
    let result;
    graph.nodes.forEach(function(node) {
        let halfWidth = 22;
        let halfHeight = 22;
        if ((pos.x >= node.x - halfWidth) && (pos.x < node.x + halfWidth) && (pos.y >= node.y - halfHeight) && (pos.y < node.y + halfHeight)) {
        result = node;
        }
    });
    return result; 
};

canvas.addEventListener('mousedown', function(event) {
    let pos = getMousePosFromEvent(event);
    dragNode = getNodeByPos(pos);
    if (dragNode !== undefined) {
        dragPoint = {
        x: pos.x - dragNode.x,
        y: pos.y - dragNode.y
        }
    }
}, false);

canvas.addEventListener('mouseup', function() {
    dragNode = undefined;
}, false);

canvas.addEventListener('mousemove', function(event) {
    let pos;
    if (dragNode !== undefined) {
        pos = getMousePosFromEvent(event);
        dragNode.x = pos.x - dragPoint.x;
        dragNode.y = pos.y - dragPoint.y;
        render();
    }
}, false);
        
canvas.addEventListener('mousemove', function(event) {
    handleMouseMove(event);
}, false);
      
let handleMouseMove = function(event){
    render();
    graph.nodes.forEach(function(node) {
        let dx = event.clientX - node.x;
        let dy = event.clientY - node.y;
        if (dx * dx  + dy * dy < node.radius * node.radius){
            ctx.font="14px Georgia";
            ctx.fillText(node.data || 'no data', node.x + node.radius, node.y - node.radius);
        }    
    })
}
render();   
};
