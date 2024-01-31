

// Fetch data from a JSON file (replace 'your-data.json' with your actual file)
async function fetchData() {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
}

// Search by Specialization
async function searchDoctors() {
    const specialization = document.getElementById('specialization');
    const enteredSpecialization = specialization.value.toLowerCase();

    const data = await fetchData();

    // Filter doctors by specialization
    const filteredDoctor = data.filter(doctor => doctor.specialization.toLowerCase().includes(enteredSpecialization));

    displayResult(filteredDoctor);
}

function displayResult(doctors) {
    const resultsContainer = document.getElementById('result');

    // Clear previous results
    resultsContainer.innerHTML = '';

    if (doctors.length === 0) {
        resultsContainer.innerHTML = 'No doctors found.';
    } else {
        // Display each doctor's information
        doctors.forEach(doctor => {
            const doctorInfo = document.createElement('div');
            doctorInfo.innerHTML = `<img src="${doctor.image}" alt="${doctor.name} Image" Image" height="${100}" width="${180}"><br>
            <strong>${doctor.name}</strong> <br>(${doctor.specialization}) <br> ${doctor.location}<br>
                                   <strong> Phone:</strong> ${doctor.phone}<br>
                                    <strong>Email:</strong> ${doctor.email}<br>
                                    `;
            resultsContainer.appendChild(doctorInfo);
        });
    }
}

// Search by Name
async function searchDoctorsName() {
    const namess = document.getElementById('namess');
    const enteredName = namess.value.toLowerCase();

    const data = await fetchData();

    // Filter doctors by name
    const filteredDocto = data.filter(doctor => doctor.name.toLowerCase().includes(enteredName));

    displayResul(filteredDocto);
}

function displayResul(doctors) {
    const resultsContainer = document.getElementById('resul');

    // Clear previous results
    resultsContainer.innerHTML = '';

    if (doctors.length === 0) {
        resultsContainer.innerHTML = 'No doctors found.';
    } else {
        // Display each doctor's information
        doctors.forEach(doctor => {
            const doctorInfo = document.createElement('div');
            doctorInfo.innerHTML =`<img src="${doctor.image}" alt="${doctor.name} Image" Image" height="${100}" width="${180}"><br>
            <strong>${doctor.name}</strong> <br>(${doctor.specialization}) <br> ${doctor.location}<br>
                                   <strong> Phone:</strong> ${doctor.phone}<br>
                                    <strong>Email:</strong> ${doctor.email}<br>
                                    `;
                 resultsContainer.appendChild(doctorInfo);
        });
    }
}

// Search by Location
async function searchDoctorsByLocation() {
    const locationInput = document.getElementById('locationInput');
    const enteredLocation = locationInput.value.toLowerCase();

    const data = await fetchData();

    // Filter doctors by location
    const filteredDoctors = data.filter(doctor => doctor.location.toLowerCase().includes(enteredLocation));

    displayResults(filteredDoctors);
}

// Display results in the 'results' container
function displayResults(doctors) {
    const resultsContainer = document.getElementById('results');

    // Clear previous results
    resultsContainer.innerHTML = '';

    if (doctors.length === 0) {
        resultsContainer.innerHTML = 'No doctors found.';
    } else {
        // Display each doctor's information
        doctors.forEach(doctor => {
            const doctorInfo = document.createElement('div');
            doctorInfo.innerHTML = `<img src="${doctor.image}" alt="${doctor.name} Image" Image" height="${100}" width="${180}"><br>
            <strong>${doctor.name}</strong> <br>(${doctor.specialization}) <br> ${doctor.location}<br>
                                   <strong> Phone:</strong> ${doctor.phone}<br>
                                    <strong>Email:</strong> ${doctor.email}<br>
                                    `;
            resultsContainer.appendChild(doctorInfo);
        });
    }
}
async function addDoctor() {
    const response = await fetch('/add_doctor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: 'Doctor Name',
            specialization: 'Specialization',
            location: 'Location',
            phone: 'Phone Number',
            email: 'Email Address',
            image: 'Image URL',
        }),
    });

    const result = await response.json();
    console.log(result);
}

// Call the addDoctor function to add a doctor
addDoctor();




