const musicas = [
  {
    titulo: "Bohemian Rhapsody",
    artista: "Queen",
    album: "A Night at the Opera",
    ano: 1975
  },
  {
    titulo: "Hotel California",
    artista: "Eagles",
    album: "Hotel California",
    ano: 1976
  },
  {
    titulo: "Shape of You",
    artista: "Ed Sheeran",
    album: "÷ (Divide)",
    ano: 2017
  },
  {
    titulo: "Blinding Lights",
    artista: "The Weeknd",
    album: "After Hours",
    ano: 2019
  },
  {
    titulo: "Smells Like Teen Spirit",
    artista: "Nirvana",
    album: "Nevermind",
    ano: 1991
  },
  {
    titulo: "Billie Jean",
    artista: "Michael Jackson",
    album: "Thriller",
    ano: 1982
  },
  {
    titulo: "Sweet Child O' Mine",
    artista: "Guns N' Roses",
    album: "Appetite for Destruction",
    ano: 1987
  },
  {
    titulo: "As It Was",
    artista: "Harry Styles",
    album: "Harry's House",
    ano: 2022
  }
];

const corpoTabela = document.getElementById("corpoTabela");

for (let musica of musicas) {
  const linha = document.createElement("tr");

  linha.innerHTML = `
    <td>${musica.titulo}</td>
    <td>${musica.artista}</td>
    <td>${musica.album}</td>
    <td>${musica.ano}</td>
  `;

  corpoTabela.appendChild(linha);
}