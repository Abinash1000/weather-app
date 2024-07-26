
let content =  document.getElementById("content");
let conName = document.getElementById("input-con");
let time = new Date();
hour = time.getHours();
min = time.getMinutes();
if (hour<10) {
 hour = "0" + hour
}
if (min<10) {
  min = "0" + min
}
// finallylConName = "india";
const getData = async function () {
  finallylConName = conName.value || "india";
  if (finallylConName == "") {
    alert("please enter city or country name")
  } else { 
  try {
    content.innerHTML = `<div class="spinner-border text-light"></div>`;
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=0bab7dd1bacc418689b143833220304&q=${finallylConName || india}`, {
      method: 'GET',
      headers: {}
    });
       const result = await response.json();   
      console.log(result);
content.innerHTML = `
<div class="card" style="color: #4B515D; border-radius: 35px;">
<div class="card-body p-4">

  <div class="d-flex">
    <h6 class="flex-grow-1">${result.location.name},${result.location.country}</h6>
    <h6>${hour}:${min}</h6>
  </div>

  <div class="d-flex flex-column text-center mt-5 mb-4">
    <h6 class="display-4 mb-0 font-weight-bold"id='temp_c' style="color: #1C2331;">${result.current.temp_c}&deg;C</h6>
    <span class="small" style="color: #868B94">${result.current.condition.text}</span>
  </div>

  <div class="d-flex align-items-center">
    <div class="flex-grow-1" style="font-size: 1rem;">
      <div><i class="fas fa-wind fa-fw" style="color: #868B94;"></i> <span class="ms-1 fw-bold">feelslike: ${result.current.feelslike_c}&deg;C
      </span></div>
      <div><i class="fas fa-tint fa-fw" style="color: #868B94;"></i> <span class="ms-1 fw-bold">humidity: ${result.current.humidity}%</span>
      </div>
      <div><i class="fas fa-sun fa-fw" style="color: #868B94;"></i> <span class="ms-1 fw-bold">windspid: ${result.current.wind_kph}kp/h</span>
      </div>
    </div>
    <div>
      <img src="${result.current.condition.icon}"
        width="150px">
    </div>
  </div>

</div>
</div>
`

  } 
  catch(err){ 
    alert("please enter a valid city name")
    content.innerHTML = "";
  }
}
conName.value = "";
}
document.getElementById("serc-btn").addEventListener("click", getData);
