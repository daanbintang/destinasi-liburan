const btnMenu = document.getElementById("btn-menu"); // menangkap element dengan id btn-menu
const listMenu = document.getElementById("list-menu"); // menangkap element dengan id list-meu
const articleCariTempat = document.getElementById("article-cari-tempat"); // menangkap elemetn dengan id article-cari-tempat
const articleDestinasiFavorite = document.getElementById(
	"article-destinasi-favorite"
); // element dengan id article-desitnasi-favorite

// ketika element dengan id btn-menu di click
btnMenu.addEventListener("click", () => {
	// jika tidak ada kelas toggle menu tambahka jika ada hapus (toggle)
	listMenu.classList.toggle("toggle-menu");
});

// menutup menu list tanpa perlu click gambar menu
document.addEventListener("click", (e) => {
	// jika yg di click selain dari btnMenu dan listMenu maka menu akan tertutp
	if (!btnMenu.contains(e.target) && !listMenu.contains(e.target)) {
		listMenu.classList.remove("toggle-menu");
	}
});

// looping data untuk mengisi content dari artilcleCariTempat
const datas = [
	{
		title: "Populer di dekatmu",
		p: "Tempat pariwisata yang populer dan pasti dikenal semua orang didekatmu",
	},
	{
		title: "Favorite di dekatmu",
		p: "Tempat favorit dan disukai semua orang orang di sekitar daerah kamu",
	},
	{
		title: "Ramai di dekatmu",
		p: "Spot yang paling ramai dikunjungi para warga sekaligus para wisatawan",
	},
];

// fungsi yg akan di tampilkan di html
const articles = (title, p) => {
	return `<article>
                <h6>${title}</h6>
                <p>${p}</p>
            </article>	`;
};

// looping data
const result = datas.map((data) => articles(data.title, data.p)).join("");

// menampilkan data data yg sudah di looping ke html
articleCariTempat.innerHTML = result;

// isi content destinasi favorite
const contentDestinasiFavortie = [
	{
		title: "Raja Ampat",
		p: "Kepulauan ini memiliki terumbu karang yang sangat indah dan sehat. Beberapa situs penyelaman terkenal di Raja Ampat termasuk Misool, Pulau Wayag, dan Teluk Kabui.",
        img: 'assets/labuan-bajo-1.png'
	},
	{
		title: "Labuan Bajo",
		p: "Labuan Bajo adalah titik awal yang populer bagi para wisatawan yang ingin menjelajahi Taman Nasional Komodo, yang terkenal dengan populasi komodo, kadal terbesar di dunia. Taman ini terletak di pulau-pulau sekitar Labuan Bajo.",
        img: 'assets/labuan-bajo-2.png'
	},
	{
		title: "Bromo",
		p: "Salah satu pengalaman paling ikonik di Bromo adalah menikmati matahari terbit di Bukit Penanjakan. Pemandangan matahari terbit dengan latar belakang Gunung Bromo, Gunung Batok, dan Gunung Semeru adalah pemandangan yang luar biasa.",
        img: 'assets/labuan-bajo-3.png'
	},
];

// membuat template html untuk article destinasi favorite
const articleDS = (title, p, img) => {
	return `<article>
                <h5>${title}</h5>
                <img src="${img}" alt="labuan bajo">
                <p>${p}</p>
            </article>`;
};

const resultDestinasiFavorite = contentDestinasiFavortie
	.map((data) => articleDS(data.title, data.p, data.img))
	.join("");

articleDestinasiFavorite.innerHTML = resultDestinasiFavorite