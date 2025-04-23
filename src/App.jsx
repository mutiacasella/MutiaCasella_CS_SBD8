import Navbar from "./Navbar";
import Amazon from './assets/amazon.png'
import Google from './assets/google.png'
import IBMm from './assets/ibm.png'
import PennState from './assets/pennstate.png'
import Stanford from './assets/stanford.png'
import Unity from './assets/unity.png'
import VMWare from './assets/vmware.png'
import Yale from './assets/yale.png'
import WWFf from './assets/wwf.png'
import Oxford from './assets/oxford.png'
import Kantor1 from './assets/kantor1.jpg'
import Kantor2 from './assets/kantor2.jpg'
import Kantor3 from './assets/kantor3.jpg'
import Depan1 from './assets/depan1.png'

export default function App() {
  return (
    <>
      <Navbar />
      <div className="font-[Poppins] text-gray-800">

        {/* Home */}
        <section className="h-screen pt-24 bg-gradient-to-b from-blue-700 via-indigo-500 to-purple-200 text-white flex items-center justify-center px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left lg:w-1/2">
              <h1 className="text-9xl md:text-5xl font-bold mb-6 drop-shadow-md">
                Pelajari tanpa batasan
              </h1>

              <p className="text-lg md:text-xl mb-10 drop-shadow-md">
                Mulai, beralih, atau kembangkan karier Anda dengan lebih dari 5.800 kursus, Sertifikat Profesional, 
                dan gelar dari universitas dan perusahaan kelas dunia.
              </p>

              <div className="flex justify-center lg:justify-start gap-4 flex-wrap drop-shadow-md">
                <a href="#gabung" className="border border-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-blue-600 transition drop-shadow-md">
                  Mulai Sekarang
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
              <img src={Depan1} alt="Depan1" className="w-[320px]" />
            </div>

          </div>
        </section>


        {/* About Us */}
        <section id="info" className="py-8 px-6 max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4"> About Us </h2>
          <p className="mb-8 text-justify leading-relaxed text-lg">
            Coursera merupakan perusahaan teknologi yang menyediakan solusi inovatif untuk membantu individu ataupun institusi dalam menghadapi tantangan 
            di era transformasi digital. Layanan kami mencakup pengembangan website, aplikasi mobile lintas platform, serta integrasi teknologi AI 
            untuk otomatisasi proses bisnis. Dengan pendekatan yang berfokus pada kebutuhan klien, kami berkomitmen menghadirkan layanan berkualitas tinggi 
            yang memberikan dampak nyata.
          </p>
        </section>      

        {/* Services */}
        <section id="layanan" className="py-9 bg-gray-100 px-6">
          <h2 className="text-2xl font-bold text-center mb-10"> Explore Our Services </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2 text-center"> 🎓 Online Courses </h3>
              <p className="text-justify"> Pelajari berbagai topik dari universitas dan institusi terkemuka di dunia, kapan saja dan di mana saja. </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2 text-center"> 📜 Professional Certificates </h3>
              <p className="text-justify"> Dapatkan sertifikasi yang diakui industri dan dirancang khusus untuk membekali Anda dengan keahlian praktis di dunia kerja. </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-semibold mb-2 text-center"> 💼 Career Training </h3>
              <p className="text-justify"> Persiapkan diri Anda untuk pekerjaan-pekerjaan yang sedang dibutuhkan di era digital dengan program pelatihan terbaik. </p>
            </div>
          </div>
        </section>

        {/* Kolaborasi */}
        <section className="py-8 px-6 w-full mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10"> Bekerja sama dengan 300+ perusahaan dan universitas </h2>
          <div className="flex flex-wrap justify-center items-center gap-9">
            <img src={Amazon} alt="Amazon" className="h-14 object-contain" />
            <img src={Google} alt="Google" className="h-14 object-contain" />
            <img src={IBMm} alt="IBM" className="h-14 object-contain" />
            <img src={PennState} alt="Penn State" className="h-14 object-contain" />
            <img src={Stanford} alt="Stanford" className="h-14 object-contain" />
            <img src={Unity} alt="Unity" className="h-14 object-contain" />
            <img src={VMWare} alt="VMWare" className="h-14 object-contain" />
            <img src={Yale} alt="Stanford" className="h-14 object-contain" />
            <img src={WWFf} alt="Unity" className="h-14 object-contain" />
            <img src={Oxford} alt="VMWare" className="h-14 object-contain" />
          </div>
        </section>


        {/* Gabung */}
        <section id="gabung" className="bg-blue-50 min-h-screen flex items-center py-12 px-6">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
            <div className="flex flex-col gap-6 items-center w-full lg:w-1/2">
              <img src={Kantor2} alt="Kantor2" className="rounded-lg shadow-md w-[200px]" />
              <img src={Kantor3} alt="Kantor3" className="rounded-lg shadow-md w-[200px]" />
            </div>

            <div className="w-full lg:w-1/2 flex">
              <img src={Kantor1} alt="Kantor1" className="rounded-lg shadow-md w-[300px]" />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="max-w-xl text-center lg:text-left">
              <div className="max-w-lg">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">
                  Ambil langkah selanjutnya menuju sasaran pribadi dan profesional Anda dengan Coursera.
                </h2>

                <p className="mb-6 text-gray-700 text-[17px] leading-relaxed"> 
                  Bergabunglah sekarang untuk menerima rekomendasi yang dipersonalisasi dari katalog lengkap Coursera.
                </p>
              </div>
              
              <a onClick={(e) => e.preventDefault()} className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition"> Gabung Gratis </a>
            </div>
          </div>
        </section>


        {/* Footer */}
        <footer id="kontak" className="bg-gray-900 text-white text-sm py-6 px-6 text-center">
          <p> © 2024 Coursera Inc. All rights reserved | 📧 privacy@coursera.org | ☎ (800) 952-5210 </p>
        </footer>
      
      </div>
    </>
  );
}