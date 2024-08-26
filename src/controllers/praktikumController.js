exports.profil = (req, res) => {
    let name = req.params.name
    let age = req.params.age
    let kelas = req.params.kelas
    let response = {
        nama : name,
        umur : age,
        kelas : kelas
    }
    return res.json(response)
}

exports.bujurSangkar = (req, res) => {
    let panjang = Number(req.body.panjang)
    let lebar = Number(req.body.lebar)
    let luas = panjang * lebar
    let keliling = 2 * (panjang + lebar)

    let response = {
        panjang: panjang,
        lebar: lebar,
        luas: luas,
        keliling: keliling
    }
    res.json(response)
}