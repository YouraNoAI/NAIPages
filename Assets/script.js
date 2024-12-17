const titles = 'NAI'
document.title= titles

const links = document.querySelectorAll("#Links");
const monitors = document.getElementById("Monitors");
const defMonitors = document.getElementById("defMonitors");

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    const url = link.getAttribute("href");
    const name = url
      .replace(/https?:\/\//, "")
      .replace(/www\./, "")
      .split("/")[0];

    monitors.style.opacity = 0;
    setTimeout(() => {
      monitors.textContent = name.charAt(0).toUpperCase() + name.slice(1);
      monitors.style.opacity = 1;
      defMonitors.style.display = "none";
    }, 500);
  });

  link.addEventListener("mouseout", () => {
    monitors.style.opacity = 0;
    setTimeout(() => {
      monitors.textContent = "";
      defMonitors.style.display = "block";
      monitors.style.opacity = 1;
    }, 500);
  });
});

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  document.getElementById("Clock").textContent = formattedTime;

  const defMonitors = document.getElementById("defMonitors");
  if (hours >= 5 && hours < 12) {
    defMonitors.textContent = "HALO, SELAMAT PAGI";
  } else if (hours >= 12 && hours < 17) {
    defMonitors.textContent = "HALO, SELAMAT SIANG";
  } else if (hours >= 17 && hours < 21) {
    defMonitors.textContent = "HALO, SELAMAT SORE";
  } else {
    defMonitors.textContent = "HALO, SELAMAT MALAM";
  }
}
setInterval(updateClock, 1000);
updateClock();

const other = document.getElementById("other");
const otherTogle = document.getElementById("togle-other");
const toglesContents = document.getElementById("togles-contents");

toglesContents.textContent = "LIHAT LEBIH BANYAK";

otherTogle.addEventListener("click", () => {
  other.classList.toggle("active");
  if (other.classList.contains("active")) {
    toglesContents.textContent = "LIHAT LEBIH SEDIKIT";
  } else {
    toglesContents.textContent = "LIHAT LEBIH BANYAK";
  }
});

const searchContainer = document.getElementById("search");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");

function search() {
  window.location.href = `https://www.google.com/search?q=${searchInput.value}`;
}
