const form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';



    document.getElementById('infos').classList.remove('hidden');

     if(bmi < 18.5){
        description = 'Atenção! Você está abaixo do peso ideal!'
        value.classList.add('attention');

     } else if (bmi >= 18.5 && bmi <= 25){
        description = 'Parabéns! Você está no peso ideal!'
        value.classList.remove('attention');
        value.classList.add('normal');

     } else if (bmi > 25 && bmi <= 30){
        description = 'Atenção! Você está acima do peso ideal!'
        value.classList.add('attention');

     } else if (bmi > 30 && bmi <= 35){
        description = 'Cuidado! Você está com obesidade moderada!'
        value.classList.add('attention');

     } else if (bmi > 35 && bmi <= 40){
        description = 'Cuidado! Você está com obesidade severa!'
        value.classList.add('attention');
        
     } else {
        description = 'Cuidado! Você está com obesidade mórbida!'
        value.classList.add('attention');
     }

     value.textContent = bmi;
     document.getElementById('description').textContent = description;
});