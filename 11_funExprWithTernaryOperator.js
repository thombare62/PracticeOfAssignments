let interviewEligibility= function (gradScore, hscScore, sscScore, candidateName) {
    var eligibleOrNot= gradScore>="70%"|| hscScore>="80%" || sscScore>="90%"? "Congrats you are eligible for TCS interview.":"Unfortunately you are not eligible for interview."
console.log(`${candidateName}, ${eligibleOrNot}`);
}
interviewEligibility("80%", "86%", "90%", "Chandrashekhar B. Thombare");
interviewEligibility("70%", "65%", "55%", "Shubham H. Jadhav");
interviewEligibility("60%", "79%", "88%", "Asmita D. Dede");