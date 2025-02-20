document.addEventListener('DOMContentLoaded', function () {
    // Elementy pre loader, obsah, prepínač témy a jeho ikonu
    const loader = document.getElementById('loader');
    const content = document.getElementById('content');
    const themeSwitcher = document.getElementById('theme-switcher');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
  
    // Loader fade-out efekt
    setTimeout(() => {
      loader.style.opacity = 0;
      setTimeout(() => {
        loader.style.display = 'none';
        content.style.display = 'block';
      }, 1000);
    }, 2000);
  
    // Inicializácia témy
    if (localStorage.getItem('theme') === 'light') {
      body.classList.add('light');
      // V svetlom režime zobrazíme mesiac pre prepínanie na tmavý režim
      themeIcon.src = 'moon_dark.png';
    } else {
      // V tmavom režime zobrazíme slnko pre prepínanie na svetlý režim
      themeIcon.src = 'sun_light.png';
    }
  
    // Prepínač témy
    themeSwitcher.addEventListener('click', function () {
      if (body.classList.contains('light')) {
        body.classList.remove('light');
        themeIcon.src = 'sun_light.png';
        localStorage.setItem('theme', 'dark');
      } else {
        body.classList.add('light');
        themeIcon.src = 'moon_dark.png';
        localStorage.setItem('theme', 'light');
      }
    });
  
    // Práca s cvičeniami pre desktopový selector
    const exerciseLinks = document.querySelectorAll('#exercise-selector ul li a');
    const exerciseTitle = document.getElementById('exercise-title');
    const exerciseDetails = document.getElementById('exercise-details');
  
    // Obsah cvičení
    const exercises = {
      1: `<h4>Vytvorenie projektu v IntelliJ Idea, na konzole pomocou javac, java, jar, na konzole pomocou gradle</h4>
          <ul>
            <li><a href="cv01/cv01_prezentacia.pdf">Prezentácia</a></li>
            <li><a href="cv01/oop2025_cv01_app_intellij.zip">IntelliJ Idea App</a></li>
            <li><a href="cv01/oop2025_cv01_konzola.zip">Príklady s Konzolou</a></li>
          </ul>`,
      2: '<p>Obsah pre Cvičenie 2.</p>',
      3: '<p>Obsah pre Cvičenie 3.</p>',
      4: '<p>Obsah pre Cvičenie 4.</p>',
      5: '<p>Obsah pre Cvičenie 5.</p>',
      6: '<p>Obsah pre Cvičenie 6.</p>',
      7: '<p>Obsah pre Cvičenie 7.</p>',
      8: '<p>Obsah pre Cvičenie 8.</p>',
      9: '<p>Obsah pre Cvičenie 9.</p>',
      10: '<p>Obsah pre Cvičenie 10.</p>',
      11: '<p>Obsah pre Cvičenie 11.</p>',
      12: '<p>Obsah pre Cvičenie 12.</p>',
    };
  
    function loadExercise(id) {
      exerciseTitle.textContent = `Cvičenie ${id}`;
      exerciseDetails.innerHTML = exercises[id] || '<p>Obsah neexistuje.</p>';
    }
  
    // Načíta predvolené cvičenie
    loadExercise(1);
    exerciseLinks.forEach(link => {
      if (link.getAttribute('data-exercise') === "1") {
        link.classList.add('selected');
      }
    });
  
    exerciseLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        exerciseLinks.forEach(l => l.classList.remove('selected'));
        this.classList.add('selected');
        const exerciseId = this.getAttribute('data-exercise');
        loadExercise(exerciseId);
      });
    });
  
    // Spracovanie slider menu pre mobilné zariadenia
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');
  
    // Toggle slider menu pri kliknutí na hamburger tlačidlo
    hamburgerMenu.addEventListener('click', function () {
      mobileMenu.classList.toggle('active');
    });
  
    // Po kliknutí na odkaz v slider menu načítame cvičenie, zavrieme menu a scrollneme na obsah
    const mobileLinks = document.querySelectorAll('#mobile-menu ul li a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const exerciseId = this.getAttribute('data-exercise');
        loadExercise(exerciseId);
        mobileMenu.classList.remove('active');
        // Plynulé scrollnutie na obsah cvičenia
        document.getElementById('exercise-content').scrollIntoView({ behavior: 'smooth' });
      });
    });
  });
  