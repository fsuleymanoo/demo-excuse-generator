// This line of code will make sure the page is fully loaded
window.onload = function () {
  // Write the logic in this function

  // 1. Get the excuse element
  const excuse = document.getElementById("excuse");

  // 2. Generate a random excuse

  const part1 = [
    "My colleague",
    "IT department",
    "The delivery service",
    "My teammate",
    "The training session organizer",
    "The admin team",
  ];
  const part2 = [
    "missed the deadline,",
    "caused downtime,",
    "lost the package,",
    "skipped a step,",
    "forgot my request,",
    "gave wrong info,",
  ];
  const part3 = [
    "so I’m avoiding submitting late",
    "so I’m avoiding delays in work",
    "so I’m avoiding missing the event",
    "so I’m avoiding redoing the task earlier",
    "so I’m avoiding more delays",
    "so I’m avoiding attending late",
  ];
  const part4 = [
    "yesterday.",
    "this morning.",
    "last week.",
    "today.",
    "on Monday.",
    "last night.",
  ];

  const part1Index = Math.floor(Math.random() * part1.length);
  const part2Index = Math.floor(Math.random() * part1.length);
  const part3Index = Math.floor(Math.random() * part1.length);
  const part4Index = Math.floor(Math.random() * part1.length);

  const excuseText = `${part1[part1Index]} ${part2[part2Index]} ${part3[part3Index]} ${part4[part4Index]}`;

  // 3. Inseart the excuse into the excuse element
  excuse.innerHTML = excuseText;
};
