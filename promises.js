/*
function getTempCallback(location, callback) {
    callback(undefined, 78);
    callback('City not found');
}

getTempCallback('London', function(err, temp) {
    if (err) {
        console.log('error', err);
    }
    else {
        console.log('success', temp);
    }
});

//New way
function getTempPromise(location) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(79);
            reject('City not found');
        }, 1000);
    });
}

getTempPromise('London').then(function(temp) {
    console.log('promise success', temp);
}, function(err) {
    console.log('promise error');
}); */

function addPromise(a, b) {
    return new Promise(function(resolve, reject) {
        if (typeof a === 'number' && typeof b === 'number') {
            resolve(a + b);
        }
        else {
            reject('One of the args is not a number');
        }
    });
}

addPromise(5, '2').then(function(sum) {
    console.log(sum);
}, function(err) {
    console.log(err)
});