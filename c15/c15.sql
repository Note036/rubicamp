-- .schema (nama_tabel);
-- .headers on (menampilkan header)
-- .mode. column (merapihkan kolom)
-- SELECT * FROM (nama_tabel); (menampilkan tabel tertentu)
-- DROP TABLE (nama tabel); (menghapus tabel)

CREATE TABLE jurusan(
    id_jurusan  CHAR(3) PRIMARY KEY NOT NULL,
    nama VARCHAR(100) NOT NULL
); 

INSERT INTO jurusan(id_jurusan, nama) VALUES
("195", "Teknik Informatika"),
('200', "Pendidikan MIPA"),
("193", "Matematika");

CREATE TABLE mata_kuliah(
    id_matkul CHAR( 3) PRIMARY KEY NOT NULL,
    nama VARCHAR(100) NOT NULL,
    sks INTEGER(1) NOT NULL
);

INSERT INTO mata_kuliah(id_matkul, nama, sks) VALUES
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
    id_kontrak INTEGER PRIMARY KEY AUTOINCREMENT,
    nim CHAR(6) NOT NULL,
    id_matkul CHAR(3) NOT NULL,
    nip CHAR(5) NOT NULL,
    nilai CHAR(1) DEFAULT "T",
    FOREIGN KEY(nim) REFERENCES mahasiswa(nim),
    FOREIGN KEY(id_matkul) REFERENCES mata_kuliah(id),
    FOREIGN KEY(nip) REFERENCES dosen(nip)
);

INSERT INTO kontrak(nim, id_matkul, nip) VALUES
("019001", "001","DS001"),
("019001", "003","DS003"),
("019001", "004","DS001"),
("019002", "001","DS001"),
("019002", "005","DS004"),
("019002", "004","DS001"),
("019003", "001","DS001"),
("019003", "003","DS003"),
("019004", "004","DS001"),
("019005", "001","DS001"),
("019005", "002","DS002"),
("019006", "005","DS004");

UPDATE kontrak set nilai="B" WHERE id_kontrak=1;
UPDATE kontrak set nilai="B" WHERE id_kontrak=2;
UPDATE kontrak set nilai="C" WHERE id_kontrak=3;
UPDATE kontrak set nilai="C" WHERE id_kontrak=4;
UPDATE kontrak set nilai="C" WHERE id_kontrak=5;
UPDATE kontrak set nilai="C" WHERE id_kontrak=6;
UPDATE kontrak set nilai="B" WHERE id_kontrak=7;
UPDATE kontrak set nilai="A" WHERE id_kontrak=8;
UPDATE kontrak set nilai="B" WHERE id_kontrak=9;
UPDATE kontrak set nilai="B" WHERE id_kontrak=10;
UPDATE kontrak set nilai="c" WHERE id_kontrak=11;
UPDATE kontrak set nilai="A" WHERE id_kontrak=12;

INSERT INTO mata_kuliah(id_matkul, nama, sks) VALUES
("006", "Bahasa Inggris", 2),
("007", "Ilmu Pendidikan", 2),
("008", "Pancasila dan Kewarganegaraan", 2),
("009", "Data Mining", 3),
("010", "Bahasa Inggris II", 2),
("011", "Praktikum Fisika Dasar", 1),
("012", "Bahasa Indonesia", 2),
("013", "Algoritma dan Pemrograman", 3),
("014", "Statistika Dasar", 3);

INSERT INTO dosen(nip, nama) VALUES
("DS005", "Siska"),
("DS006", "Rudi"),
("DS007", "Minan"),
("DS008", "Rena"),
("DS009", "Ika"),
("DS010", "Asep"),
("DS011", "Adam");

INSERT INTO kontrak(nim, id_matkul, nip) VALUES
("019001", "010","DS005"),
("019001", "009","DS007"),
("019001", "002","DS002"),
("019002", "007","DS004"),
("019002", "006","DS005"),
("019002", "011","DS008"),
("019003", "009","DS007"),
("019003", "012","DS009"),
("019004", "009","DS007"),
("019004", "006","DS005"),
("019005", "013","DS010"),
("019005", "014","DS011"),
("019005", "011","DS008"),
("019006", "011","DS008"),
("019006", "008","DS006"),
("019006", "007","DS004"),
("019006", "010","DS005");

UPDATE kontrak set nilai="A" WHERE id_kontrak=13;
UPDATE kontrak set nilai="D" WHERE id_kontrak=14;
UPDATE kontrak set nilai="E" WHERE id_kontrak=15;
UPDATE kontrak set nilai="E" WHERE id_kontrak=16;
UPDATE kontrak set nilai="D" WHERE id_kontrak=17;
UPDATE kontrak set nilai="D" WHERE id_kontrak=18;
UPDATE kontrak set nilai="D" WHERE id_kontrak=19;
UPDATE kontrak set nilai="A" WHERE id_kontrak=20;
UPDATE kontrak set nilai="A" WHERE id_kontrak=21;
UPDATE kontrak set nilai="A" WHERE id_kontrak=22;
UPDATE kontrak set nilai="D" WHERE id_kontrak=23;
UPDATE kontrak set nilai="B" WHERE id_kontrak=24;
UPDATE kontrak set nilai="C" WHERE id_kontrak=25;
UPDATE kontrak set nilai="D" WHERE id_kontrak=26;
UPDATE kontrak set nilai="A" WHERE id_kontrak=27;
UPDATE kontrak set nilai="D" WHERE id_kontrak=28;
UPDATE kontrak set nilai="C" WHERE id_kontrak=29;

ALTER TABLE mahasiswa ADD lahir DATE;
UPDATE mahasiswa set lahir="2003-05-11" where nim="019001";
UPDATE mahasiswa set lahir="2005-02-21" where nim="019002";
UPDATE mahasiswa set lahir="2001-04-04" where nim="019003";
UPDATE mahasiswa set lahir="2001-06-14" where nim="019004";
UPDATE mahasiswa set lahir="2002-01-19" where nim="019005";
UPDATE mahasiswa set lahir="2004-02-20" where nim="019006";


.headers on
.mode column
-- TASK 1
SELECT *,(SELECT nama FROM jurusan WHERE jurusan.id_jurusan=mahasiswa.id_jurusan) AS namajurusan FROM mahasiswa;

-- TASK 2
SELECT *, DATE('now')-DATE(lahir) AS umur FROM mahasiswa where umur<20;

-- TASK 3
SELECT DISTINCT (kontrak.nim), mahasiswa.nama AS nama FROM kontrak LEFT JOIN mahasiswa ON kontrak.nim=mahasiswa.nim WHERE nilai<="B";

-- TASK 4
SELECT kontrak.nim AS nim, mahasiswa.nama AS nama, sum(mata_kuliah.sks) AS jumlahSKS FROM kontrak LEFT JOIN mahasiswa ON kontrak.nim=mahasiswa.nim 
LEFT JOIN mata_kuliah ON kontrak.id_matkul=mata_kuliah.id_matkul GROUP BY kontrak.nim HAVING jumlahSKS > 10;

-- TASK 5
SELECT kontrak.nim, mahasiswa.nama AS nama, kontrak.id_matkul, mata_kuliah.nama AS matkul FROM kontrak 
LEFT JOIN mata_kuliah ON kontrak.id_matkul=mata_kuliah.id_matkul LEFT JOIN mahasiswa ON kontrak.nim=mahasiswa.nim WHERE kontrak.id_matkul='009';

-- TASK 6
SELECT *,(SELECT COUNT(DISTINCT nim) FROM kontrak WHERE kontrak.nip=dosen.nip) AS jumlah_mahasiswa FROM dosen;

-- Task 7
SELECT *, DATE('now')-DATE(lahir) AS umur FROM mahasiswa ORDER BY umur ASC;

--TASK 8
SELECT id_kontrak, kontrak.nim AS nim, mahasiswa.nama AS nama, kontrak.id_matkul AS id_matkul, mata_kuliah.nama AS matkul, kontrak.nip AS nip, dosen.nama AS dosen
FROM kontrak LEFT JOIN mahasiswa ON kontrak.nim=mahasiswa.nim LEFT JOIN jurusan ON jurusan.id_jurusan=mahasiswa.id_jurusan LEFT JOIN dosen ON dosen.nip=kontrak.nip 
LEFT JOIN mata_kuliah ON kontrak.id_matkul=mata_kuliah.id_matkul WHERE nilai>="D";

