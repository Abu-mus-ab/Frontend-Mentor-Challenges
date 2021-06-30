const ip = new IP();
const ui = new UI();

const searchIp = document.querySelector("form");

searchIp.addEventListener("submit", (e) => {
  const ipInput = document.querySelector("#ip-input").value;

  ip.getIPinfo(ipInput).then((data) => {
    ui.paintUI(data.ipRes);
    ui.paintMap(data.ipRes, data.ipRes);
  });

  e.preventDefault();
});
