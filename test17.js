function goToSchool() {
    console.log("학교에 갑니다."); 
   }
   function study() {
    console.log("열심히 공부를 합니다.");
   }
function arriveAtSchool_tobe_adv() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            var status = Math.floor(Math.random() * 2);
            if (status === 1) {
                resolve("학교에 도착했습니다.");
            } else {
                reject("중간에 넘어져 다쳤습니다.");
            }
        }, 1000);
    });
}

function cure() {
    console.log("양호실에 가서 약을 발랐습니다.");
}

goToSchool();
arriveAtSchool_tobe_adv().then(function(res) {
    console.log(res);
    study();
}).catch(function(err) {
    console.log(err);
    cure();
});
