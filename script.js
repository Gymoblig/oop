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
      literatura:
      `<h4>Tu na tomto mieste nájdete celkom užitočnú literatúru, ktorá vám dokáže pomôcť pri riešení úloh :D</h4>
          <ul>
            <li><a href="https://refactoring.guru/design-patterns">Design Patterns</a> od Refactoring Guru</li>
            <li><a href="https://docs.oracle.com/en/java/javase/21/">JDK 21 Documentácia</a> od Oracle</li>
            <li><a href="https://docs.oracle.com/javase/tutorial/tutorialLearningPaths.html">Java Tutorials - Learning Paths</a> od Oracle</li>
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
  

  loadExercise(1);
  exerciseLinks.forEach(link => {
      if (link.getAttribute('data-exercise') === "1") {
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
