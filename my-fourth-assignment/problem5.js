function waitingTime ( waitingTimes, serialNumber ) {

    if ( !Array.isArray ( waitingTimes ) || typeof serialNumber !== 'number' ) {
       
        return 'Invalid Input'
    }

    let totalTime = 0;

    for ( let time of waitingTimes ) {
        
        totalTime += time;
    }

    const averageTime = Math.round ( totalTime / waitingTimes.length );
    const candidateSerialNumber = serialNumber - 1;
    const remainingCandidates = candidateSerialNumber - waitingTimes.length
    const remainingWaitTime = remainingCandidates * averageTime
   
    return remainingWaitTime;
}