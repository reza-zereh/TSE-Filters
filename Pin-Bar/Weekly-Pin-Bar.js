/** 
 * Duty: Find the weekly pin bar
 * Usable: Wednesday's evening till Saturday 8:59
 * Note: Currently just works for stocks which had full trading week
 * 
 * Author: M. Reza Zerehpoosh
 * Email: ironcladgeek@hotmail.com
 * 
 * 
 * TODO: Change the current analogy to correctly find the first trading day of the week
*/


true == function(){
  var weekClose = [ih][0].PDrCotVal;
  var weekOpen = [ih][4].PriceFirst;

  // calculating the week's high and low prices
  var weekHigh = 0;
  var weekLow = 1000000;
  var ipos;
  for(ipos=0; ipos<=4; ipos++) {
    if([ih][ipos].PriceMax > weekHigh){
      weekHigh = [ih][ipos].PriceMax;
    }

    if ([ih][ipos].PriceMin < weekLow) {
      weekLow = [ih][ipos].PriceMin;
    }
  }
  
  // calculating the week's body length and week's price range
  var weekRange = weekHigh - weekLow;
  var weekBodyLength = Math.abs(weekOpen - weekClose);

  // Calculating length of body percentage, top and bottom section of the bar
  var bodySizePct = Math.round((weekBodyLength / weekRange) * 100);
  var topSection = weekHigh - Math.round(weekRange * 0.33);
  var bottomSection = weekLow + Math.round(weekRange * 0.33);
  
  // show stock with more than 4M trading volume on the last day
  if((tvol) >= 4000000) {
    // if not a weekly doji bar and has a appropriate body size
    if ((weekHigh != weekLow) && (weekOpen != weekClose)) {
      if (bodySizePct >= 4 && bodySizePct <= 33) {
        // detect either the bar's body located in top or low section of the candle
        if ((weekOpen >= topSection && weekClose >= topSection) || (weekOpen <= bottomSection && weekClose <= bottomSection))
          return true; // if condition met then the bar is a pin bar
      }
    }
  }

  return false;
}()