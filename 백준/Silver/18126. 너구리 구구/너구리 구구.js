const fs = require('fs');
const [N, ...edges] = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const numN = Number(N);
const graph = Array(numN + 1).fill().map(()=>[]); // 인접리스틀로 그래프 표현

for(let i = 0; i < edges.length; i++){
    const [a, b, c] = edges[i].split(' ').map(Number);
    graph[a].push([b, c]); // 배열사용: 객체생성 오버헤드 제거
    graph[b].push([a, c]);
}

const findFarthestRoom = (start) => {
    const distances = Array(numN + 1).fill(-1);
    distances[start] = 0;
    
    const queue = [start];
    let maxDistance = 0;
    let farthestRoom = start;
    
    let queueIndex = 0; // shift() 댓신 인덱스 사용 => 성능향상
    
    while(queueIndex < queue.length){
        const current = queue[queueIndex++];
        
        for(const [nextNode, dist] of graph[current]){
            if(distances[nextNode] === -1){
                const newDistance = distances[current] + dist;
                distances[nextNode] = newDistance;
                queue.push(nextNode);
                
                // 더 먼 방을 찾으면 업데이트
                if(newDistance > maxDistance){
                    maxDistance = newDistance;
                    farthestRoom = nextNode;
                }
            }
        }
    }
    return maxDistance;
}
console.log(findFarthestRoom(1));