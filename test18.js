add(1, 1)
.then(function(res) {
    return res + 1;
})
.then(function(res) {
    return res * 4;
})
.then(function(res) {
    console.log(res)
});

goToSchool().then(function() {
    return arriveAtSchool();
}).then(function() {
    return studyHard();
}).then(function() {
    return eatLunch();
});