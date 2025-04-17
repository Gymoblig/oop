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
            <li><a href="zadania/oop2025_zadanie_1.pdf">Inštrukcie k zadaniu</a></li>
            <li><a href="zadania/oop2025_zadanie_1_src.zip">Zdrojový kód na úpravu</a></li>
          </ul>
          
          <p>Zadanie č.2:<p>
          <ul>
            <li><a href="zadania/oop2025_zadanie_2.pdf">Inštrukcie k zadaniu</a></li>
            <li><a href="zadania/oop2025_zadanie_2_src.zip">Zdrojový kód na úpravu</a></li>
          </ul>

          <p>Zadanie č.3:<p>
          <ul>
            <li><a href="zadania/oop2025_zadanie3_v2.pdf">Inštrukcie k zadaniu</a></li>
            <li><a href="zadania/oop2025_zadanie3_src.zip">Zdrojový kód na úpravu</a></li>
          </ul>

          <p>Zadanie č.4:<p>
          <ul>
            <li><a href="zadania/zadanie4_aktualizacia_07_04_2025.pdf">Inštrukcie k zadaniu</a></li>
            <li><a href="zadania/zadanie4_aktualizacia_07_04_2025.zip">Zdrojový kód na úpravu</a></li>
          </ul>

          <p>Zadanie č.5:<p>
          <ul>
            <li><a href="zadania/zadanie5.pdf">Inštrukcie k zadaniu</a></li>
            <li><a href="zadania/zadanie5.zip">Zdrojový kód na úpravu</a></li>
          </ul>
           `
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
      5: `<h4>Obsah:</h4>
      <ul>
          <li>Triedy a Objekty/Inštancie</li>
          <li>Balíky</li>
          <li>Unit testy (junit)</li>
        </ul>
        <ul>
          <li><a href="cv05/cv05_prezentacia.pdf">Prezentácia</a></li>
          <li><a href="cv05/oop2025_cv05.zip">Súbory na stiahnutie</a></li>
        </ul>`,
      6: `<h4>Obsah:</h4>
      <ul>
          <li>Dedičnosť</li>
          <li>Volanie konštruktora nadtriedy (super), tej istej triedy (this)</li>
          <li>Prekrývanie konštruktorov a metód (@Override), prístup k implementácii z nadtriedy (super)</li>
          <li>Protected</li>
          <li>Abstraktná trieda</li>
          <li>Abstraktná metóda</li>
        </ul>
        <ul>
          <li><a href="cv06/cv06_prezentacia.pdf">Prezentácia</a></li>
          <li><a href="cv06/oop2025_cv06.zip">Súbory na stiahnutie</a></li>
        </ul>`,
      7: `<h4>Obsah:</h4>
      <ul>
          <li>Výnimky</li>
          <li>Rozhrania</li>
        </ul>
        <ul>
          <li><a href="cv07/cv07_prezentacia.pdf">Prezentácia</a></li>
          <li><a href="cv07/oop2025_cv07.zip">Súbory na stiahnutie</a></li>
        </ul>`,
      8: `<h4>Obsah:</h4>
      <ul>
          <liVnorené typy</li>
          <li>Pozorovateľ / Observer / Listener</li>
          <li>Porovnávanie:</li>
          <ul>
            <li>Equals() a hashCode()</li>
            <li>Comparable</li>
            <li>Comparator</li>
          </ul>
        </ul>
        <ul>
          <li><a href="cv08/cv08_prezentacia.pdf">Prezentácia</a></li>
          <li><a href="cv08/oop2025_cv08.zip">Súbory na stiahnutie</a></li>
        </ul>`,
      9: '<p>Obsah pre Cvičenie 9.</p>',
      10: '<p>Obsah pre Cvičenie 10.</p>',
      11: '<p>Obsah pre Cvičenie 11.</p>',
      12: '<p>Obsah pre Cvičenie 12.</p>',
    };
  

    // Expected structures for each assignment
  const expectedStructures = {
    'Zadanie 1': [
      'src/',
      'src/Main.java',
      'src/VectorUtils.java'
    ],
    'Zadanie 2': [
      'src/',
      'src/Main.java',
      'src/ShoppingCart.java',
      'src/Product.java'
    ],
    'Zadanie 3': [
      'src/',
      'src/handler/',
      'src/handler/TaskHandler.java',
      'src/tasks/',
      'src/tasks/AbstractTask.java',
      'src/tasks/SimpleTask.java',
      'src/tasks/RecurringTask.java',
      'src/tasks/TaskIdGenerator.java'
    ],
    'Zadanie 4': [
      'src/',
      'src/image/',
      'src/image/RasterImage.java',
      'src/image/TextImage.java'
    ],
    'Zadanie 5': [
      'src/',
      'src/bookstore/',
      'src/bookstore/BookStore.java',
      'src/bookstore/Book.java',
      'src/bookstore/Customer.java',
      'src/bookstore/NotInInventoryException.java',

    ],
    // Add more assignments as needed
  };
 
    function insertZipVerification() {
      const zipVerificationHTML = `
        <div id="zip-verification-container">
          <select id="assignment-selector">
            <option value="Zadanie 1">Zadanie 1</option>
            <option value="Zadanie 2">Zadanie 2</option>
            <option value="Zadanie 3">Zadanie 3</option>
            <option value="Zadanie 4">Zadanie 4</option>
            <option value="Zadanie 5">Zadanie 5</option>
          </select>
          <input type="file" id="zip-file-input" accept=".zip" />
          <button id="verify-button">Overenie štruktúry ZIP súboru</button>
        </div>
      `;
  
      // Append the ZIP verification container to the exercise details
      const exerciseDetails = document.getElementById('exercise-details');
      exerciseDetails.insertAdjacentHTML('beforeend', zipVerificationHTML);
  
      // Add the "visible" class after the container is inserted
    const zipVerificationContainer = document.getElementById('zip-verification-container');
    if (zipVerificationContainer) {
      zipVerificationContainer.classList.add('visible'); // Add the "visible" class
    }
      // Get references to the ZIP verification elements
      const zipFileInput = document.getElementById('zip-file-input');
      const assignmentSelector = document.getElementById('assignment-selector');
      const verifyButton = document.getElementById('verify-button');
  
      // ZIP file verification logic
      verifyButton.addEventListener('click', function () {
        const file = zipFileInput.files[0];
        if (!file) {
          alert('Nie je vybratý súbor ZIP.');
          return;
        }
  
        // Get the selected assignment
        const selectedAssignment = assignmentSelector.value;
        const expectedStructure = expectedStructures[selectedAssignment];
  
        if (!expectedStructure) {
          alert('Nebola definovaná štruktúra pre zvolené zadanie.');
          return;
        }
  
        const reader = new FileReader();
        reader.onload = function (e) {
          const zipData = e.target.result;
          JSZip.loadAsync(zipData).then(function (zip) {
            // Check if .DS_Store is present in the ZIP
            if (zip.files['.DS_Store'] || zip.files['src/.DS_Store'] || zip.files['src/image/.DS_Store'] || zip.files['src/handler/.DS_Store'] || zip.files['src/tasks/.DS_Store'] || zip.files['src/bookstore/.DS_Store']) {
              alert('Súbor .DS_Store bol nájdený. Stiahne sa nový ZIP bez tohto súboru.');

              // Create a new zip object to store files without .DS_Store
              const newZip = new JSZip();

              // Loop through the files and add them to the new zip, skipping .DS_Store
              Object.keys(zip.files).forEach(function (filename) {
                if (filename !== '.DS_Store' && filename !== 'src/.DS_Store' && filename !== 'src/image/.DS_Store' && filename !== 'src/handler/.DS_Store' && filename !== 'src/tasks/.DS_Store' && filename !== 'src/bookstore/.DS_Store') {
                  newZip.file(filename, zip.files[filename].async('blob'));
                }
              });

              // Generate the new ZIP without .DS_Store
              newZip.generateAsync({ type: 'blob' }).then(function (newBlob) {
                // Create a link to download the new ZIP file
                const link = document.createElement('a');
                link.href = URL.createObjectURL(newBlob);
                link.download = 'Opravene '+ assignmentSelector.value +'.zip'; // Name for the new ZIP file
                link.click(); // Trigger the download
              });
            } else {
              // If .DS_Store is not found, proceed with normal structure validation
              const missingFiles = expectedStructure.filter(path => !zip.files[path]);
              const zipFiles = Object.keys(zip.files);
              const unexpectedFiles = zipFiles.filter(path => !expectedStructure.includes(path));

              if (missingFiles.length > 0) {
                alert('Chýbajúce súbory: ' + missingFiles.join(', '));
              } else if (unexpectedFiles.length > 0) {
                alert('Neočakávané súbory: ' + unexpectedFiles.join(', '));
              } else {
                alert('Štruktúra ZIP súboru je správna.');
              }
            }
          });
        };

        reader.readAsArrayBuffer(file);
      });
    }
  
    // Function to remove ZIP verification elements
    function removeZipVerification() {
      const zipVerificationContainer = document.getElementById('zip-verification-container');
      if (zipVerificationContainer) {
        zipVerificationContainer.remove(); // Remove the container
      }
    }
  
    // Load exercise content and toggle ZIP verification
    function loadExercise(id) {
      console.log('Loading Exercise:', id); // Debugging
      const exerciseTitle = document.getElementById('exercise-title');
      const exerciseDetails = document.getElementById('exercise-details');
  
      // Update the exercise title
      if (id === 'Literatúra' || id === 'Zadania') {
        exerciseTitle.textContent = id;
      } else {
        exerciseTitle.textContent = `Cvičenie ${id}`;
      }
  
      // Update the exercise details
      exerciseDetails.innerHTML = exercises[id] || '<p>Obsah neexistuje.</p>';
  
      // Insert or remove ZIP verification elements based on the selected tab
      if (id === 'Zadania') {
        insertZipVerification(); // Insert ZIP verification elements
      } else {
        removeZipVerification(); // Remove ZIP verification elements
      }
    }
  
    // Load default exercise
    loadExercise('Zadania');
  
    // Exercise links logic
    exerciseLinks.forEach(link => {
      if (link.getAttribute('data-exercise') === "Zadania") {
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
  
    // Hamburger menu logic
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


