const selectTeam = document.getElementById('select-team');
const team1Logo = document.getElementById('team1-logo');
const team2Logo = document.getElementById('team2-logo');
const time = document.getElementById('time');
const date = document.getElementById('date');
const team1Name = document.getElementById('name-firs-team');
const team2Name = document.getElementById('name-second-team');
const ticketPrice = document.getElementById('price');


selectTeam.addEventListener('change', function () {
    switch (true) {
        case this.value === 'bar-atm' : {
            team1Logo.src = "./Assets/barca.png";
            team2Logo.src = "./Assets/atletico.png";
            time.innerText = "20:00";
            date.innerText = "07.05"
            team1Name.innerText = "Barcelona";
            team2Name.innerText = "Atletico";
            ticketPrice.innerText = "60$"

        }
            break;
        case this.value === 'bar-rmd' : {
            team1Logo.src = "./Assets/barca.png";
            team2Logo.src = "./Assets/Real_Madrid.png";
            time.innerText = "22:00";
            date.innerText = "14.05"
            team1Name.innerText = "Barcelona";
            team2Name.innerText = "Real Madrid";
            ticketPrice.innerText = "85$"
        }
            break;
        case this.value === 'atm-rmd' : {
            team1Logo.src = "./Assets/atletico.png";
            team2Logo.src = "./Assets/Real_Madrid.png";
            time.innerText = "21:00";
            date.innerText = "21.05"
            team1Name.innerText = "Atletico";
            team2Name.innerText = "Real Madrid";
            ticketPrice.innerText = "55$"
        }
            break;
        default: {
            team1Logo.src = "./Assets/barca.png";
            team2Logo.src = "./Assets/atletico.png";
            time.innerText = "20:00";
            date.innerText = "07.05"
            team1Name.innerText = "Barcelona";
            team2Name.innerText = "Atletico";
            ticketPrice.innerText = "60$"
        }
    }
})
// myForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     alert("Заявка на покупку билета отправлена успешно")
// })


