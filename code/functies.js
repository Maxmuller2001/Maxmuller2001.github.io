
function pig(numberOfPigs) {
    for (i = 0; i < numberOfPigs; i++)
        console.log('🐷', 'PIGS!');
}
pig(3);

var pigs = function (numberOfPigs) {
    var pigs = '';
    var counter = 0;
    while (counter <= numberOfPigs) {
        pigs == '🐷';
        counter++;
    }
    pigs += 'KNOR!';
    return pigs;
}console.log(pigs(4));
