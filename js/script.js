const btnMenu = document.getElementById('btn-menu') // menangkap element dengan id btn-menu
const listMenu = document.getElementById('list-menu') // menangkap element dengan id list-meu
const articleCariTempat = document.getElementById('article-cari-tempat') // menangkap elemetn dengan id article-cari-tempat

// ketika element dengan id btn-menu di click
btnMenu.addEventListener('click', () => {
    // jika tidak ada kelas toggle menu tambahka jika ada hapus (toggle)
    listMenu.classList.toggle('toggle-menu')
})

// menutup menu list tanpa perlu click gambar menu
document.addEventListener('click', (e) => {
   // jika yg di click selain dari btnMenu dan listMenu maka menu akan tertutp
   if (!btnMenu.contains(e.target) && !listMenu.contains(e.target)){
    listMenu.classList.remove('toggle-menu')
   } 
})

// looping data untuk mengisi content dari artilcleCariTempat
const datas = [
    {title: 'Popule di dekatmu', p: 'Tempat pariwisata yang populer dan pasti dikenal semua orang didekatmu'},
    {title: 'Favorite di dekatmu', p: 'Tempat favorit dan disukai semua orang orang di sekitar daerah kamu'},
    {title: 'Ramai di dekatmu', p: 'Spot yang paling ramai dikunjungi para warga sekaligus para wisatawan'}
]

// fungsi yg akan di tampilkan di html
const articles = (title, p) => {
    return `<article>
                <h6>${title}</h6>
                <p>${p}</p>
            </article>	`
}

// looping data
const result = datas.map(data => articles(data.title, data.p)).join('')

// menampilkan data data yg sudah di looping ke html
articleCariTempat.innerHTML = result
