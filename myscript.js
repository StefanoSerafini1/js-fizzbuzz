//esercizio
//Scrivi un programma che stampi i numeri da 1 a 100,
//ma per i multipli di 3 stampi "Fizz" al posto del numero e per i multipli di 5 stampi "Buzz".
//Per i numeri che sono sia multipli di 3 che di 5 stampi "FizzBuzz".


//genero 100 numeri con for
for (var i = 1; i <= 100; i++) {
//controllo se multiplo di 3 e 5 usando and(solo se entrambe sono vere)
  if(i % 3 == 0 && i % 5 == 0){
    console.log('FizzBuzz');
    document.getElementById('val').innerHTML +=('<li>' + 'FizzBuzz'  + '</li>');
  }else if(i % 3 == 0){//controllo se multiplo di 3
    console.log('Fizz');
    document.getElementById('val').innerHTML +=('<li>' + 'Fizz'  + '</li>');
  }else if(i % 5 == 0){//controllo se multiplo di  5
    console.log('Buzz');
    document.getElementById('val').innerHTML +=('<li>' + 'Buzz'  + '</li>');
  }else{//se non è ne multiplo di uno ne del altro ne di entreìambi stampo il numero
    console.log(i);
    document.getElementById('val').innerHTML +=('<li>' + i + '</li>');
  }
}
