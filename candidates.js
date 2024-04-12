// Fetch data from candidates.json
fetch('candidates.json')
  .then(response => response.json())
  .then(data => {
    // Process the candidates data
    const candidates = data.candidates;
    const candidatesList = document.getElementById('candidates-list');

    // Loop through the candidates and create cards for each one
    candidates.forEach(candidate => {
      const card = document.createElement('div');
      card.classList.add('col-md-4');

      card.innerHTML = `
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">${candidate.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${candidate.party}</h6>
            <p class="card-text">
              <strong>Position:</strong> ${candidate.position}<br>
              <strong>Age:</strong> ${candidate.age}<br>
              <strong>Experience:</strong> ${candidate.experience}
            </p>
            <div class="card-buttons">
              <button class="btn btn-primary">View Profile</button>
              <button class="btn btn-success">Vote Now</button>
            </div>
          </div>
        </div>
      `;

      candidatesList.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
