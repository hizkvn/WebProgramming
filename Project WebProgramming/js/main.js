document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("isLoggedIn")) {
    window.location.href = "login.html";
  }

  const yearSelect = document.getElementById("year");
  const semesterSelect = document.getElementById("semester");
  const attendanceTableBody = document
    .getElementById("attendanceTable")
    .getElementsByTagName("tbody")[0];

  const students = [
    { name: "Maftuh Farhan", attendance: "HADIR" },
    { name: "Hizkia", attendance: "HADIR" },
    { name: "Michael Phoenix", attendance: "HADIR" },
    { name: "Aldhoni Putra Liyanto", attendance: "HADIR" },
    // Add more students as needed
  ];

  function populateTable(students) {
    attendanceTableBody.innerHTML = "";
    students.forEach((student) => {
      const row = document.createElement("tr");
      const nameCell = document.createElement("td");
      const attendanceCell = document.createElement("td");

      nameCell.textContent = student.name;
      attendanceCell.textContent = student.attendance;

      row.appendChild(nameCell);
      row.appendChild(attendanceCell);

      attendanceTableBody.appendChild(row);
    });
  }

  yearSelect.addEventListener("change", function () {
    populateTable(students);
  });

  semesterSelect.addEventListener("change", function () {
    populateTable(students);
  });

  populateTable(students);
});
