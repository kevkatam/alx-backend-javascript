export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsByCity = students.filter((student) => student.location === city);
  const updatedStudents = studentsByCity.map((student) => {
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: newGrade ? newGrade.grade : 'N/A',
    };
  });
  return updatedStudents;
}
