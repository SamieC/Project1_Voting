//modal element from bootstrap for viewing canidate profile

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

// Function to create candidate cards
function createCandidateCard(candidate) {
  return `
    <div class="card">
      <h2>${candidate.name}</h2>
      <p>Party: ${candidate.party}</p>
      <p>Age: ${candidate.age}</p>
      <p>Experience: ${candidate.experience}</p>
      <p>Platform: ${candidate.platform}</p>
    </div>
  `;
}

// Get the container element
const candidateCardsContainer = document.getElementById('candidateCards');

// Create and display cards for each candidate
candidates.forEach(candidate => {
  const cardHtml = createCandidateCard(candidate);
  candidateCardsContainer.innerHTML += cardHtml;
});