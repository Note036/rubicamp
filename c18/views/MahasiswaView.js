import Table from 'cli-table';
import { lines } from '../c18.js';

export function option() {
    lines()
    console.log(`
silahkan pilih opsi di bawah ini
[1] Daftar Mahasiswa
[2] Cari Mahasiswa
[3] Tambah Mahasiswa
[4] Hapus Mahasiswa
[5] Kembali
`)
    lines()
};

export function listMahasiswa(array) {
    let table = new Table({
        head: ['NIM', 'Nama', 'Tanggal Lahir', 'alamat', 'Kode Jurusan', 'Nama Jurusan']
    });
    array.forEach(item => {
        table.push([item.nim, item.nama, item.lahir, item.alamat, item.id_jurusan, item.namajurusan])    
    });
    console.log(table.toString())
};

export function findResult(data) {
    lines()
    console.log(`
Detail mahasiswa dengan NIM '${data.nim}' :
NIM     : ${data.nim}
Nama    : ${data.nama}
Alamat  : ${data.alamat}
Jurusan : ${data.id_jurusan}
    `)
};

