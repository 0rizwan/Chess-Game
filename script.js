let board = document.getElementById('board');
let boardPosition = board.getBoundingClientRect();
let blackKing = document.getElementById('bking');
let alphabetArr = ['h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
let iterator = 0;
let allPieces = [
    {
        color: 'black',
        piece: 'RookOne',
        src: './img/br.png'
    },
    {
        color: 'black',
        piece: 'KnightOne',
        src: './img/bn.png'
    },
    {
        color: 'black',
        piece: 'BishopOne',
        src: './img/bb.png'
    },
    {
        color: 'black',
        piece: 'Queen',
        src: './img/bq.png'
    },
    {
        color: 'black',
        piece: 'King',
        src: './img/bk.png'
    },
    {
        color: 'black',
        piece: 'BishopTwo',
        src: './img/bb.png'
    },
    {
        color: 'black',
        piece: 'KnightTwo',
        src: './img/bn.png'
    },
    {
        color: 'black',
        piece: 'RookTwo',
        src: './img/br.png'
    },
    {
        color: 'black',
        piece: 'PawnOne',
        src: './img/bp.png'
    },
    {
        color: 'black',
        piece: 'PawnTwo',
        src: './img/bp.png'
    },
    {
        color: 'black',
        piece: 'PawnThree',
        src: './img/bp.png'
    },
    {
        color: 'black',
        piece: 'PawnFour',
        src: './img/bp.png'
    },
    {
        color: 'black',
        piece: 'PawnFive',
        src: './img/bp.png'
    },
    {
        color: 'black',
        piece: 'PawnSix',
        src: './img/bp.png'
    },
    {
        color: 'black',
        piece: 'PawnSeven',
        src: './img/bp.png'
    },
    {
        color: 'black',
        piece: 'PawnEight',
        src: './img/bp.png'
    },
    {
        color: 'white',
        piece: 'PawnOne',
        src: './img/wp.png'
    },
    {
        color: 'white',
        piece: 'PawnTwo',
        src: './img/wp.png'
    },
    {
        color: 'white',
        piece: 'PawnThree',
        src: './img/wp.png'
    },
    {
        color: 'white',
        piece: 'PawnFour',
        src: './img/wp.png'
    },
    {
        color: 'white',
        piece: 'PawnFive',
        src: './img/wp.png'
    },
    {
        color: 'white',
        piece: 'PawnSix',
        src: './img/wp.png'
    },
    {
        color: 'white',
        piece: 'PawnSeven',
        src: './img/wp.png'
    },
    {
        color: 'white',
        piece: 'PawnEight',
        src: './img/wp.png'
    },
    {
        color: 'white',
        piece: 'RookOne',
        src: './img/wr.png'
    },
    {
        color: 'white',
        piece: 'KnightOne',
        src: './img/wn.png'
    },
    {
        color: 'white',
        piece: 'BishopOne',
        src: './img/wb.png'
    },

    {
        color: 'white',
        piece: 'Queen',
        src: './img/wq.png'
    },
    {
        color: 'white',
        piece: 'King',
        src: './img/wk.png'
    },
    {
        color: 'white',
        piece: 'BishopTwo',
        src: './img/wb.png'
    },
    {
        color: 'white',
        piece: 'KnightTwo',
        src: './img/wn.png'
    },
    {
        color: 'white',
        piece: 'RookTwo',
        src: './img/wr.png'
    },

];
// console.log(allPieces);
// for (let i = 1; i < 65; i++) {
//     let span = document.createElement('span');
//     span.className = 'square';


for (let i = 7; i >= 0; i--) {
    for (let j = 7; j >= 0; j--) {

        let span = document.createElement('span');
        // allPieces.forEach((pieceObj, index) => {
        //     if (index < 2) {
        //         // console.log(pieceObj, index);
        //         console.log('Before');

        //         console.log(img);
        //         // span.innerHTML = `<img class="pieces" src="${pieceObj.src}" id="${pieceObj.piece}" alt="${pieceObj.color + pieceObj.piece}">`;
        //         // console.log("I", i, "J", j, "Index", index);
        //     }
        // });
        if (i < 5 && i >= 2) {
            iterator = 15;
        }
        if (i > 5) {

            let img = document.createElement('img');
            img.className = 'pieces';
            img.classList.add('black');
            img.id = `${allPieces[iterator].color}${allPieces[iterator].piece}`;
            img.src = allPieces[iterator].src;
            span.appendChild(img);
        } else if (i < 2) {
            let img = document.createElement('img');
            img.className = 'pieces';
            img.classList.add('white');

            img.id = `${allPieces[iterator].color}${allPieces[iterator].piece}`;
            img.src = allPieces[iterator].src;
            span.appendChild(img);
        }
        span.id = `${alphabetArr[j]}${i + 1}`;
        span.className = 'square';
        if ((i + j) % 2 === 0) {
            span.classList.add('skin');
        }
        else {
            span.classList.add('green');
        }

        board.appendChild(span);
        iterator++;

    }
}
let pieceArr = document.querySelectorAll('.pieces');
let squareArr = document.querySelectorAll('.square');

let selectedPiece = {
    selected: false,
    piece: undefined,
    square: undefined,
    turn: 'white'
};
pieceArr.forEach((piece, i) => {
    piece.addEventListener("click", (e) => {
        // selectedPiece.selected = true;
        // selectedPiece.piece = e.target.id;
        // if(turn==='')
        // if (e.target.classList.contains(selectedPiece.turn)) {
        selectedPiece.selected = true;
        selectedPiece.piece = pieceArr[i];
        selectedPiece.square = e.target.parentNode;
        // }


    });

});
squareArr.forEach((square, i) => {
    square.addEventListener('click', (e) => {
        if (selectedPiece.selected) {
            let currentSquareId = selectedPiece.square.id;
            if (currentSquareId !== squareArr[i].id) {
                selectedPiece.square.innerHTML = '';
                e.target.appendChild(selectedPiece.piece);
                // selectedPiece.selected = false;
                // selectedPiece.square = undefined;
                // selectedPiece.piece = undefined;
                // selectedPiece.turn = selectedPiece.turn ? 'white' : 'black';
                // if (selectedPiece.turn == 'white') {
                //     selectedPiece.turn = 'black';
                // } else {
                //     selectedPiece.turn = 'white';
                // }
                // console.log(selectedPiece.turn);
            }


        }
    });
});
