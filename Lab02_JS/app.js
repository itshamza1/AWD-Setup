// 1. Data Source 
const students = [
    { id: 101, name: "Huzaifa", cgpa: 3.49, status: "Active" },
    { id: 102, name: "Ali", cgpa: 2.8, status: "Inactive" },
    { id: 103, name: "Fatima", cgpa: 3.2, status: "Active" },
    { id: 104, name: "Hamza", cgpa: 3.8, status: "Active" }
];

// 2. Data Processing Logic
const processStudents = (data) => {
    return data
        .filter(s => s.status === "Active" && s.cgpa >= 3.0) // Filter
        .map(({ name, cgpa }) => ({ // Destructuring
            studentName: name.toUpperCase(),
            isHonorRoll: cgpa >= 3.5 ? "Yes" : "No"
        }));
};

// 3. Execution
const processedData = processStudents(students);
console.table(processedData);