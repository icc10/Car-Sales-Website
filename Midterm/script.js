

var carTypeDropDown;
var carColorDropDown;
var noInsuranceButton;
var threeYearInsuranceButton;
var carPicture;
var deleteItemButton;

var ferrariDesc;
var lamborghiniDesc;
var mustangDesc;

var ferrari;
var mustang;
var lamborghini;
var carInUse;

var carType, carColors, carDesc, carPrice;


class Car
{
  constructor(type, color, desc, price)
  {
    this.carType = type;
    this.carColors = color;
    this.carDesc = desc;
    this.carPrice = price;
  }

  getCarType()
  {
    return this.carType;
  }

  getCarColors()
  {
    return this.carColors;
  }

  getCarDesc()
  {
    return this.carDesc;
  }

  getCarPrice()
  {
    return this.carPrice;
  }

}


window.addEventListener("load", setup);


function setup() {
    ferrariDesc = "Car: Ferrari \nDescription: Ferraries are what dreams are made of. Fast, sexy " +
    "and highly exclusive, these Italian supercars push the boundaries of performance and cause a stir whereever " +
    "they go. The sensually styles Roma Coupe is the most accessible in terms of price, but even it is far too " +
    "expensive for most people."
    lamborghiniDesc = "Car: Lamborghini \nDescription: These are super-sports car created with a singular purpose, it delivers all the feel and technology of a genuine race car in a road-legal model. " +
    "Lamborghini’s years-long motorsport know-how, intensified by a winning heritage, is concentrated in the latest adaptations. Its extreme aerodynamics, "+
    "track-honed handling dynamics, lightweight contents and the highest-performing V10 engine to date come together, ready to trigger all the emotions of the racetrack in your everyday life."
    mustangDesc = "Car: Mustang \nDescription: As one of the most widely recognized vehicles the world has ever seen, the Ford Mustang is much more than just a car, it’s an iconic American brand. A car " + 
    "company doesn’t sell 9 million copies of the same nameplate over six different design generations for more than 50 consecutive years by accident. It takes an ongoing series of great Mustang models year"+
    " after year and literally thousands of passionate Ford people – from executives and managers to engineers and marketers all the way to the assembly line workers and loyal Mustang owners and followers – " +
    "to make such a consistent market success happen."
    ferrariColors = ["Red", "White", "Yellow"];
    lamborghiniColors = ["Blue", "Green", "Yellow"];
    mustangColors = ["Black", "Silver", "White"];
    ferrari = new Car("ferrari", ferrariColors, ferrariDesc, "100,000");
    lamborghini = new Car("lamborghini", lamborghiniColors, lamborghiniDesc, "240,000");
    mustang = new Car("mustang", mustangColors, mustangDesc, "33,000");
    carInUse = ferrari;
    configureDOMElementReferences();
    configureDOMElementListeners();
}

function configureDOMElementReferences() {
    carTypeDropDown = document.getElementById("menuCars");
    carColorDropDown = document.getElementById("menuColors");
    noInsuranceButton = document.getElementById("noInsurance");
    threeYearInsuranceButton = document.getElementById("3Year");
    carPicture = document.getElementById("carPic");
    carDesc = document.getElementById("description");
}

const configureDOMElementListeners = () => {
    carTypeDropDown.addEventListener("click", changeThings);
    carColorDropDown.addEventListener("click", changePicColor);
    noInsuranceButton.addEventListener("click", changeInsurance);
    threeYearInsuranceButton.addEventListener("click", changeInsurance);
}

function changeThings() {
    if(carTypeDropDown.value == "ferrari")
    {
      carInUse = ferrari;
      changeColors(ferrari.getCarColors());
      changePic("images/redFerrari.jpg");
    }
    else if(carTypeDropDown.value == "lamborghini")
    {
      carInUse = lamborghini;
      changeColors(carInUse.getCarColors());
      changePic("images/blueLamborghini.jpg");
    }
    else
    {
      carInUse = mustang;
      changeColors(carInUse.getCarColors());
      changePic("images/blackMustang.jpg");
    }
    let insurance = getInsuranceInfo();
    changeDesc(insurance);
}

function changeColors(colorArray)
{
  let oldOpt = document.getElementById("opt1");
  oldOpt.remove();
  let choice1 = document.createElement("option");
  choice1.innerText = colorArray[0];
  choice1.setAttribute("id", "opt1");
  choice1.setAttribute("value", colorArray[0]);
  carColorDropDown.appendChild(choice1);

  let oldOpt2 = document.getElementById("opt2");
  oldOpt2.remove();
  let choice2 = document.createElement("option");
  choice2.innerText = colorArray[1];
  choice2.setAttribute("id", "opt2");
  choice2.setAttribute("value", colorArray[1]);
  carColorDropDown.appendChild(choice2);

  let oldOpt3 = document.getElementById("opt3");
  oldOpt3.remove();
  let choice3 = document.createElement("option");
  choice3.innerText = colorArray[2];
  choice3.setAttribute("id", "opt3");
  choice3.setAttribute("value", colorArray[2]);
  carColorDropDown.appendChild(choice3);

}

function changePic(address)
{
  let pic = document.getElementById("pic");
  pic.parentNode.removeChild(pic);

  let newPic = document.createElement("img");
  newPic.setAttribute("id", "pic");
  newPic.setAttribute("src", address);
  carPicture.appendChild(newPic);

}

function changePicColor()
{
  let pic = document.getElementById("pic");
  pic.parentNode.removeChild(pic);

  let newPic = document.createElement("img");
  newPic.setAttribute("id", "pic");
  let address = "images/"+ carColorDropDown.value.toLowerCase() + carInUse.getCarType() + ".jpg"
  newPic.setAttribute("src", address);
  carPicture.appendChild(newPic);
  let insurance = getInsuranceInfo();
  changeDesc(insurance);
}

function changeDesc(insurance)
{
  let oldDesc = document.getElementById("description");
  oldDesc.remove();

  let desc = document.createElement("textarea");
  desc.setAttribute("type", "text");
  desc.setAttribute("id", "description");
  desc.value = carInUse.getCarDesc() + "\nSelected color: " + carColorDropDown.value + "\nBasic Price: " + carInUse.getCarPrice() + "\nInsurance: " + insurance;
  document.getElementById("desc").appendChild(desc);
}

function changeInsurance()
{
  let insurance = getInsuranceInfo();
  changeDesc(insurance);
}

function getInsuranceInfo()
{
  let insurance;
  if(carTypeDropDown.value == "ferrari")
  {
    if(noInsuranceButton.checked)
    {
      insurance = "0";
    }
    else
    {
      insurance = "30,000";
    }
  }
  else if(carTypeDropDown.value == "lamborghini")
  {
    if(noInsuranceButton.checked)
    {
      insurance = "0";
    }
    else
    {
      insurance = "72,000";
    }
  }
  else
  {
    if(noInsuranceButton.checked)
    {
      insurance = "0";
    }
    else
    {
      insurance = "9,900";
    }
  }
  return insurance;
}



