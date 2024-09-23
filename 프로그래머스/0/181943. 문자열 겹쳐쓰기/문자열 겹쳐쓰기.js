function solution(my_string, overwrite_string, s) {
    const my_new_string = [...my_string];
    my_new_string.splice(s, overwrite_string.length, overwrite_string);
    return my_new_string.join("")
}