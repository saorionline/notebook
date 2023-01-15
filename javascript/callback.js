function alien(name, myCallback) {
    console.log('Hi i am crazy');
    setTimeout(function (){
        console.log('We come in peace ' + name);
        myCallback();
    }, 1500);
}

function goodbye(name, newCallback) {
    setTimeout(function(){
        console.log('Goodbye', name);
        newCallback();
    }, 1000);
};

console.log('Initializing...');
alien('Ruby', function () {
    goodbye('Ruby', function(){
        console.log('Finishing...')
    });
})  

/*alien('Freddy', function (){});
goodbye('Freddy', function (){})*/
