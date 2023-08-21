import Mahasiswa from "../models/Mahasiswa.js";
import { option, listMahasiswa, findResult } from "../views/MahasiswaView.js";
import { rl } from "../Connector.js";
import { listJurusan } from "../views/JurusanView.js";
import Jurusan from "../models/Jurusan.js";
import { home } from "../c18.js";

export default class MahasiswaController {
    static option() {
        option();
        rl.question("Masukkan salah satu nomor dari opsi di atas : ", (index) => {
            switch (index) {
                case '1':
                    MahasiswaController.listOf();
                    break;
                case '2':
                    MahasiswaController.search();
                    break;
                case '3':
                    MahasiswaController.add()
                    break;
                case '4':
                    MahasiswaController.delete()
                    break;
                case '5':
                    home();
                    break;
                default:
                    console.log("Nomor yang anda masukkan salah. Silahkan masukkan nomor dengan benar")
                    MahasiswaController.option()
            };
        });

    };

    static listOf() {
        Mahasiswa.list().then((data) => {
            listMahasiswa(data);
            MahasiswaController.option();
        }).catch(() => {
            console.log('Terjadi kesalahan pada data yang akan ditampilkan. Silahkan coba lagi')
            MahasiswaController.option()
        });
    };

    static search() {
        rl.question("Masukkan NIM Mahasiswa : ", (nim) => {
            Mahasiswa.find(nim).then((data) => {
                findResult(data);
                MahasiswaController.option()
            }).catch(() => {
                console.log(`Mahasiswa dengan NIM ${nim}, tidak terdaftar`);
                MahasiswaController.option()
            });
        });
    };

    static add() {
        console.log("Lengkapi data di bawah ini : ");
        Mahasiswa.list().then((data) => {
            listMahasiswa(data);
            rl.question("NIM : ", (nim) => {
                rl.question("Nama : ", (nama) => {
                    rl.question("Tanggal lahir : ", (lahir) => {
                        rl.question("Alamat : ", (alamat) => {
                            Jurusan.list().then((data) => {
                                listJurusan(data)
                                rl.question("Kode Jurusan : ", (jurusan) => {
                                    Mahasiswa.find(nim).then((data) => {
                                        console.log(`NIM ${data.nim} telah terdaftar. Silahkan masukkan kembali data dengan benar`);
                                        MahasiswaController.option();
                                    }).catch(() => {
                                        Mahasiswa.add(nim, nama, alamat, jurusan, lahir);
                                        console.log("Mahasiswa telah ditambahkan");
                                        Mahasiswa.list().then((data) => {
                                            listMahasiswa(data);
                                            MahasiswaController.option();
                                        }).catch(() => {
                                            console.log("Gagal menambahkan data mahasiswa")
                                            MahasiswaController.option()
                                        })
                                    })
                                })
                            }).catch(() => {
                                console.log('Terjadi kesalahan pasa saat menampilkan data. Silahkan coba lagi');
                                MahasiswaController.option()
                            })
                        })
                    })
                })
            });

        }).catch(() => {
            console.log("Terjadi kesalahan dalam menampilkan data Mahasiswa. Silahkan coba lagi")
            MahasiswaController.option()
        })
    };

    static delete() {
        rl.question("Masukkan NIM Mahasiswa : ", (nim) => {
            Mahasiswa.find(nim).then((data) => {
                Mahasiswa.delete(data.nim).then(() => {
                    console.log(`Data Mahasiswa ${data.nim}, telah dihapus`);
                    MahasiswaController.option()
                }).catch(() => {
                    console.log("Gagal menghapus data Mahasiswa. Terjadi kesalahan dalam menghapus data");
                    MahasiswaController.option()
                })
            }).catch(() => {
                console.log(`Gagal menghapus data Mahasiswa.\nMahasiswa dengan nim ${nim}, tidak terdaftar`);
                MahasiswaController.option()
            });
        });
    };
};