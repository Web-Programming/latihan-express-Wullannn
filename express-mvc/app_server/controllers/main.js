const index = (req, res) => {
 	res.render('index', { title: 'Express' }); 
}; 

//buat controller untuk halaman kontak
const kontak = (req, res) => {
    res.render('kontak', { tittle: 'Express'});
};

module.exports = { index, kontak}; 
