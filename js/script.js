function settext(writing, filed) {
    // Month Validation
    if (filed == '#month_card') {
        writing = Number(writing);
        if (writing > 12 || writing < 01) {
            alert('The "month" field must be filled in with valid values (1 to 12).');
            window.location.reload(true);
        }
        writing = String(writing);
        writing = writing.padStart(2, '0');
    }

    // Year Validation
    if (filed == '#year_card') {
        let date = new Date();
        let year = date.getFullYear();
        year = simplifiedYear(year);
        let validity = year + 8;

        if (writing < year || writing >= validity) {
            alert("Please, enter a valid year.");
            window.location.reload(true);
        }
    }

    let txtcard = document.querySelector(filed);
    txtcard.textContent = writing;
}

function simplifiedYear(year) {
    year = String(year);
    year = year.slice(-2);
    year = Number(year);

    return year;
}

// Masks
$('#card_number').mask('0000 0000 0000 0000');
$('#month').mask('00');
$('#year').mask('00');
$('#code').mask('000');


function showConfirmation(){
    document.querySelector('#confirmation').style.display = 'flex';
    document.querySelector('#form').style.display = 'none';
}

function showForm(){
    document.querySelector('#confirmation').style.display = 'none';
    document.querySelector('#form').style.display = 'flex';
}