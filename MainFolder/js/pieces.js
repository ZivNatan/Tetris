function LPiece () {

	this.state1 = [ 
				   [1,0],
				   [1,0],
				   [1,1]
				  ];

	this.state2 = [ 
					[0,0,1],
	                [1,1,1]
	              ];
	 
	this.state3 = [ 
					[1,1],
					[0,1],
					[0,1]
	              ];
	this.state4 = [ 
					[1,1,1],
	                [1,0,0]
	              ];	 

	this.states = [this.state1,this.state2,this.state3,this.state4] ;   
	this.Color = 0;
	this.gridX = 4;
	this.gridY = -3;                     
}

function ReversLPiece () {

	this.state1 = [ 
				   [1,0],
				   [1,0],
				   [1,1]
				  ];

	this.state2 = [ 
					[0,0,1],
	                [1,1,1]
	              ];
	 
	this.state3 = [ 
					[1,1],
					[0,1],
					[0,1]
	              ];
	this.state4 = [ 
					[1,1,1],
	                [1,0,0]
	              ];	 

	this.states = [this.state1,this.state2,this.state3,this.state4] ;   
	this.Color = 0;
	this.gridX = 4;
	this.gridY = -3;                     
}

function BlockPiece () {

	this.state1 = [ 
				   [1,1],
				   [1,1]
				 
				  ];

	 

	this.states = [this.state1] ;   
	this.Color = 0;
	this.gridX = 4;
	this.gridY = -2;                     
}

function LineLPiece () {

	this.state1 = [ 
				   [1,1,1,1]
				  ];

	this.state2 = [ 
					[1],
	                [1]
	                [1],
	                [1]
	              ];
	 	 
	this.states = [this.state1,this.state2] ;   
	this.Color = 0;
	this.gridX = 4;
	this.gridY = -4;                     
}

function TPiece () {

	this.state1 = [ 
				   [1,1,1],
				   [0,1,0]
				  ];

	this.state2 = [ 
					[1,0],
	                [1,1],
	                [1,0]
	              ];
	this.state3 = [ 
				   [0,1,0],
				   [1,1,1]
	              ];
  	this.state2 = [ 
					[0,1],
				    [1,1],
				    [0,1]
				  ];	              
	 	 
	this.states = [this.state1,this.state2,this.state3,this.state4] ; 
	this.Color = 0;
	this.gridX = 4;
	this.gridY = -2;                     
}

function ZPiece () {

	this.state1 = [ 
				   [1,1,0],
				   [0,1,1]
				  ];

	this.state2 = [ 
					[0,1],
	                [1,1],
	                [1,0]
	              ];
	              
	 	 
	this.states = [this.state1,this.state2] ; 
	this.Color = 0;
	this.gridX = 4;
	this.gridY = -2;                     
}

function ReversZPiece () {

	this.state1 = [ 
				   [0,1,1],
				   [1,1,0]
				  ];

	this.state2 = [ 
					[1,0],
	                [1,1],
	                [0,1]
	              ];
	              
	 	 
	this.states = [this.state1,this.state2] ; 
	this.Color = 0;
	this.gridX = 4;
	this.gridY = -2;                     
}

function GetRandomPiece(){

	var result = Math.floor(Math.random()*7);
	var piesce;

	switch(result){

		case 0: 
		piece = new LPiece();			 break;
		case 1: 
		piece = new BlockPiece(); 		 break;
		case 2: 
		piece = new LinePiece(); 		 break;
		case 3: 
		piece = new ZPiece(); 			 break;
		case 4: 
		piece = new TPiece(); 			 break;
		case 5: 
		piece = new ReversLPiece();		 break;
		case 6: 
		piece = new ReversZPiece(); 	 break;
	}

	 piece.Color = Math.floor(Math.random()*8);
	 return piece;

	// function GetColor(){

	// 	var piece.Color = Math.floor(Math.random()*8);
	// 	return piece;
	// }
}

