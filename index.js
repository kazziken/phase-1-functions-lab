function distanceFromHqInBlocks(block) {
    let headQuarterLocation = 42;

    if (block > headQuarterLocation) {
        console.log('Block is greater than ' + headQuarterLocation)
        return block - headQuarterLocation
    }
    else{
        console.log('Block is smaller than ' + headQuarterLocation)
        return headQuarterLocation - block
    }
}

// or can type return Math.abs (42- block)

function distanceFromHqInFeet(street){
   return Math.abs(42 - street) * 264;
}

// or return distanceFromHqInblocks(street) * 264

function distance(start,destination){
    return Math.abs(start - destination);
}

function distanceTravelledInFeet(start,destination){
    return distance(start,destination) * 264;
}

function calculatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start,destination);
    //if the distance is less than 400 then its free

    if (distance <= 400){
        return 0;
    }
            // for the distance between 400 and 200 awe charge .02$ per feet
 
    else if (distance < 2000 && distance>400){
        return (distance -400) * .02
    }
    else if (distance > 2000 && distance < 2500){
        return 25;
    }
    else{
        return 'cannot travel that far'
    }
}


