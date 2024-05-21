window.onload = function() {
    fetch('http://localhost:3000/rutaDondeEnviasLosDatos')
        .then(response => response.json())
        .then(data => {
            const anses = document.querySelector('#anses table');
            const registroCivil = document.querySelector('#registroCivil table');
            const bnaPlus = document.querySelector('#bnaPlus table');
            const macro = document.querySelector('#macro table');

            data.forEach(cliente => {
                const row = document.createElement('tr');

                Object.values(cliente).forEach(value => {
                    const cell = document.createElement('td');
                    cell.textContent = value;
                    row.appendChild(cell);
                });

                switch (cliente.turno) {
                    case 'Anses':
                        anses.appendChild(row);
                        break;
                    case 'Registro civil':
                        registroCivil.appendChild(row);
                        break;
                    case 'BNA+':
                        bnaPlus.appendChild(row);
                        break;
                    case 'MARO':
                        macro.appendChild(row);
                        break;
                }
            });
        })
        .catch(error => console.error('Error:', error));
};
