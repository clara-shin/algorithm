function solution(new_id) {
    new_id = new_id.toLowerCase(); // 1단계
    
    let result = ''; // 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)만 남길 문자열
    for(let i = 0; i < new_id.length; i++){
        const char = new_id[i];
        if((char >= 'a' && char <= 'z')||
           (char >= '0' && char <= '9')||
           (char === '-') ||
           (char === '_')||
           (char === '.')
          ){
            result += char;
        }
    }
    new_id = result;

    result = ''; // 초기화
    for(let i = 0; i < new_id.length; i++){
        if(new_id[i] === '.' && new_id[i+1] === '.'){
            continue;
        }
        result += new_id[i];
    }
    
    new_id = result;
    
    
    if(new_id.length > 0 && new_id[0] === '.') {
        new_id = new_id.substring(1);
    }
    if(new_id.length > 0 && new_id[new_id.length - 1] === '.'){
        new_id = new_id.substring(0, new_id.length - 1);
    }
    
    if(new_id === ''){
        new_id = 'a';
    }
    
    if(new_id.length >= 16){
        new_id = new_id.substring(0, 15);
        if(new_id[new_id.length - 1] === '.'){
            new_id = new_id.substring(0, new_id.length - 1);
        }
    }
    
    while(new_id.length <= 2){
        new_id += new_id[new_id.length - 1];
    }
    
    return new_id;
}