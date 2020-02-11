/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = false;
    
    if (/(^\s*[a-zA-Z]*\s*$)|(^\s*[-]?\d+([.]?\d+)?([\/][-]?\d+([.]?\d+)?)?\s*[a-zA-Z]*\s*$)/gi.test(input)){ 
      if(input.indexOf('/') !== -1)           
        result =  +(parseFloat(input.slice(0,input.indexOf('/'))) / parseFloat(input.slice(input.indexOf('/')+1))).toFixed(5);
      else
        result = +parseFloat(input).toFixed(5);      
    }
    if (isNaN(result)) result = 1;
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    
    result = input.slice(input.search(/[a-zA-Z]/));    

    if(!(/^kg\s*$|^lbs\s*$|^gal\s*$|^L\s*$|^mi\s*$|^km\s*$/gmi).test(result))  //matching exact unit string (case insensitive) with zero or more whitespace following
      return false;
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    
    switch(initUnit){
      case 'gal':
        return 'l';
      case 'L':case 'l':
        return 'gal';
      case 'lbs':
        return 'kg';
      case 'kg':
        return 'lbs';
      case 'mi':
        return 'km';
      case 'km':
        return 'mi';
      default:
        return false;
    }    
  };

  this.spellOutUnit = function(unit) {
    var result;
    
    switch(unit) {
      case 'gal':
        result = 'gallons';
        break;
      case 'L':case'l':
        result = 'liters';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'kg':
        result = 'kilograms';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'km':
        result = 'kilometers';
        break;
    }

    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    switch (initUnit) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'L' : case 'l':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      default:
        result = 0;
        break; 
    }

    return +result.toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    result = `${initNum} ${initUnit} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;    
    return result;
  };
  
}

module.exports = ConvertHandler;
