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