function monthOfYear(month){
switch (month) {
    case 1:
        console.log(`Entered Value= ${month}, For this value the month is January`);
        break;
        case 2:
        console.log(`Entered Value= ${month}, For this value the month is February`);
        break;
        case 3:
        console.log(`Entered Value= ${month}, For this value the month is March`);
        break;
        case 4:
        console.log(`Entered Value= ${month}, For this value the month is April`);
        break;
        case 5:
        console.log(`Entered Value= ${month}, For this value the month is May`);
        break;
        case 6:
        console.log(`Entered Value= ${month}, For this value the month is June`);
        break;
        case 7:
        console.log(`Entered Value= ${month}, For this value the month is July`);
        break;
        case 8:
        console.log(`Entered Value= ${month}, For this value the month is August`);
        break;
        case 9:
        console.log(`Entered Value= ${month}, For this value the month is September`);
        break;
        case 10:
        console.log(`Entered Value= ${month}, For this value the month is October`);
        break;
        case 11:
        console.log(`Entered Value= ${month}, For this value the month is November`);
        break;
        case 12:
        console.log(`Entered Value= ${month}, For this value the month is December`);
        break;
        
    default:
        console.log(`Entered Value= ${month}  Please enter valid value for the month.`);
        break;
}
};
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);

