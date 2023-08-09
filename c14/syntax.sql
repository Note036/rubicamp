-- .schema (nama_tabel);
-- .headers on (menampilkan header)
-- .mode. column (merapihkan kolom)
-- SELECT * FROM (nama_tabel); (menampilkan tabel tertentu)
-- DROP TABLE (nama tabel); (menghapus tabel)

CREATE TABLE jurusan(
    id  CHAR(3) PRIMARY KEY NOT NULL,
    nama VARCHAR(100) NOT NULL
); 

INSERT INTO jurusan(id, nama) VALUES
("195", "Teknik Informatika"),
('200', "Pendidikan MIPA"),
("193", "Matematika");

CREATE TABLE mata_kuliah(
    id CHAR( 3) PRIMARY KEY NOT NULL,
    nama VARCHAR(100) NOT NULL,
    SKS INTEGER(1) NOT NULL
);

INSERT INTO mata_kuliah(id, nama, SKS) VALUES
("001", "Fisika Dasar", 3),
("002", "Matematika Diskrit", 4),
("003", "Data Base", 4),
("004", "Kalkulus I", 3),
("005", "Evaluasi Pendidikan", 2);

CREATE TABLE dosen(
    nip CHAR(5) PRIMARY KEY NOT NULL,
    nama VARCHAR(100) NOT NULL
);

INSERT INTO dosen(nip, nama) VALUES
("DS001", "Dedi"),
("DS002", "Yeni"),
("DS003", "Zainal"),
("DS004", "Dindin");

CREATE TABLE mahasiswa(
    nim CHAR(6) PRIMARY KEY NOT NULL,
    nama VARCHAR(100) NOT NULL,
    alamat VARCHAR(100) NOT NULL,
    id_jurusan char(3) NOT NULL,
    FOREIGN KEY(id_jurusan) REFERENCES jurusan(id)
);

INSERT INTO mahasiswa(nim, nama, alamat, id_jurusan) VALUES
("019001", "Rizki", "Tasik", "195"),
("019002", "Farhan", "Garut", "200"),
("019003", "Rizal", "Sumedang", "195"),
("019004", "Arif", "Bogor", "195"),
("019005", "Syifa", "Sumedang", "193"),
("019006", "Najmi", "Tanggerang", "200");

CREATE TABLE kontrak(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nim CHAR(6) NOT NULL,
    id_matkul CHAR(3) NOT NULL,
    nip CHAR(5) NOT NULL,
    sks CHAR(1) NOT NULL,
    nilai CHAR(1) DEFAULT "T",
    FOREIGN KEY(nim) REFERENCES mahasiswa(nim),
    FOREIGN KEY(id_matkul) REFERENCES mata_kuliah(id),
    FOREIGN KEY(nip) REFERENCES dosen(nip)
);

INSERT INTO kontrak(nim, id_matkul, nip, sks) VALUES
("019001", "001","DS001", 3),
("019001", "003","DS003", 4),
("019001", "004","DS001", 3),
("019002", "001","DS001", 3),
("019002", "005","DS004", 2),
("019002", "004","DS001", 3),
("019003", "001","DS001", 3),
("019003", "003","DS003", 4),
("019004", "004","DS001", 3),
("019005", "001","DS001", 3),
("019005", "002","DS002", 4),
("019006", "005","DS004", 2);

UPDATE kontrak set nilai="B" WHERE id=1;
UPDATE kontrak set nilai="B" WHERE id=2;
UPDATE kontrak set nilai="C" WHERE id=3;
UPDATE kontrak set nilai="C" WHERE id=4;
UPDATE kontrak set nilai="A" WHERE id=5;
UPDATE kontrak set nilai="B" WHERE id=6;
UPDATE kontrak set nilai="B" WHERE id=7;
UPDATE kontrak set nilai="A" WHERE id=8;
UPDATE kontrak set nilai="B" WHERE id=9;
UPDATE kontrak set nilai="B" WHERE id=10;
UPDATE kontrak set nilai="c" WHERE id=11;
UPDATE kontrak set nilai="A" WHERE id=12;