// takes input from html file converts to JSON format and updates canidates.json file

document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.querySelector('form');
  
    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the default form submission behavior
  
      // Get form field values
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const party = document.getElementById('birthdayDate').value;
      const gender = document.querySelector('input[name="inlineRadioOptions"]:checked').value;
      const emailAddress = document.getElementById('emailAddress').value;
      const phoneNumber = document.getElementById('phoneNumber').value;
      const position = document.querySelector('.select').value;
      const cvFile = document.getElementById('inputGroupFile01').value;
  
      // Create JavaScript object with form data
      const formData = {
        firstName: firstName,
        lastName: lastName,
        party: party,
        gender: gender,
        emailAddress: emailAddress,
        phoneNumber: phoneNumber,
        position: position,
        cvFile: cvFile
      };
  


          // Convert form data to JSON type 
    const jsonData = JSON.stringify(formData); 


    //   use post function
  
      fetch('http://localhost:3000/candidates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData
    })
})
})
