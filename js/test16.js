function goToSchool() {
     console.log("학교에 갑니다."); 
    }
// function arriveAtSchool_asis() { 
//     setTimeout(function() {
//          console.log("학교에 도착했습니다."); 
//         }, 1000);
//      }

function arriveAtSchool_tobe() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log("학교에 도착했습니다.");
            resolve();
        }, 1000);
    });
}
         function study() {
              console.log("열심히 공부를 합니다.");
             }

// goToSchool()
// arriveAtSchool_asis()
// study()



goToSchool();
arriveAtSchool_tobe().then(function() {
    study();
});