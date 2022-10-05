export const assignLetterGrade = (score) => {
  if (score >= 90) {
    return "A";
  }

  if (score >= 80) {
    return "B";
  }

  if (score >= 70) {
    return "C";
  }

  if (score >= 60) {
    return "D";
  }

  return "F";
};

export const tallyGrades = (grades) =>
  grades.reduce((tally, { grade }) => {
    tally[grade] = (tally[grade] || 0) + 1;
    return tally;
  }, {});

// This should use the assignLetterGrade function to assign a letter grade to each student in the class.
export const assignLetterGrades2Students = (data) =>
  data.map((d) => ({ ...d, grade: assignLetterGrade(d.score) }));

export const getNamesOfLowScoringStudents = (data, lowScore = 60) =>
  data.filter((d) => d.score < lowScore).map((d) => d.name);
