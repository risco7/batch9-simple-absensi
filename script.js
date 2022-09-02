// Tangkap element
let absensiForm = document.getElementById('absensi_form');
let root = document.getElementById('root');

// Buatkan variable array
let dataAbsensi = [];

// tambahkan event listener
absensiForm.addEventListener('submit', (event) => {
  // stop form dari reload
  event.preventDefault();

  // Record value yang di input
  let username = event.target.username.value;

  // push data ke dalam array data_absensi
  dataAbsensi.push({
    namaLengkap: username,
    date: replaceDate(),
  });

  // reset input
  event.target.username.value = '';

  // Panggil Function render HTML
  renderToHtml();
});

// funtion render data array root ke HTML
function renderToHtml() {
  // reset element pada div root
  root.innerHTML = '';

  // mapping data array data_absensi ke root
  dataAbsensi.forEach((e, i) => {
    root.innerHTML += `
    <div class='card' draggable='true' ondragend='deleteAbsensi(${i})'>
      ${e.namaLengkap} <span> ${e.date} </span>          
    </div>
`;
  });
}

// Function Delete Absensi
function deleteAbsensi(index) {
  console.info(index);

  // delete data dalam array sesuai index
  dataAbsensi.splice(index, 1);

  // panggil kembali function render to HTML
  renderToHtml();
}

// Function replace Date atau Waktu
function replaceDate() {
  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();

  return `${date} - ${time}`;
}
