

function calculateTax( income,expenses ) { 
    
    if ( income<0 || expenses<0 || income < expenses ) {
       return "invalid input"
    }

    let tax = ( income - expenses ) * .20
   
    return tax
}




function sendNotification( email ) {
    
    if( typeof email !== 'string' ) {
        return "Invalid Email"
    }

    let atSymbol = email.split ( '@' );
    
    if ( atSymbol.length !== 2 ) {
        return "Invalid Email"
    }

    const userName = atSymbol[ 0 ]
    const domainName = atSymbol[ 1 ]
    
    return userName + " sent you an email from " + domainName;
}








function checkDigitsInName ( name ) {
    
    if ( typeof name !== 'string' ) {
        return "Invalid Input"
    }

    for ( let nam of name ) {
        if ( nam >= '0' && nam <= '9' ) {
            return true;
        }
    }
    return false;
}








function calculateFinalScore ( obj ) {
    
    if ( typeof obj !== 'object' ) {
        return "Invalid Input"
    }

    if ( typeof obj.name !== 'string' ||
         typeof obj.testScore !== 'number' || obj.testScore < 0 || obj.testScore > 50 ||
         typeof obj.schoolGrade !== 'number' || obj.schoolGrade < 0 || obj.schoolGrade > 30 ||
         typeof obj.isFFamily !== 'boolean' ) {
         
         return "Invalid Input";
    }
    
    let finalScore = obj.testScore + obj.schoolGrade;
    
    if ( obj.isFFamily=== true ) {
        finalScore += 20
    }
    else {
        finalScore += 0
    }

    return finalScore >=80 ? true: false;
}








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