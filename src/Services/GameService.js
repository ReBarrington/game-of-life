
class GameService {

    createGrid(rows, cols) {
        let grid = document.querySelector('#grid');
        let tbl = document.createElement('table');

        for (let i = 0; i < rows; i++) {
            let tr = document.createElement('tr');
            for (let j = 0; j < cols; j++) {
                let cell = document.createElement('td');
                     
                tr.appendChild(cell);
            }
            tbl.appendChild(tr);
        }
        grid.appendChild(tbl);
    }
}


export default new GameService();