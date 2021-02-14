(() => {
    console.log("JavaScript is linked up");
    let logo2nd = document.querySelector('#logo2nd svg');

    function logMe() {
      console.log('Clicked on logo!');
    }

    logo2nd.addEventListener("click", logMe);
})()
