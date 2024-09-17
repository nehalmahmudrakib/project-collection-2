function calculateTax( income,expense ) { 
    
    if ( income<0 || expense<0 || income < expense ) {
       return "invalid input"
    }

    let tax = ( income - expense ) * .20
   
    return tax
}