const toast = document.querySelector(".toast");
const progressBar = document.querySelector(".toast-progress");
const closeBtn = document.querySelector(".close");

let progressWidth = 0;

const progressBarHandler = setInterval(function () {
  progressBar.style.width = `${progressWidth}%`;
  progressWidth += 0.2;

  if (progressWidth > 100) {
    clearInterval(progressBarHandler);
    toast.classList.add("hidden");
  }

}, 15);

function closeToast() {
  toast.classList.add("hidden");
}

closeBtn.addEventListener("click", closeToast);