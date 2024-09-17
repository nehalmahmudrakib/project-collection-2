function sendNotification( email ) {
    
    if( typeof email !== 'string' ) {
        return "Invalid Email"
    }

    let atSymbol = email.split('@');
    
    if ( atSymbol.length !== 2 ) {
        return "Invalid Email"
    }

    const userName = atSymbol[ 0 ]
    const domainName = atSymbol[ 1 ]
    
    return userName + " sent you an email from " + domainName;
}