let rating = 0;
if (window.innerWidth >= 700) {
  function changeBg(n) {
    const button = document.getElementsByClassName("rating");

    for (let i = 0; i <= n; i++) {
      if (i == 0) {
        button[i].style.backgroundColor = "#fdc7a1";
        button[i].style.color = "#ffffff";
      }
      if (i == 1) {
        button[i].style.backgroundColor = "#fdac71";
        button[i].style.color = "#ffffff";
      }
      if (i == 2) {
        button[i].style.backgroundColor = "#fc9042";
        button[i].style.color = "#ffffff";
      }
      if (i == 3) {
        button[i].style.backgroundColor = "#fb822b";
        button[i].style.color = "#ffffff";
      }
      if (i == 4) {
        button[i].style.backgroundColor = "#fb7413";
        button[i].style.color = "#ffffff";
      }
    }
  }
  function ratingResult(n) {
    const button = document.getElementsByClassName("rating");
    rating = n;
    console.log(rating);
    if (n > 0) {
      for (let i = n; i < 5; i++) {
        button[i].style.backgroundColor = "#252d37";
        button[i].style.color = "#7c8798";
      }
    }
  }

  function changeBgToNormal(n) {
    const button = document.getElementsByClassName("rating");

    for (let i = n; i >= 0; i--) {
      if (i == 0 && rating <= i) {
        button[i].style.backgroundColor = "#252d37";
        button[i].style.color = "#7c8798";
      }
      if (i == 1 && rating <= i) {
        button[i].style.backgroundColor = "#252d37";
        button[i].style.color = "#7c8798";
      }
      if (i == 2 && rating <= i) {
        button[i].style.backgroundColor = "#252d37";
        button[i].style.color = "#7c8798";
      }
      if (i == 3 && rating <= i) {
        button[i].style.backgroundColor = "#252d37";
        button[i].style.color = "#7c8798";
      }
      if (i == 4 && rating <= i) {
        button[i].style.backgroundColor = "#252d37";
        button[i].style.color = "#7c8798";
      }
    }
  }
} else if (window.innerWidth < 700) {
  let switching = false;
  function ratingResult(n) {
    const button = document.getElementsByClassName("rating");
    rating = n;
    console.log(rating);
    if (switching == false) {
      for (let i = 0; i <= rating; i++) {
        if (i == 0) {
          button[i].style.backgroundColor = "#fdc7a1";
          button[i].style.color = "#ffffff";
        }
        if (i == 1) {
          button[i].style.backgroundColor = "#fdac71";
          button[i].style.color = "#ffffff";
        }
        if (i == 2) {
          button[i].style.backgroundColor = "#fc9042";
          button[i].style.color = "#ffffff";
        }
        if (i == 3) {
          button[i].style.backgroundColor = "#fb822b";
          button[i].style.color = "#ffffff";
        }
        if (i == 4) {
          button[i].style.backgroundColor = "#fb7413";
          button[i].style.color = "#ffffff";
        }
      }
      switching = true;
    }

    if (n > 0 && switching == true) {
      for (let i = n; i < 5; i++) {
        button[i].style.backgroundColor = "#252d37";
        button[i].style.color = "#7c8798";
      }
      switching = false;
    }
  }
}
function submit() {
  if (rating == 0) {
    alert("Please choose your rating :)");
  } else {
    let get = document.getElementById("main-container");
    get.innerHTML = `<div id='thank-you'>
    <img src='./images/illustration-thank-you.svg' alt='' />
    <p id='selected'>You seleced ${rating} out of 5</p>
    <h1>Thank you!</h1>
    <p id='appreciate'>
      We appreciate you taking the time to give a rating. If you ever need
      more support, don’t hesitate to get in touch!
    </p>
  </div>`;
  }
}
