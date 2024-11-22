document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  
    const themeIcon = document.getElementById("themeIcon");
    if (document.body.classList.contains("dark-mode")) {
      themeIcon.src ="src/image/night-mode.png"; 
      themeIcon.alt = "Alternar para Modo Claro";
    } else {
      themeIcon.src ="src/image/night-mode.png"; 
      themeIcon.alt = "Alternar para Modo Escuro";
    }
  });


  