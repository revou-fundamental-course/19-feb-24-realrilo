document.addEventListener("DOMContentLoaded", function () {
  const currentTimeElement = document.getElementById("currentTime");
  const jakartaTime = document.getElementById("jakartaTime");
  const bandungTime = document.getElementById("bandungTime");
  const surabayaTime = document.getElementById("surabayaTime");
  const formOutput = document.getElementById("formOutput");

  function getCurrentTime(city) {
    const now = new Date();
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
      timeZone: "Asia/Jakarta",
    };

    const time = new Intl.DateTimeFormat("id", options).format(now);
    return `${time} WIB (${city})`;
  }

  function setCurrentTimeAtTop() {
    currentTimeElement.textContent = getCurrentTime("Waktu Sekarang");
  }
  setInterval(setCurrentTimeAtTop, 1000);

  function setCurrentTime() {
    jakartaTime.textContent = getCurrentTime("Jakarta");
    bandungTime.textContent = getCurrentTime("Bandung");
    surabayaTime.textContent = getCurrentTime("Surabaya");
  }
  setInterval(setCurrentTime, 1000);

  // Handle form submission
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    formOutput.innerHTML = "";

    const formData = new FormData(form);
    const nameValue = formData.get("name");
    const dobValue = formData.get("dob");
    const genderValue = formData.get("gender");
    const messageValue = formData.get("message");

    const currentTimeParagraph = document.createElement("p");
    currentTimeParagraph.textContent = `Current time: ${getCurrentTime("")}`;
    formOutput.appendChild(currentTimeParagraph);

    const nameParagraph = document.createElement("p");
    nameParagraph.textContent = `Nama: ${nameValue}`;
    formOutput.appendChild(nameParagraph);

    const dobParagraph = document.createElement("p");
    dobParagraph.textContent = `Tanggal Lahir: ${dobValue}`;
    formOutput.appendChild(dobParagraph);

    const genderParagraph = document.createElement("p");
    genderParagraph.textContent = `Jenis Kelamin: ${genderValue === "lakiLaki" ? "Laki-Laki" : "Perempuan"}`;
    formOutput.appendChild(genderParagraph);

    const messageParagraph = document.createElement("p");
    messageParagraph.textContent = `Pesan: ${messageValue}`;
    formOutput.appendChild(messageParagraph);

    formOutput.style.display = "block";
  });
});
