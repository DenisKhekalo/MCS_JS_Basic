console.log ("You are at"+window.location);

let answer = prompt("Напиши число");
answer = parseInt(answer);

if(answer>0) {
    console.log(answer);
}
else if(answer<0) {
    console.log(0);
}
else{
    console.log("Hm...something wrong");
}