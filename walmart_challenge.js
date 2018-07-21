

/**
 * get a page of data from server, page size is fixed and always = 25
 * @param {number} pageIndex 
 * @return Promise, resolved with page data when the data arrive from server
 *   e.g. when called with pageIndex=0 will return records with indexes [0, 1, 2, ... 24] - 1st page of data set
 *        when called with pageIndex=1 will return records with indexes [25, 26, 7, ... 49] - 2nd page of data set
 * consider this function implemented and working
 */

/*function getPageFromServer(pageIndex){
    return new Promise(function(resolve){
        //...
        resolve(pageData);
    });
} */

/**
 * fetch any range of data from server using function getPageFromServer()
 * @param {number} startIndex of data
 * @param {number} endIndex of data
 * @returns Promise resolved when all data arrive from server 
 */
/*function getDataRangeFromServer(startIndex, endIndex){
    return new Promise(function(resolve){
        //... write your code here!
    });
} */

/*'
 * divide each bound by 25, math.floor(). run getPageFromServer from lower to upper index and splice lower bound array from looer bound to end, 
 * take everything inbetween lower and upper array, and splice from beginning to upper bound in upper array. concat all together and return

sample cases:

1) getDataRangeFromServer(0, 1) -> returns records with indexes [0, 1], calls getPageFromServer 1 time with pageIndex 0
2) getDataRangeFromServer(0, 49) -> returns records with indexes[0..49], calls getPageFromServer 2 times  with pageIndex 0, 1
3) getDataRangeFromServer(5, 51) -> returns records with indexes[5..51], calls getPageFromServer 3 times  with pageIndex 0, 1, 2

4) getDataRangeFromServer(50, 99) -> returns records with indexes[50..99], calls getPageFromServer 2 times with pageIndex 2, 3
5) getDataRangeFromServer(55, 99) -> returns records with indexes[55..99], calls getPageFromServer 2 times with pageIndex 2, 3

 Records on server do not have indexes, you should not assume what record has numeric index.
 Records are catalog items, they have alpha numeric ids which you should not use in the given task

*/