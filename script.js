let noButtonClickCount = 0; // Contador para el botón "No"
let noButtonState = 0; // Estado actual del botón "No"

// Mostrar el gif inicial
document.getElementById('gifContainer').style.display = 'block';

document.getElementById('siBtn').addEventListener('click', function() {
    // Ocultar el gif triste y mostrar el gif feliz
    document.getElementById('sadGifContainer').style.display = 'none';
    document.getElementById('sadGifContainer1').style.display = 'none';
    document.getElementById('sadGifContainer2').style.display = 'none';
    document.getElementById('gifContainer').style.display = 'none';
    document.getElementById('happyGifContainer').style.display = 'block';

    // Ocultar los botones "Pregunta Sí" y "No"
    document.getElementById('question').style.display = 'none';
    document.getElementById('siBtn').style.display = 'none';
    document.body.classList.add('bg-green');
    document.getElementById('noBtn').style.display = 'none';

    // Mostrar el mensaje específico
    document.getElementById('messageContainer').style.display = 'block';
    document.getElementById('messageContainer').innerHTML = '¡Siiiiiiiiiiii! Te amo mucho mi amoooooor ♥';

    // Mostrar otro gif después de 3 segundos
    setTimeout(function() {
        document.getElementById('happyGifContainer').style.display = 'none';
        document.getElementById('happyGifContainer2').style.display = 'block';
    }, 1000);

    setTimeout(function() {
        document.getElementById('happyGifContainer2').style.display = 'none';
        document.getElementById('happyGifContainer3').style.display = 'block';
    }, 2000);
    
    setTimeout(function() {
        document.getElementById('happyGifContainer3').style.display = 'none';
        document.getElementById('happyGifContainer4').style.display = 'block';
    }, 3000);
  
    // Crear y mostrar el botón "Ver dedicatoria"
    let dedicatoriaBtn = document.createElement('button');
    dedicatoriaBtn.innerHTML = 'Te la dedico ♥';
    dedicatoriaBtn.style.backgroundColor = '#ff66b2'; // Color rosado
    dedicatoriaBtn.style.color = '#fff'; // Texto blanco
    dedicatoriaBtn.style.border = 'none';
    dedicatoriaBtn.style.padding = '10px 20px';
    dedicatoriaBtn.style.fontSize = '16px';
    dedicatoriaBtn.style.borderRadius = '5px';
    document.getElementById('messageContainer').appendChild(dedicatoriaBtn);

    // Redirigir a la canción cuando se haga clic en el botón
    dedicatoriaBtn.addEventListener('click', function() {
        window.location.href = 'https://www.youtube.com/watch?v=EGYwQSsW0wE';
    });
});


document.getElementById('noBtn').addEventListener('click', function() {
    switch (noButtonState) {
        case 0:
            // Primera vez haciendo clic en "No"
            document.getElementById('happyGifContainer').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'none';
            document.getElementById('sadGifContainer').style.display = 'block';

            // Modificar el botón "No"
            document.getElementById('noBtn').innerHTML = '¡Oh no! ¿Estás segura?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
          
            
            document.getElementById('siBtn').style.fontSize = '20px';
            document.getElementById('siBtn').style.padding = '10px 20px';
       
            
           

        
            noButtonClickCount++;
            noButtonState++;
            break;

        case 1:
            // Segunda vez haciendo clic en "No"

            document.getElementById('noBtn').innerHTML = '¡¿Realmente estas segura?!';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '25px';
            document.getElementById('siBtn').style.padding = '15px 25px';
        
            noButtonState++;
            break;

        case 2:
           
            document.getElementById('noBtn').innerHTML = 'Amor, Estás segura de verdad?';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'block';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '30px';
            document.getElementById('siBtn').style.padding = '25px 35px';
        
            noButtonState++;
            break;
        
        case 3:
           
            document.getElementById('noBtn').innerHTML = 'Amor, piensalo, solo un poco';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '35px';
            document.getElementById('siBtn').style.padding = '30px 40px';
        
            noButtonState++;
            break;
        case 4:
           
            document.getElementById('noBtn').innerHTML = 'No te arrepentirás, aceptame por favor';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '40px';
            document.getElementById('siBtn').style.padding = '35px 45px';
         
            noButtonState++;
            break;
        case 5:
           
            document.getElementById('noBtn').innerHTML = 'Amor, te recomiendo que no sigas...';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '45px';
            document.getElementById('siBtn').style.padding = '40px 50px';

            noButtonState++;
            break;
        case 6:
           
            document.getElementById('noBtn').innerHTML = 'Amor en serio, ten cuidado, para';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '50px';
            document.getElementById('siBtn').style.padding = '45px 55px';
            
            noButtonState++;
            break;
        case 7:
           
            document.getElementById('noBtn').innerHTML = 'No, no, no, no le des otra vez, no, para, para';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            // Hacer que el botón "Sí" crezca
            document.getElementById('siBtn').style.fontSize = '55px';
            document.getElementById('siBtn').style.padding = '50px 60px';
  
            noButtonState++;
            break;
        case 8:
           
            document.getElementById('noBtn').innerHTML = 'AMOR NO, PARA, PARA';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';

            document.getElementById('siBtn').style.fontSize = '60px';
            document.getElementById('siBtn').style.padding = '55px 65px';
       0
            noButtonState++;
            break;
     
            case 9:
            document.getElementById('noBtn').innerHTML = 'PARAAAA, VA A EXPLOTAAAR';
            document.getElementById('noBtn').style.backgroundColor = '#F1330A';
            document.getElementById('sadGifContainer').style.display = 'none';
            document.getElementById('sadGifContainer1').style.display = 'none';
            document.getElementById('sadGifContainer2').style.display = 'none';
            document.getElementById('gifContainer').style.display = 'block';
            document.getElementById('happyGifContainer').style.display = 'none';

            // Mostrar la explosión
            document.getElementById('explosionContainer').style.display = 'block';
            document.getElementById('explosionSound').play();

            // Ocultar la explosión después de 3.5 segundos
            setTimeout(function() {
                // Ocultamos la explosión
                document.getElementById('explosionContainer').style.display = 'none';

                // Restablecer todos los elementos a su estado inicial
                document.getElementById('gifContainer').style.display = 'block';
                document.getElementById('sadGifContainer').style.display = 'none';
                document.getElementById('sadGifContainer1').style.display = 'none';
                document.getElementById('sadGifContainer2').style.display = 'none';
                document.getElementById('happyGifContainer').style.display = 'none';
                document.getElementById('happyGifContainer2').style.display = 'none';
                document.getElementById('happyGifContainer3').style.display = 'none';
                document.getElementById('happyGifContainer4').style.display = 'none';

                // Restablecer el botón "Sí"
                document.getElementById('siBtn').style.fontSize = '18px';
                document.getElementById('siBtn').style.padding = '12px 25px';

                // Restablecer el botón "No"
                document.getElementById('noBtn').innerHTML = 'No';
                document.getElementById('noBtn').style.backgroundColor = '#6c757d';

                // Mostrar los botones nuevamente
                document.getElementById('question').style.display = 'block';
                document.getElementById('siBtn').style.display = 'block';
                document.getElementById('noBtn').style.display = 'block';

                // Reiniciar el contador y el estado del botón "No"
                noButtonClickCount = 0;
                noButtonState = 0;

                // Reiniciar el mensaje
                document.getElementById('messageContainer').style.display = 'none';
            }, 3500); // 3500 ms = 3.5 segundos
            break;
        

        default:
            // Por si acaso, maneja cualquier otro caso aquí
            break;
    }

    
});