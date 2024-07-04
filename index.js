// code your solution here
// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;

}
saturdayFun();

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;

}
mondayWork();

let wrapAdjective = function(flair = "*") {
    return function(adjective){
            return `You are ${flair}${adjective}${flair}!`;
    }
}