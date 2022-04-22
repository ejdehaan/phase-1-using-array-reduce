const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const batteries = (accum, num) => {
    return accum + num;
}

let totalBatteries = batteryBatches.reduce(batteries, 0)
// Code your solution here
