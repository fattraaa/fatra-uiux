document.addEventListener('DOMContentLoaded', function() {
    // Tambahkan class untuk animasi ke body
    document.body.classList.add('fade-in');
    
    // Tangkap semua link navigasi
    const navLinks = document.querySelectorAll('nav a, .footer-nav a, a.btn');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        // Hanya proses link internal (dalam website yang sama)
        if (this.hostname === window.location.hostname) {
          e.preventDefault();
          const targetHref = this.getAttribute('href');
          
          // Animasi fade out
          document.body.classList.add('fade-out');
          
          // Tunggu animasi selesai lalu pindah ke halaman yang dituju
          setTimeout(function() {
            window.location.href = targetHref;
          }, 500); // Sesuaikan dengan durasi animasi
        }
      });
    });
  });