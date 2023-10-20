import { animate } from "motion";

setTimeout(() => {
  const letterOne = document.querySelector(".letters__one") as HTMLSpanElement;
  const letterTwo = document.querySelector(".letters__two") as HTMLSpanElement;
  const letterThree = document.querySelector(
    ".letters__three",
  ) as HTMLSpanElement;
  const letterFour = document.querySelector(
    ".letters__four",
  ) as HTMLSpanElement;
  const letterFive = document.querySelector(
    ".letters__five",
  ) as HTMLSpanElement;
  const letterSix = document.querySelector(".letters__six") as HTMLSpanElement;
  const letterSeven = document.querySelector(
    ".letters__seven",
  ) as HTMLSpanElement;
  const letterEight = document.querySelector(
    ".letters__eight",
  ) as HTMLSpanElement;
  const letterNine = document.querySelector(
    ".letters__nine",
  ) as HTMLSpanElement;
  const letterTen = document.querySelector(".letters__ten") as HTMLSpanElement;
  const letterEleven = document.querySelector(
    ".letters__eleven",
  ) as HTMLSpanElement;
  const letterTwelve = document.querySelector(
    ".letters__twelve",
  ) as HTMLSpanElement;
  const letterThirteen = document.querySelector(
    ".letters__thirteen",
  ) as HTMLSpanElement;

  // // Define the start and end letters
  const startLetter = "a";
  const endLetter1 = "v";
  const endLetter2 = "i";
  const endLetter3 = "v";
  const endLetter4 = "e";
  const endLetter5 = "k";
  const endLetter6 = "l";
  const endLetter7 = "o";
  const endLetter8 = "k";
  const endLetter9 = "h";
  const endLetter10 = "a";
  const endLetter11 = "n";
  const endLetter12 = "d";
  const endLetter13 = "e";
  // // Convert letters to their char codes
  const startCharCode = startLetter.charCodeAt(0);
  const endCharCode1 = endLetter1.charCodeAt(0);
  const endCharCode2 = endLetter2.charCodeAt(0);
  const endCharCode3 = endLetter3.charCodeAt(0);
  const endCharCode4 = endLetter4.charCodeAt(0);
  const endCharCode5 = endLetter5.charCodeAt(0);
  const endCharCode6 = endLetter6.charCodeAt(0);
  const endCharCode7 = endLetter7.charCodeAt(0);
  const endCharCode8 = endLetter8.charCodeAt(0);
  const endCharCode9 = endLetter9.charCodeAt(0);
  const endCharCode10 = endLetter10.charCodeAt(0);
  const endCharCode11 = endLetter11.charCodeAt(0);
  const endCharCode12 = endLetter12.charCodeAt(0);
  const endCharCode13 = endLetter13.charCodeAt(0);
  // Animate the letter based on the progress
  animate(
    (progress) => {
      const currentCharCode = Math.round(
        startCharCode + (endCharCode1 - startCharCode) * progress,
      );
      const currentCharCodeTwo = Math.round(
        startCharCode + (endCharCode2 - startCharCode) * progress,
      );
      const currentCharCodeThree = Math.round(
        startCharCode + (endCharCode3 - startCharCode) * progress,
      );
      const currentCharCodeFour = Math.round(
        startCharCode + (endCharCode4 - startCharCode) * progress,
      );
      const currentCharCodeFive = Math.round(
        startCharCode + (endCharCode5 - startCharCode) * progress,
      );

      const currentCharCodeSix = Math.round(
        startCharCode + (endCharCode6 - startCharCode) * progress,
      );
      const currentCharCodeSeven = Math.round(
        startCharCode + (endCharCode7 - startCharCode) * progress,
      );
      const currentCharCodeEight = Math.round(
        startCharCode + (endCharCode8 - startCharCode) * progress,
      );
      const currentCharCodeNine = Math.round(
        startCharCode + (endCharCode9 - startCharCode) * progress,
      );
      const currentCharCodeTen = Math.round(
        startCharCode + (endCharCode10 - startCharCode) * progress,
      );
      const currentCharCodeEleven = Math.round(
        startCharCode + (endCharCode11 - startCharCode) * progress,
      );
      const currentCharCodeTwelve = Math.round(
        startCharCode + (endCharCode12 - startCharCode) * progress,
      );
      const currentCharCodeThirteen = Math.round(
        startCharCode + (endCharCode13 - startCharCode) * progress,
      );

      const currentLetter = String.fromCharCode(currentCharCode);
      const currentLetterTwo = String.fromCharCode(currentCharCodeTwo);
      const currentLetterThree = String.fromCharCode(currentCharCodeThree);
      const currentLetterFour = String.fromCharCode(currentCharCodeFour);
      const currentLetterFive = String.fromCharCode(currentCharCodeFive);
      const currentLetterSix = String.fromCharCode(currentCharCodeSix);
      const currentLetterSeven = String.fromCharCode(currentCharCodeSeven);
      const currentLetterEight = String.fromCharCode(currentCharCodeEight);
      const currentLetterNine = String.fromCharCode(currentCharCodeNine);
      const currentLetterTen = String.fromCharCode(currentCharCodeTen);
      const currentLetterEleven = String.fromCharCode(currentCharCodeEleven);
      const currentLetterTwelve = String.fromCharCode(currentCharCodeTwelve);
      const currentLetterThirteen = String.fromCharCode(
        currentCharCodeThirteen,
      );
      letterOne.innerHTML = currentLetter.toUpperCase();
      letterTwo.innerHTML = currentLetterTwo;
      letterThree.innerHTML = currentLetterThree;
      letterFour.innerHTML = currentLetterFour;
      letterFive.innerHTML = currentLetterFive;
      letterSix.innerHTML = currentLetterSix.toUpperCase();
      letterSeven.innerHTML = currentLetterSeven;
      letterEight.innerHTML = currentLetterEight;
      letterNine.innerHTML = currentLetterNine;
      letterTen.innerHTML = currentLetterTen;
      letterEleven.innerHTML = currentLetterEleven;
      letterTwelve.innerHTML = currentLetterTwelve;
      letterThirteen.innerHTML = currentLetterThirteen;
    },
    {
      duration: 2,
      easing: "ease-in",
    },
  );
}, 300);
