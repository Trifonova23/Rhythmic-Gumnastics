function rhythmicGymnastics(input) {
  let country = input[0];
  let device = input[1];
  let finalGrade = 0;
  switch (country) {
    case "Russia":
      if (device === "ribbon") {
        finalGrade = 9.1 + 9.4;
      } else if (device === "hoop") {
        finalGrade = 9.3 + 9.8;
      } else if (device === "rope") {
        finalGrade = 9.6 + 9.0;
      }
      break;

    case "Bulgaria":
      if (device === "ribbon") {
        finalGrade = 9.6 + 9.4;
      } else if (device === "hoop") {
        finalGrade = 9.55 + 9.75;
      } else if (device === "rope") {
        finalGrade = 9.5 + 9.4;
      }
      break;

    case "Italy":
      if (device === "ribbon") {
        finalGrade = 9.2 + 9.5;
      } else if (device === "hoop") {
        finalGrade = 9.45 + 9.35;
      } else if (device === "rope") {
        finalGrade = 9.7 + 9.15;
      }
      break;
  }
  let diffPoints = 20 - finalGrade;
  let percent = (diffPoints / 20) * 100;
  console.log(`The team of ${country} get ${finalGrade} on ${device}`);
  console.log(` ${percent}`);
}
rhythmicGymnastics(["Bulgaria", "ribbon"]);
