let year = prompt('В каком году Вы родились?');
let age;
let city;
let sport;
if (year === null || isNaN(year) || year <= 0 || year.trim() === '') {
    age = 'Жаль, что Вы не захотели ввести свой год рождения';
    alert(age)   
    } else { 
        age = 2021 - year
    };   
city = prompt('В каком городе вы живете?');
switch(city) {
    case null:
        city = 'Жаль, что вы не захотели ввести свой город';
        alert(city);
        break;
    case '':
        city = 'Жаль, что вы не захотели ввести свой город';
        alert(city);
    break;
    case 'Киев':
        city = 'Вы живете в столице Украины';
        break;
    case "Москва":
        city = 'Вы живете в столице России';
        break;
    case 'Минск':
        city = 'Вы живете в столице Беларуси';
        break;
    default:
        city = 'Вы живете в городе ' + city;
    };
sport = prompt('Какой ваш любимый вид спорта?');
    switch (sport) {
        case null:
            sport = 'Жаль, что вы не захотели ввести свой любимый вид спорта';
            alert(sport); 
        break;
        case '':
            sport = 'Жаль, что вы не захотели ввести свой любимый вид спорта';
            alert(city);
        break;
        case 'Футбол':
            sport = 'Круто, хотите стать Шевченко?';
            break;
        case 'Баскетбол':
            sport = 'Круто, хотите стать Шакилом?';
            break;
        case 'Теннис':
            sport = 'Круто, хотите стать Агасси?';
            break;
        default:
            sport = 'Ваш любимый вид спорта ' + sport;
        }
alert(age + '\n' + city + '\n' + sport)
    
                    
