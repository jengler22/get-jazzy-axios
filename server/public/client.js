console.log('script sourced');

function getArtists() {
    // Axios GET request
    axios.get('/artist').then((response) => {
        // Code that will run on successful response
        // from the server.
        console.log(response);
        // quotesFromServer will be an Array of quotes
        let quotesFromServer = response.data;
        let contentDiv = document.querySelector('#artistTableBody');
        for(let artist of quotesFromServer) {
            contentDiv.innerHTML += `
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `;
        }
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.');
    }); // ALWAYS add .catch
}
// TODO Add ajax request for /songs and display on DOM
getArtists();


function getSongs() {
    // Axios GET request
    axios.get('/song').then((response) => {
        // Code that will run on successful response
        // from the server.
        console.log(response);
        // quotesFromServer will be an Array of quotes
        let songsFromServer = response.data;
        let contentDiv = document.querySelector('#songTableBody');
        for(let song of songsFromServer) {
            contentDiv.innerHTML += `
                <tr>
                    <td>${song.title}</td>
                    <td>${song.artist}</td>
                    
            `;
        }
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.');
    }); // ALWAYS add .catch
}
// TODO Add ajax request for /songs and display on DOM
getSongs();

function submitForm(event) {
    event.preventDefault();
    console.log('Sumbit form function');
    let artistName = document.querySelector("#artistInput").value;
    let songName = document.querySelector("#songInput").value;
     console.log(artistName,songName);
     let musicForServer = {
        song: songName,
        artist: artistName,
     }
     axios.post('/artist',musicForServer).then((response) => {
        console.log(response);
    }) .catch((error) => {
       alert('somthing went wrong!');
    })
}


