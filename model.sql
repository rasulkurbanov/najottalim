-- CREATE TABLE posts (
-- 	id bigserial not null,
-- 	full_name varchar(64) not null,
-- 	phone_number varchar(64) not null,
-- 	course_type varchar(65) not null,
-- 	craeted timestamp with time zone default CURRENT_TIMEZONE,
-- 	PRIMARY KEY(id)
-- )


CREATE TABLE courses (
	id bigserial not null,
	name character varying(64) not null,
	price bigint not null,
	duration smallint,
	picture character varying(128),
	short_info text,
	long_info text,
	lesson_duration bigint,
	PRIMARY KEY(id)
);

CREATE TABLE users (
	id bigserial not null,
	username character varying(64) not null,
	user_password character varying(32) not null,
	PRIMARY KEY(id)
);

CREATE TABLE team (
	id bigserial not null,
	full_name varchar(100) not null,
	course_id varchar(100) not null,
	profession varchar(200) not null,
	experience varchar(50) not null,
	img_path VARCHAR(255) not null
)

CREATE TABLE students (
	id bigserial not null,
	full_name varchar(200) not null,
	phone_number varchar(20) not null,
	selected_couse varchar(100) not null 
)

INSERT INTO courses (
	name, 
	price,
	duration, 
	short_info, 
	long_info,
	lesson_duration
) 
VALUES (
	'Social media marketing', 
	550, 
	2, 
	'Haftada 3 kun 2 soatdan', 
	'Social Media Marketing ya''ni ijtimoiy media marketing bolib, ijtimoiy tarmoqlarda marketing yuritish ya''ni brendni, kompaniya yoki tashkilotni yoki shaxsiy brendni tanitish uning obunachilar sonini oshirish hamda savdo aylanmasini yaxshilashdan iborat bo''lgan soha hisoblanadi',
	2
),
(
	'Bootcamp: Dasturlash Full stack',
	12500,
	9,
	'Bootcamp veb dasturlash kursi 9 oy davomida haftada 5 kun 5 soatdan mashg''ulot olib borasiz. 9 oydan so''ng esa 1 oy davomida real loyihalar bilan amaliyot o''tash imkoni taqdim etiladi',
	'Kursni tamomlab esa ixtiyoriy turdagi vebsayt va veb dasturlar yaratish, landing page''lar yasash, turli bloglar tuzish, internet do''konlar, turli vazifalarni bajaruvchi telegram botlari, ichki ishlar tartibini avtomatlashtirish, umuman olganda, nafaqat saytlar balki, murakkab hisob-kitobga ega browserlar orqali ishlovchi amaliy dasturlarni ham ishlab chiqishingiz mumkin bo''ladi',
	5
),
(
	'Frontend kursi',
	500,
	5,
	'Haftada 3 kun 2 soatdan',
	'Bu mehnat bozorida inson omilini kamaytirish, ishlarni osonlashtirish va avtomatlashtirish, ma''lumotlarni to''plab ularni qayta ishlash maqsadida kompyuterlarga kod yozish orqali amalga oshiriladigan sohadir',
	2
),
(
	'Grafik dizayn',
	600,
	10,
	'Haftada 3 kun 2 soatdan',
	'Internet saytlar, mobil ilovalar, jurnal va gazetalar, kitob va disk muqovalari, restoran menyulari, mahsulot kataloglari, vizitkalar, mahsulot qadoqlari, sanoat tovarlari, reklama bannerlari, flayer va bukletlar, nishon va sertifikatlar va shu kabi hayotimizda ko''rishimiz mumkin bo''lgan ko''plab narsalarning kompyuter texnologiyalari orqali aks ettirishdir',
	2
),
(
	'Bootcamp: Grafik dizayn',
	8000,
	7,
	'Haftada 5 kun 3 soatdan',
	'Internet saytlar, mobil ilovalar, jurnal va gazetalar, kitob va disk muqovalari, restoran menyulari, mahsulot kataloglari, vizitkalar, mahsulot qadoqlari, sanoat tovarlari, reklama bannerlari, flayer va bukletlar, nishon va sertifikatlar va shu kabi hayotimizda ko''rishimiz mumkin bo''lgan ko''plab narsalarning kompyuter texnologiyalari orqali aks ettirishdir',
	3
),
(
	'Moushn grafika',
	800,
	4,
	'Haftada 3 kun 2 soatdan',
	'Video, audio va matnni yagona animatsion syujetda birlashtirib, bir paytni o''zida 3 ta ma''lumotni yetkazadi. Ular jamlanganda tomoshabinlar hissiyotini kuchliroq darajada o''ziga qaratadi: matn diqqatni tortadi, ovoz va grafika xotirada yorqin obrazlarni muhrlaydi',
	2
),
(
	'Boshlang''ich arab tili',
	200,
	3,
	'Haftada 2 kun 1.5 soatdan',
	null,
	1.5
),
(
	'Arab tili grammatika',
	250,
	6,
	'Haftada 2 kun 1.5 soatdan',
	null,
	1.5
),
(
	'Arab tili: Muxovara',
	300,
	2,
	'Haftada 2 kun 1.5 soatdan',
	null,
	1.5
),
(
	'Rus tili',
	290,
	6,
	'Haftada 3 kun 1.5 soatdan',
	null,
	1.5
),
(
	'Ingliz tili Beginner',
	290,
	3,
	'Haftada 3 kun 1.5 soatdan',
	null,
	1.5
),
(
	'Ingliz tili Elementary',
	290,
	3,
	'Haftada 3 kun 1.5 soatdan',
	null,
	1.5
),
(
	'Ingliz tili Pre Intermediate',
	290,
	3,
	'Haftada 3 kun 1.5 soatdan',
	null,
	1.5
),
(
	'Ingliz tili Pre IELTS',
	290,
	3,
	'Haftada 3 kun 1.5 soatdan',
	null,
	1.5
),
(
	'Ingliz tili IELTS',
	400,
	3,
	'Haftada 3 kun 1.5 soatdan',
	null,
	1.5
);


--TEAM bo'limiga data insert qilish
INSERT INTO team (
	full_name,
	course_name,
	profession,
	experience
)
VALUES
(
	'Muhammadxon Najimov',
	'Backend dasturlash',
	'Data Engineer & Server Side',
	'8+ yil'
),
(
	'Muhammadjavohir Sur''atov',
	'Frontend dasturlash',
	'Frontend dasturchi',
	'3 yil'
),
(
	'Dilshod Ismoilov',
	'Grafik dizayn',
	'Reklama va amaliy grafika mutaxassisi',
	'9 yil'
),
(
	'Abdulla Abdurahimov',
	'Social Media Marketing',
	'Marketolog, SMM Manager',
	'2 yil'
),
(
	'Shavkat Abduhalilov',
	'Moushin grafika',
	'Montajchi, Konoteleoperator, Motion dizayner, grafist',
	'6 yil'
)