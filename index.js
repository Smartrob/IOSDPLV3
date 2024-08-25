document.addEventListener('DOMContentLoaded', (event) => {
    const dateInput = document.getElementById('dateInput');
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;

    const todayFormatted = `${yyyy}-${mm}-${dd}`;
    dateInput.value = todayFormatted;
});


function calculateDifference() {
    // Get the values from the first and second input fields
    var value1 = parseFloat(document.getElementById('field1').value) || 0;
    var value2 = parseFloat(document.getElementById('field2').value) || 0;

    // Calculate the difference
    var difference = value1 - value2;

    // Set the difference in the third input field
    document.getElementById('field3').value = difference;
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbzvr2Rt43zaMZaWleuPPbL83MjYCS-PfSjNwtedaf9l7EJ0_yi67muugAAvpQq8MdCF/exec'
const form = document.forms['google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert('Fuel voucher succesfully submitted') ? "" : location.reload())
    .catch(error => console.error('Error!', error.message))
})



function calculateQty15() {
    // Get the values from the first and second input fields
    var value1 = parseFloat(document.getElementById('field3').value) || 0;


    // Calculate the difference
    var Qty15 = value1 * 0.96;

    // Set the difference in the third input field
    document.getElementById('field4').value = Qty15;
}

function formatTime(input) {
    let value = input.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
    if (value.length >= 2) {
        value = value.slice(0, 2) + ':' + value.slice(2, 4);
    }
    input.value = value;
}


// Predefined list of Equipment
const Equipments = ["AD-12","AD-13","AD-14","AD-15","AD-16","AD-17","AD-18","AD-19","AD-20","AD-21","AD-22","AD-23","AD-24","AD-25","AD-26","AD-27","AD-28","AD-29","AD-30","AD-31","AD-44","AD-45","AD-59","AD-60","AD-61","AD-62","AD-63","AD-64","AR-03","AR-04","AR-07","AR-10","AR-17","AR-18","AR-22","AR-23","AR-25","AR-26","AR-27","AD-69","AD-70","AD-71","AD-72","AD-73","AD-74","AD-75","AD-76","AFC03"];

const data_list = document.getElementById('Equipments');

// Populate the datalist with options
Equipments.forEach(Equip => {
    const option = document.createElement('option');
    option.value = Equip;
    data_list.appendChild(option);
});

// Predefined list of Customer
const customers = [
    "Aegean Airlines", "Aer Lingus", "Aeroflot", "Aerolineas Argentinas", "Aeromexico", "Air Arabia", 
    "Air Asia", "Air Astana", "Air Austral", "Air Baltic", "Air Belgium", "Air Canada", "Air China", 
    "Air Europa", "Air France", "Air India", "Air India Express", "Air Malta", "Air Mauritius", 
    "Air New Zealand", "Air Serbia", "Air Seychelles", "Air Tahiti Nui", "Air Transat", "Air Vanuatu", 
    "AirAsia", "AirAsia X", "Alaska Airlines", "Alitalia", "Allegiant Air", "American Airlines", 
    "ANA All Nippon Airways", "Asiana Airlines", "AtlasGlobal", "Austrian Airlines", "Avianca", 
    "Azores Airlines", "Azul Brazilian Airlines", "Bangkok Airways", "Belavia", "Binter Canarias", 
    "British Airways", "Brussels Airlines", "Bulgaria Air", "Cathay Pacific", "Cebu Pacific", 
    "China Airlines", "China Eastern Airlines", "China Southern Airlines", "Condor", "Copa Airlines", 
    "Corsair International", "Croatia Airlines", "Czech Airlines", "Delta Air Lines", "Drukair", 
    "easyJet", "EgyptAir", "El Al", "Emirates", "Ethiopian Airlines", "Etihad Airways", "Eurowings", 
    "Eva Air", "Fiji Airways", "Finnair", "Flydubai", "Flynas", "French Bee", "Frontier Airlines", 
    "Garuda Indonesia", "Georgian Airways", "GoAir", "Gol Transportes Aéreos", "Gulf Air", 
    "Hainan Airlines", "Hawaiian Airlines", "Hong Kong Airlines", "Iberia", "Icelandair", "IndiGo", 
    "Interjet", "Japan Airlines", "Jazeera Airways", "JetBlue Airways", "Jetstar Airways", 
    "KLM Royal Dutch Airlines", "Korean Air", "Kuwait Airways", "LATAM Airlines", "Laudamotion", 
    "Lion Air", "LOT Polish Airlines", "Lufthansa", "Luxair", "Malaysia Airlines", "Malindo Air", 
    "Mango", "MEA Middle East Airlines", "Norwegian Air Shuttle", "Oman Air", "Pakistan International Airlines", 
    "Peach Aviation", "Pegasus Airlines", "Philippine Airlines", "Qantas", "Qatar Airways", 
    "Royal Air Maroc", "Royal Brunei Airlines", "Royal Jordanian", "Ryanair", "S7 Airlines", 
    "Saudia", "Scoot", "Shenzhen Airlines", "Singapore Airlines", "Sky Airline", "SkyWest Airlines", 
    "South African Airways", "Southwest Airlines", "SpiceJet", "Spirit Airlines", "Spring Airlines", 
    "SriLankan Airlines", "Sun Country Airlines", "Swiss International Air Lines", "Swoop", 
    "TAP Air Portugal", "Thai Airways", "Tigerair Australia", "Turkish Airlines", 
    "Ukraine International Airlines", "United Airlines", "Ural Airlines", "VietJet Air", 
    "Vietnam Airlines", "Virgin Atlantic", "Virgin Australia", "Vistara", "Vueling", "WestJet", 
    "Wizz Air", "XiamenAir","SF Express","AIX Connect"
];



const datalist = document.getElementById('customers');

// Populate the datalist with options
customers.forEach(cust => {
    const option = document.createElement('option');
    option.value = cust;
    datalist.appendChild(option);
});

//validate data from datalist for equipments
function validateEquipment() {
    const input = document.getElementById('equip');
    const datalist = document.getElementById('Equipments');
    const options = Array.from(datalist.options).map(option => option.value);

    if (!options.includes(input.value)) {
        input.setCustomValidity('Please select a valid Equipment.');
    } else {
        input.setCustomValidity('');
    }
}


const numberInput1 = document.getElementById('density');
  numberInput1.min = 774; // Minimum value
  numberInput1.max = 840; // Maximum value
  numberInput1.step = 2;  // Step value

const numberInput = document.getElementById('temp');
  numberInput.min = 6; // Minimum value
  numberInput.max = 60; // Maximum value
  numberInput.step = 2;  // Step value