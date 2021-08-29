const loadData = () =>{
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    const url=`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => getData(data.teams[0]))
    searchField.value = ' ';

}

const getData = (data) =>{
    console.log(data)
    const sportContainer = document.getElementById('sport-container');
    sportContainer.textContent = ' ';
    const div = document.createElement('div');
    div.classList = 'sportTeam';
    div.innerHTML = `
        <div class="sport-images">
            <img src="${data.strTeamBadge}" alt="...">
            <img src="${data.strTeamJersey}" alt="...">
        </div> 
        <div class="sport-details">
            <h5>${data.strCountry}</h5>
            <p>${data.strDescriptionEN}</p>
            <p>${data.strWebsite}</p>
        </div>
    `
    sportContainer.appendChild(div);
}