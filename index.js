
function Sent()  {
  let value = document.getElementById('text-area').value;
  let email = document.getElementById('your-email').value;
  let name = document.getElementById('your-name').value;
  if (email == "" && name == "" && value == "") {
    alert("Please insert An Email, Name, and your message.")
  } 
  else if (name == ""){
    alert("Please insert An Name")
  } else if (value == ""){
    alert("Please Enter a message!")
  } else {
    document.getElementById('header').innerText = "ThankYou!, I will Contact you as soon as possible.";
    alert(`Your Email: ${email} and your Name: ${name}`);  
  }
}

function Changepp() {
  let fotoProfilChange1 = document.getElementById('foto-profil2');
  let fotoProfilChange2 = document.getElementById('foto-profil1');
  fotoProfilChange1.style.visibility = "visible";
  fotoProfilChange2.style.visibility = "hidden";
  
  let visibleButton = document.getElementById("buttonChangepp");
  visibleButton.style.visibility = "hidden";
  document.getElementById('header').innerText = "Profil Photo Changed!";

}

function changeColour(value){
    let color = document.body.style.backgroundColor;
    switch(value)
    {
        case 'b':
            color = "#F0F8FF";
            document.getElementById('header').innerText = "Color Changed to AliceBlue!";
        break;
        case 'r':
            color = "#008B8B";
            document.getElementById('header').innerText = "Color Changed to DarkCyan!";
        break;
        case 'p':
            color = "#778899";
            document.getElementById('header').innerText = "Color Changed to LightSlateGray!";
        break;
    }
    document.body.style.backgroundColor = color;
}



function Refresh() {
  window.location.reload();
  alert("Your Page has been refreshed")
}

function backgroundChange() {
  let change = document.getElementById('all-header');
  change.style.backgroundColor = 'SlateGray';
}
