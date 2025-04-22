const fs = require('fs');
const [N, ...edges] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const numN = Number(N);
const graph = Array.from({ length: numN + 1 }, () => []);

for(let i = 0; i < edges.length; i++){
    const [a, b, c] = edges[i].split(' ').map(Number);
    graph[a].push({ node: b, distance: c });
    graph[b].push({ node: a, distance: c });
}

const findFarthestRoom = (start) => {
    const distances = Array(numN + 1).fill(-1);
    distances[start] = 0;
    
    const queue = [start];
    let maxDistance = 0;
    let farthestRoom = start;
    
    while(queue.length > 0){
        const current = queue.shift();
        for(const {node, distance } of graph[current]){
            if(distances[node] === -1){
                distances[node] = distances[current] + distance;
                queue.push(node);
            }
            // 더 먼 방을 찾으면 업데이트
            if(distances[node] > maxDistance){
                maxDistance = distances[node];
                farthestRoom = node;
            }
        }
    }
    return { maxDistance, farthestRoom };
}

const result = findFarthestRoom(1);
console.log(result.maxDistance);