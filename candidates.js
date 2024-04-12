// Fetch data from candidates.json
fetch('candidates.json')
  .then(response => response.json())
  .then(data => {
    const candidates = data.candidates;
    const candidatesList = document.getElementById('candidates-list');

    // Object to store vote counts for each candidate
    const voteCounts = {};

    // Function to update the vote count for a candidate
    const updateVoteCount = (candidateName) => {
      if (voteCounts.hasOwnProperty(candidateName)) {
        voteCounts[candidateName]++;
      } else {
        voteCounts[candidateName] = 1;
      }

      // Update the vote count display
      const voteResults = document.getElementById('vote-results');
      voteResults.innerHTML = '';

      for (const [name, count] of Object.entries(voteCounts)) {
        const voteResult = document.createElement('p');
        voteResult.textContent = `${name}: ${count}`;
        voteResults.appendChild(voteResult);
      }
    };

    // Loop through the candidates and create cards for each one
    candidates.forEach(candidate => {
      const card = document.createElement('div');
      card.classList.add('col-md-4');

      card.innerHTML = `
        <div class="card">
          <img src="${candidate.image}" class="card-img-top" alt="${candidate.name}">
          <div class="card-body">
            <h5 class="card-title">${candidate.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${candidate.party}</h6>
            <p class="card-text">
              <strong>Position:</strong> ${candidate.position}<br>
              <strong>Age:</strong> ${candidate.age}<br>
              <strong>Experience:</strong> ${candidate.experience}
            </p>
            <div class="card-buttons">
              <button class="btn btn-primary view-profile">View Profile</button>
              <button class="btn btn-success vote-now">Vote Now</button>
            </div>
          </div>
        </div>
      `;

      candidatesList.appendChild(card);

      // Add event listener to the "Vote Now" button
      const voteButton = card.querySelector('.vote-now');
      voteButton.addEventListener('click', () => {
        updateVoteCount(candidate.name);
      });
    });

    // Display vote counts
    const voteResultsSection = document.createElement('div');
    voteResultsSection.innerHTML = `
    <div id="Results_Container">  
    <h1>Vote Results</h1>
      <div id="vote-results"></div>
      </div>
    `;
    document.body.appendChild(voteResultsSection);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
