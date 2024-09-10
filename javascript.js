document.getElementById('locationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const phoneNumber = document.getElementById('phoneNumber').value;

    // Gantilah URL API dengan URL API pelacakan dan sertakan kunci API jika diperlukan
    const apiUrl = `https://api.example.com/track?phone=${encodeURIComponent(phoneNumber)}&apiKey=YOUR_API_KEY`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                document.getElementById('result').innerHTML = `
                    <h2>Location Information</h2>
                    <p><strong>Phone Number:</strong> ${data.phone}</p>
                    <p><strong>Location:</strong> ${data.location}</p>
                    <p><strong>Carrier:</strong> ${data.carrier}</p>
                    <p><strong>Country:</strong> ${data.country}</p>
                `;
            } else {
                document.getElementById('result').innerHTML = `<p>No data found for this number.</p>`;
            }
        })
        .catch(error => {
            document.getElementById('result').innerHTML = `<p>Error: ${error.message}</p>`;
        });
});
