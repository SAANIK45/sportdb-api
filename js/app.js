const loadData = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = ' ';
    const url = `https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => getData(data.teams[0]))
}

const getData = (data) =>{
    console.log(data)
    const sportContainer = document.getElementById('sport-container');
    sportContainer.textContent = ' ';
    const div = document.createElement('div');
    div.classList = 'sportTeam';
    div.innerHTML = `
        <img src="${data.strTeamBadge}" class="card-img" alt="...">
        <div class="card">
            <h5 class="card-title">${data.strCountry}</h5>
            <p class="card-text">${data.strDescriptionEN}</p>
            <p class="card-text">${data.strWebsite}</p>
        </div>
    `
    sportContainer.appendChild(div);
}