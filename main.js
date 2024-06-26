// const formTime = document.querySelector("formTime");
const formTime = document.getElementById("formTime");
const counter = document.querySelector(".counter");
formTime.onsubmit = (e) => {
  e.preventDefault();

  setInterval(() => {
    let date = e.target.querySelector('input[type="date"]').value;
    let time = e.target.querySelector('input[type="time"]').value;

    let startTime = new Date();
    let endTime = new Date(date + " " + time);
    let timeDiff = Math.floor(
      Math.abs(endTime.getTime() - startTime.getTime())
    );

    let total_sec = Math.floor(timeDiff / 1000);
    let total_min = Math.floor(total_sec / 60);
    let total_hour = Math.floor(total_min / 60);
    let total_day = Math.floor(total_hour / 24);

    let hour = total_hour - total_day * 24;
    let min = total_min - total_day * 24 * 60 - hour * 60;
    let sec = total_sec - total_day * 24 * 60 * 60 - hour * 60 * 60 - min * 60;

    counter.innerHTML = `
    ${total_day > 9 ? total_day : "0" + total_day} <span class="text-muted fw-light fs-5">day</span> : ${
      hour > 9 ? hour : "0" + hour
    } <span class="text-muted fw-light fs-5">houe</span> : ${min > 9 ? min : "0" + min} <span class="text-muted fw-light fs-5">min</span> : ${
      sec > 9 ? sec : "0" + sec
    }  <span class="text-muted fw-light fs-5">sec</span> 
    `;
  }, 1000);
};
