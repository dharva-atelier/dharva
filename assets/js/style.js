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

let spamCount = 0; // Hitungan untuk deteksi spam
const spamLimit = 5; // Batas maksimum spam

document.addEventListener("keydown", (e) => {
    if (
        (e.ctrlKey && e.key === "p") || // Ctrl+P
        (e.ctrlKey && e.shiftKey && e.key === "I") || // Ctrl+Shift+I
        (e.ctrlKey && e.key === "u") // Ctrl+U
    ) {
        e.preventDefault(); // Cegah tindakan bawaan browser
        e.stopPropagation(); // Hentikan aksi lebih lanjut

        if (spamCount >= spamLimit) {
            alert("Maaf, tidak bisa! Anda terlalu sering menekan tombol.");
            return; // Jangan lanjut jika sudah mencapai batas spam
        }

        spamCount++; // Tambah hitungan spam
        alert("Maaf, tidak bisa!"); // Tampilkan notifikasi
    }
});

// Mencegah klik kanan (opsional, untuk keamanan tambahan)
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    alert("Klik kanan tidak diizinkan.");
});


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