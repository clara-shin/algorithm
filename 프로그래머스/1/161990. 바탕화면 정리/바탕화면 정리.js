function solution(wallpaper) {
    // 초기값 설정 (최소값은 가능한 최대로, 최대값은 가능한 최소로 설정)
    let lux = wallpaper.length;
    let luy = wallpaper[0].length;
    let rdx = 0;
    let rdy = 0;
    
    // 모든 파일 위치 확인
    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            if (wallpaper[i][j] === '#') {
                // 파일을 발견하면 시작점과 끝점 좌표 업데이트
                lux = Math.min(lux, i);
                luy = Math.min(luy, j);
                rdx = Math.max(rdx, i);
                rdy = Math.max(rdy, j);
            }
        }
    }
    
    // 드래그 끝점은 파일 위치보다 1 더 크게 설정해야 함
    return [lux, luy, rdx + 1, rdy + 1];
}
