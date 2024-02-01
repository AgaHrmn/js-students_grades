const studentsgistry = [];
const form = document.getElementById("studentsDataForm");
const showTableBtn = document.getElementById("showTableButt");
const tableContainer = document.getElementById("tableContainer");

form.addEventListener('submit', handleFormSubmit);
showTableBtn.addEventListener("click", toggleTableVisibility);

function handleFormSubmit(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const id = document.getElementById('id').value;
    const grades = document.getElementById('grades').value;

    let avg = calculateAvg(grades);
    let letter = convertToLetter(avg);

    showAvg(avg, letter);

    const data = {
        id: id,
        fullName: fullName,
        grades: grades,
        avgGrade: avg
    }

    studentsgistry.push(data);
    form.reset();
};

// function showTable() {

//     showTableBtn.addEventListener("click", function () {
//         populateTable();
//         tableContainer.classList.toggle("hidden");
//     });
// }

function calculateAvg(data) {

    let sum = 0;
    values = data.split(';');
    for (let i = 0; i < values.length; i++) {
        sum += Number(values[i]);
    }
    result = sum / values.length;
    return result.toFixed(2);
}

function convertToLetter(avg) {
    let letter;
    if (avg > 1.5 && avg < 2) {
        letter = 'D';
    } else if (avg >= 2 && avg < 3) {
        letter = 'C';
    } else if (avg >= 3 && avg < 4) {
        letter = 'D';
    } else if (avg >= 4 && avg < 5) {
        letter = 'B';
    } else if (avg >= 5) {
        letter = 'A';
    } else {
        letter = 'F';
    }
    return letter;
}

function toggleTableVisibility() {
    populateTable();
    tableContainer.classList.toggle("hidden");
}

function showAvg(avg, letter) {
    document.getElementById("avg").innerText = avg;
    document.getElementById("letter").innerText = letter;
}

function populateTable() {
    let table = document.getElementById("studentsTable");
    table.innerHTML =
        `<tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Average Grade</th>
        </tr>`;
    studentsgistry.forEach(function (student) {
        const tr = document.createElement('tr');
        tr.innerHTML =
            `<td>${student.id}</td>
            <td>${student.fullName}</td>
            <td>${student.avgGrade}</td>`;

        table.appendChild(tr);
    })
}