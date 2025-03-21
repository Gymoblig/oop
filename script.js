document.addEventListener('DOMContentLoaded', function () {
  
  const loader = document.getElementById('loader');
  const content = document.getElementById('content');
  const themeSwitcher = document.getElementById('theme-switcher');
  const themeIcon = document.getElementById('theme-icon');
  const arrowIcon = document.getElementById('sipka');
  const body = document.body;

  setTimeout(() => {
      loader.style.opacity = 0;
      setTimeout(() => {
          loader.style.display = 'none';
          content.style.display = 'block';
      }, 1000);
  }, 2000);

  if (localStorage.getItem('theme') === 'light') {
      body.classList.add('light');
      themeIcon.src = 'moon_dark.png';
      arrowIcon.src = 'arrow_light.png';
  } else {
      themeIcon.src = 'sun_light.png';
      arrowIcon.src = 'arrow_dark.png';
  }

  themeSwitcher.addEventListener('click', function () {
      if (body.classList.contains('light')) {
          body.classList.remove('light');
          themeIcon.src = 'sun_light.png';
          arrowIcon.src = 'arrow_dark.png';
          localStorage.setItem('theme', 'dark');
      } else {
          body.classList.add('light');
          themeIcon.src = 'moon_dark.png';
          arrowIcon.src = 'arrow_light.png';
          localStorage.setItem('theme', 'light');
      }
  });

  const exerciseLinks = document.querySelectorAll('#exercise-selector ul li a');
  const exerciseTitle = document.getElementById('exercise-title');
  const exerciseDetails = document.getElementById('exercise-details');
  
    // Obsah cvičení
    const exercises = {
      Literatúra:
      `<h4>Tu na tomto mieste nájdete celkom užitočnú literatúru, ktorá vám dokáže pomôcť pri riešení úloh :D</h4>
          <ul>
            <li><a href="https://refactoring.guru/design-patterns">Design Patterns</a> od Refactoring Guru</li>
            <li><a href="https://docs.oracle.com/en/java/javase/21/">JDK 21 Documentácia</a> od Oracle</li>
            <li><a href="https://docs.oracle.com/javase/tutorial/tutorialLearningPaths.html">Java Tutorials - Learning Paths</a> od Oracle</li>
          </ul>`
      ,
      Zadania:
      `<h4>Tu na tomto mieste nájdete všetky zadania z predmetu OOP</h4>
          <p>Zadanie č.1:<p>
          <ul>
            <li><a href="zadania/oop2025_zadanie_1.pdf">Inštrukcie k zadaniu</li>
            <li><a href="zadania/oop2025_zadanie_1_src.zip">Zdrojový kód na úpravu</li>
          </ul>`
      ,
      1: `<h4>Vytvorenie projektu:</h4>
          <ul>
            <li>v IntelliJ Idea</li>
            <li>v konzole pomocou javac, java a jar</li>
            <li>v konzole pomocou gradle</li>
          </ul>
          <ul>
            <li><a href="cv01/cv01_prezentacia.pdf">Prezentácia V1</a></li>
            <li><a href="cv01/cv01_prezentacia_v2.pdf">Prezentácia V2</a></li>
            <li><a href="cv01/oop2025_cv01_app_intellij.zip">IntelliJ Idea App</a></li>
            <li><a href="cv01/oop2025_cv01_konzola.zip">Príklady s Konzolou</a></li>
          </ul>`,
      2: `<h4>Obsah:</h4>
          <ul>
              <li>primitívne a referenčné typy</li>
              <li>git, github</li>
              <li>literály</li>
              <li>obálkové triedy (wrappery)</li>
              <li>final premenná</li>
              <li>pri deklarácii uvádzať typ premennej</li>
              <li>dokumentácia v IntelliJ Idea</li>
              <li>vytvorené .jar v IntelliJ Idea</li>
            </ul>
            <ul>
              <li><a href="cv02/cv02_prezentacia.pdf">Prezentácia</a></li>
              <li><a href="cv02/oop2025_cv02.zip">Súbory na stiahnutie</a></li>
            </ul>`,
      3: `<h4>Obsah:</h4>
          <ul>
              <li>Polia</li>
              <li>Funkcie</li>
              <li>Import</li>
              <li>Logovanie (tinylog)</li>
            </ul>
            <ul>
              <li><a href="cv03/oop2025_cv03_naWeb.zip</a></li>
              <li><a href="cv02/oop2025_cv02.zip">Súbory na stiahnutie</a></li>
            </ul>
            <img src="cv03/oop_2025_cv03_sifra.png" alt="cv03">`,
      4: `<h4>Obsah:</h4>
      <ul>
          <li>For Each</li>
          <li>Break a continue s návestím</li>
          <li>Switch aj ako výraz bez break</li>
          <li>Text block</li>
          <li>Assert</li>
          <li>Preťažovanie funkcií/metód</li>
          <li>Parametre funkcií/metód</li>
          <li>Preťažovanie funkcií/metó</li>
            <li>Rekurzia</li>
            <li>Static final konštanty</li>
            <li>Enum</li>

        </ul>
        <ul>
          <li><a href="cv04/cv04_prezentacia.pdf">Prezentácia</a></li>
          <li><a href="cv04/oop2025_cv04.zip">Súbory na stiahnutie</a></li>
        </ul>`,
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
        if (id === 'Literatúra' || id === 'Zadania') {
            exerciseTitle.textContent = id;
        } else {
            exerciseTitle.textContent = `Cvičenie ${id}`;
        }
        exerciseDetails.innerHTML = exercises[id] || '<p>Obsah neexistuje.</p>';
    }
    
  

  loadExercise(4);
  exerciseLinks.forEach(link => {
      if (link.getAttribute('data-exercise') === "4") {
          link.classList.add('selected');
      }
  });

  exerciseLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          const exerciseId = this.getAttribute('data-exercise');
          if (!exerciseId) return;
          e.preventDefault();
          exerciseLinks.forEach(l => l.classList.remove('selected'));
          this.classList.add('selected');
          loadExercise(exerciseId);
      });
  });

  const hamburgerMenu = document.getElementById('hamburger-menu');
  const mobileMenu = document.getElementById('mobile-menu');

  hamburgerMenu.addEventListener('click', function () {
      mobileMenu.classList.toggle('active');
  });

  const mobileLinks = document.querySelectorAll('#mobile-menu ul li a');
  mobileLinks.forEach(link => {
      link.addEventListener('click', function (e) {
          const exerciseId = this.getAttribute('data-exercise');
          if (!exerciseId) return;
          e.preventDefault();
          loadExercise(exerciseId);
          mobileMenu.classList.remove('active');
          document.getElementById('exercise-content').scrollIntoView({ behavior: 'smooth' });
      });
  });
});
