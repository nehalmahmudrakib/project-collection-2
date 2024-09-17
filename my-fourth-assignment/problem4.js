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