document.querySelector(".dice").onclick = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      document.querySelector(
        ".advice-no"
      ).textContent = `ADVICE #${data.slip.id}`;
      document.querySelector(
        ".advice-container"
      ).textContent = `“${data.slip.advice}”`;
    });
};
