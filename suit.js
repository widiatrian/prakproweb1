 function cetakKeDOM(namaGame, user, komputer, status) {
        const areaHasil = document.getElementById("hasil-suit");
        areaHasil.innerHTML = `
            <p><strong>Mode:</strong> ${namaGame}</p>
            <p>Anda memilih: <b>${user}</b> | Komputer memilih: <b>${komputer}</b></p>
            <h4>Hasil: ${status}</h4>
        `;
    }

function suitBatu() {
        const pilihan = ["batu", "gunting", "kertas"];
        let inputUser = prompt("Masukkan pilihan (batu / gunting / kertas):");
        
        if (!inputUser) return;
        let user = inputUser.toLowerCase().trim();

        if (!pilihan.includes(user)) {
            alert("Pilihan tidak valid! Ketik batu, gunting, atau kertas.");
            return;
        }

        let komputer = pilihan[Math.floor(Math.random() * 3)];
        let status = "";

        if (user === komputer) {
            status = "SERI!";
        } else if (
            (user === "batu" && komputer === "gunting") ||
            (user === "gunting" && komputer === "kertas") ||
            (user === "kertas" && komputer === "batu")
        ) {
            status = "ANDA MENANG! 🎉";
        } else {
            status = "ANDA KALAH! 😢";
        }

        cetakKeDOM("Batu Gunting Kertas", user, komputer, status);
    }

function suitGajah() {
        const pilihan = ["gajah", "orang", "semut"];
        let inputUser = prompt("Masukkan pilihan (gajah / orang / semut):");
        
        if (!inputUser) return;
        let user = inputUser.toLowerCase().trim();

        if (!pilihan.includes(user)) {
            alert("Pilihan tidak valid! Ketik gajah, orang, atau semut.");
            return;
        }

        let komputer = pilihan[Math.floor(Math.random() * 3)];
        let status = "";

        if (user === komputer) {
            status = "SERI!";
        } else if (
            (user === "gajah" && komputer === "orang") ||
            (user === "orang" && komputer === "semut") ||
            (user === "semut" && komputer === "gajah")
        ) {
            status = "ANDA MENANG! 🎉";
        } else {
            status = "ANDA KALAH! 😢";
        }

        cetakKeDOM("Gajah Orang Semut", user, komputer, status);
    }

function suitJari() {
        const pilihan = ["jempol", "telunjuk", "kelingking"];
        let inputUser = prompt("Masukkan pilihan (jempol / telunjuk / kelingking):");
        
        if (!inputUser) return;
        let user = inputUser.toLowerCase().trim();

        if (!pilihan.includes(user)) {
            alert("Pilihan tidak valid! Ketik jempol, telunjuk, atau kelingking.");
            return;
        }

        let komputer = pilihan[Math.floor(Math.random() * 3)];
        let status = "";

        if (user === komputer) {
            status = "SERI!";
        } else if (
            (user === "jempol" && komputer === "telunjuk") ||
            (user === "telunjuk" && komputer === "kelingking") ||
            (user === "kelingking" && komputer === "jempol")
        ) {
            status = "ANDA MENANG! 🎉";
        } else {
            status = "ANDA KALAH! 😢";
        }

        cetakKeDOM("Jempol Telunjuk Kelingking", user, komputer, status);
    }