import { describe, expect, it } from "vitest";
import {
  assignLetterGrade,
  assignLetterGrades2Students,
  getNamesOfLowScoringStudents,
  tallyGrades,
} from ".";

describe("tallyGrades", () => {
  it("tallies the number of grades for students in a class", () => {
    const input = [
      { grade: "A" },
      { grade: "A" },
      { grade: "B" },
      { grade: "B" },
      { grade: "C" },
      { grade: "C" },
      { grade: "D" },
      { grade: "D" },
      { grade: "F" },
      { grade: "F" },
    ];

    const expected = {
      A: 2,
      B: 2,
      C: 2,
      D: 2,
      F: 2,
    };

    expect(tallyGrades(input)).toEqual(expected);
  });
});

// Integration Test
describe("assignLetterGrades2Students", () => {
  it("assigns letter grades to students", () => {
    const input = [
      { score: 90 },
      { score: 80 },
      { score: 70 },
      { score: 60 },
      { score: 59 },
    ];

    const expected = [
      { score: 90, grade: "A" },
      { score: 80, grade: "B" },
      { score: 70, grade: "C" },
      { score: 60, grade: "D" },
      { score: 59, grade: "F" },
    ];

    expect(assignLetterGrades2Students(input)).toEqual(expected);
  });
});

describe("getNamesOfLowScoringStudents", () => {
  it("returns the names of students scoring below a threshold of 70", () => {
    const students = [
      { name: "Alice", score: 90 },
      { name: "Bob", score: 80 },
      { name: "Charlie", score: 70 },
      { name: "Diana", score: 60 },
      { name: "Eve", score: 59 },
    ];

    const threshold = 70;

    const expected = ["Diana", "Eve"];

    expect(getNamesOfLowScoringStudents(students, threshold)).toEqual(expected);
  });
});
