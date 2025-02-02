// header


const projectDetails = [
{
    img: "./assets/img/project/Student Savings/project student savings.jpg",
    title: "Student Savings",
    description: "LoremIpsum...."
},
{
    img: "./assets/img/project/Kartini/princessofjava.jpg",
    title: "Student Savings",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem consequatur iste eveniet accusantium, est qui velit nemo cupiditate cumque fugit voluptatum. Omnis velit dignissimos laboriosam saepe deserunt consequuntur adipisci minus."
},
];



const certificateDetails = [
    {
        img: "./assets/img/sertifikat/sertifikat_1.png",
        title: "Smartpath Successful Career Planning for Faculty of Social and Political Science",
        description: "Developed strong expertise in recruitment processes, business strategies, BUMN tests, analyzed data using Microsoft Tools, built foundational web programming skills, and enhanced career growth strategies."
    },
    {
        img: "./assets/img/sertifikat/sertifikat_2.png",
        title: "Growia Introduction to Data Analyst Bootcamp",
        description: "Acquired essential skills in data analysis, including data collection, cleaning, and visualization. Applied analytical tools and techniques to derive actionable insights, and developed a strong foundation in using key tools like Excel and SQL for data-driven decision-making."
    },
    {
        img: "./assets/img/sertifikat/sertifikat_3.png",
        title: "Laplacian National English Competition",
        description: "Achieved top honors by securing the Gold category (highest level) in a national English competition, demonstrating excellence in language proficiency and communication skills."
    },
    {
        img: "./assets/img/sertifikat/sertifikat4.png",
        title: "PT One Spirit Asia Event Organizer Training",
        description: "Successfully completed a comprehensive event organizer training, gaining both theoretical knowledge and practical experience in event planning. Learned to create proposals, manage essential documents like budgets, and oversee the full execution of events from start to finish."
    }
];


function showDetailsPrjct(index) {
    const detailCard = document.getElementById("detailCard");
    const detailImg = document.getElementById("detailImg");
    const detailTitle = document.getElementById("detailTitle");
    const detailDescription = document.getElementById("detailDescription");
    const overlay = document.getElementById("overlay"); // Ambil elemen overlay

    detailImg.src = projectDetails[index - 1].img;
    detailTitle.textContent = projectDetails[index - 1].title;
    detailDescription.textContent = projectDetails[index - 1].description;

    // Ganti kelas untuk menampilkan detail project di tengah
    detailCard.classList.add("hidden"); // Hide certificate detail
    const projectDetailCard = document.createElement("div");
    projectDetailCard.classList.add("project__detail");

    projectDetailCard.innerHTML = `
        <button class="close-btn" onclick="hideDetailsPrjc()">✖</button>
        <img id="detailImg" src="${projectDetails[index - 1].img}" alt="Project Detail" class="project__detail-img">
        <div class="portfolio__data">
            <h3 id="detailTitle" class="portfolio__title">${projectDetails[index - 1].title}</h3>
            <p id="detailDescription" class="portfolio__description">${projectDetails[index - 1].description}</p>
        </div>
    `;

    document.body.appendChild(projectDetailCard); // Tambahkan ke body
    overlay.classList.add("active"); // Tampilkan efek blur
}

function hideDetailsPrjc() {
    const projectDetailCard = document.querySelector(".project__detail");
    const certificateDetailCard = document.getElementById("detailCard");
    const overlay = document.getElementById("overlay");

    // Hapus project detail dari halaman
    if (projectDetailCard) {
        projectDetailCard.remove();
    }
    
    certificateDetailCard.classList.add("hidden"); // Sembunyikan detail sertifikat
    overlay.classList.remove("active"); // Hilangkan efek blur
}


function showDetails(index) {
    const detailCard = document.getElementById("detailCard");
    const detailImg = document.getElementById("detailImg");
    const detailTitle = document.getElementById("detailTitle");
    const detailDescription = document.getElementById("detailDescription");
    const overlay = document.getElementById("overlay"); // Ambil elemen overlay

    detailImg.src = certificateDetails[index - 1].img;
    detailTitle.textContent = certificateDetails[index - 1].title;
    detailDescription.textContent = certificateDetails[index - 1].description;

    detailCard.classList.remove("hidden");
    overlay.classList.add("active"); // Tampilkan efek blur
}

function hideDetails() {
    const detailCard = document.getElementById("detailCard");
    const overlay = document.getElementById("overlay"); // Ambil elemen overlay

    detailCard.classList.add("hidden");
    overlay.classList.remove("active"); // Hilangkan efek blur
}

// Mencegah gambar diakses di tab baru
const detailImg = document.getElementById("detailImg");
detailImg.addEventListener("contextmenu", (e) => {
    e.preventDefault(); // Mencegah klik kanan
    alert("Gambar tidak bisa diakses.");
});
detailImg.addEventListener("dragstart", (e) => {
    e.preventDefault(); // Mencegah drag
    alert("Gambar tidak bisa diakses.");
});

// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    slidesPerView: 1,
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        },
    },
    allowTouchMove: false // Disable swipe gesture
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Mencegah form dikirim secara default
    
    // Ambil nilai input dari user
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    // Format email yang dikirim
    let subject = "New Message from " + name;
    let body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;

    // Gantilah alamat email berikut dengan email tujuan Anda
    let recipient = "mhmdazhrilnmldn@gmail.com";

    // Buat mailto link untuk membuka Outlook
    let mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Arahkan user ke Outlook dengan email yang sudah terisi
    window.location.href = mailtoLink;
});



let spamCount = 0; // Hitungan untuk deteksi spam
const spamLimit = 3; // Batas maksimum spam
const resetTime = 10000; // Reset spam count setelah 10 detik
let isDevToolsOpen = false; // Status Developer Tools

document.addEventListener("keydown", (e) => {
    const key = e.key.toLowerCase(); // Konversi ke lowercase untuk konsistensi

    if (
        (e.ctrlKey && key === "p") || // Ctrl+P (Print)
        (e.ctrlKey && e.shiftKey && key === "i") || // Ctrl+Shift+I (Inspect Element)
        (e.ctrlKey && key === "u") || // Ctrl+U (View Source)
        (key === "f12") // Tombol F12 (Developer Tools)
    ) {
        e.preventDefault(); // Cegah tindakan bawaan browser
        e.stopPropagation(); // Hentikan aksi lebih lanjut

        if (key === "u") {
            // Jika Ctrl+U, arahkan ke halaman kosong
            window.location.href = "about:blank";
            return;
        }

        if (spamCount >= spamLimit) {
            alert("Maaf, Anda terlalu sering menekan tombol ini.");
            return;
        }

        spamCount++; // Tambah hitungan spam
        alert("Maaf, tindakan ini tidak diizinkan!"); // Tampilkan notifikasi

        // Reset spam count setelah beberapa detik
        setTimeout(() => {
            spamCount = 0;
        }, resetTime);
    }
});

// Deteksi Developer Tools dibuka dengan `console`
const devtools = {
    open: false,
    threshold: 160, // Ambang batas untuk mendeteksi inspeksi
};

// const checkDevTools = () => {
//     const widthThreshold = window.outerWidth - window.innerWidth > devtools.threshold;
//     const heightThreshold = window.outerHeight - window.innerHeight > devtools.threshold;

//     if (widthThreshold || heightThreshold) {
//         if (!isDevToolsOpen) {
//             isDevToolsOpen = true;
//             alert("Jangan mencoba membuka Developer Tools!");
//             window.location.href = "about:blank"; // Redirect ke halaman kosong
//         }
//     } else {
//         isDevToolsOpen = false;
//     }
// };

setInterval(checkDevTools, 1000);

// // Mencegah klik kanan
// document.addEventListener("contextmenu", (e) => {
//     e.preventDefault();
//     alert("Klik kanan tidak diizinkan.");
// });

function checkDevice() {
    const width = window.innerWidth;

    // Asumsikan laptop memiliki lebar layar lebih dari 1024px
    if (width <= 1024) {
        document.documentElement.innerHTML = `
        <div style="text-align: center; margin-top: 50px;">
        <h1>Website ini hanya dapat diakses melalui perangkat laptop.</h1>
        <p>Mohon maaf atas ketidaknyamanannya, silakan akses kembali menggunakan laptop.</p>
        <button onclick="closeWindow()">Exit</button>
        </div>
        `;
        alert("Not Found!!!");
    }
}

function closeWindow() {
    window.location.href = "https://www.google.com/";
}


// Periksa perangkat saat halaman dimuat
window.onload = checkDevice;
// Periksa perangkat saat ukuran layar berubah
window.onresize = checkDevice;