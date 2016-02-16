/*
 * INTENTIONALLY MISSING PARTS
 *
 * Switch tracks:
 * Central Park West between 72 St - 81 St
 *
 */

// !!!=== IMPORTANT ===!!!
// For points, first TWO must be actaul points that are NOT the same as each other
// first TWO may NOT be "SOLID" or "DASHED"
var tracks = [];
var routeSwitches = {};
routeSwitches["B"] = [ [8,57.5] ];
routeSwitches["D"] = [ [9,57.5], [6,56.5] ];
routeSwitches["M"] = [ [12, [935]], [7,49.7] ];

routeSwitches["C"] = [];
routeSwitches["C"].push([8,-12.7]); // South of canal St, downtown local -> chambers st
routeSwitches["C"].push([10,-8.8]); // North of canal St, uptown express -> uptown local

routeSwitches["E"] = [ [11,45.5] ]; 



// Downtown 6  ================================================================
tracks[0] = { color:"#00933C",
	      points:[ [113,1385], [100.5,1385], [100,1390], [49.5,1390], [49,1385], [45,1385], [41,1285], [16, 1285], [11,1335], [-17.7,1335], [-18.7,1325], [-21.3,1325], [-22.3,1305], [-23,1305], [-23.5,1315], [-23.5,1325], "DASHED", [-23.5,1365], [-23,1375], [-22.5,1375], ["END",3] ],
	      platforms:[ 125, 116, 110, 103, 96, 86, 77, 68, 59, 51, 42.5, 33, 28, 23, 13.5, 7.5, 1, -5, -10.8, -20 ]
	    };

// Downtown 4/5  ================================================================
tracks[1] = { color:"#00933C",
	      points:[ [113,1395], [100.5,1395], "DASHED", [49,1395], "SOLID", [45,1395], [44,1395] , [40,1295], [17, 1295], [12,1345], [-30,1345] ],
	      platforms:[ 125, 86, 59, 42.1, 13.75, -20 ]
	    };

// Uptown 4/5  ================================================================
tracks[2] = { color:"#00933C",
	      points:[ [-30,1355], [12,1355], [17, 1305], [39.9, 1305], [43.9,1405], [49,1405], "DASHED", [100.5,1405], [113,1405] ],
	      platforms:[ -20, 14.25, 41.9, 59, 86, 125 ]
	    };

// Uptown 6  ================================================================
tracks[3] = { color:"#00933C",
	      points:[ [-22.5,1375], [-18.7,1375], [-17.7,1365], [10,1365], [11,1375], [12,1375], [18, 1315], [38.9, 1315], [42.9, 1415], [45,1415], [49,1415], [49.5,1410], [100,1410], [100.5,1415], [113,1415] ],
	      platforms:[ -20, -10.8, -4, 2.5, 8.5, 14.5, 23, 28, 33, 41.5, 51, 59, 68, 77, 86, 96, 103, 110, 116, 125 ]
	    };



// 6 Av
// Downtown F (and M) ================================================================
tracks[4] = { color:"#FF6319",
	      points:[ [58.5, 890], [54,890], [53.5,885], [50.7,885], [49.7,895], [47,895], "DASHED", [46,895], [45,885], [44.5,885], "SOLID", [44,885], [43.2,875], [40.8,875], [39.8,885], [36.2,885], [35.2,875], [32.8,875], [11,875], "DASHED", [10,875], [9,870], [3.7,870], [3.2,875], [2.7,875], "SOLID", [1.2,875], [0.6,875], "DASHED", [-1.6,930], [-1.6,970], "SOLID", [-1.6,1200] ],
	      platforms:[ 57, 48.5, 42, 34, 23, 14, 5 ]
	    };

// Downtown B/D  ================================================================
tracks[5] = { color:"#FF6319",
	      points:[ [57.5,530], [56.5,520], [55.5,520], "DASHED", [54.4,520], [52.4,560], [52.4,580], "SOLID", [52.4,855], [51.4,875], [50,875], [49.7,875], [47.3,875], [46.3, 885], [46,885], [45,895], [32,895], "DASHED", [10,895], [9,890], [1.2,890], [-1.2,950], [-1.2,970], "SOLID", [-1.2,1200] ],
	      platforms:[ [720], 48.5, 42, 34, 5 ]
	    };

// Uptown B/D  ================================================================
tracks[6] = { color:"#FF6319",
	      points:[ [-0.8,1200], [-0.8,970], "DASHED", [-0.8,960], [1.2,910], [2,910], [9,910], [10,905], [32,905], "SOLID", [50,905], [51.1,905], "DASHED", [51.6,905], [52.6,885], [52.6,590], [54.1,560], [55.5,560], "SOLID", [56.5,560], [57.5,570], ["END", 11] ],
	      platforms:[ 5, 34, 42, 48.5, [720] ]
	    };

// Uptown F (and M)  ================================================================
tracks[7] = { color:"#FF6319",
	      points:[ [-0.4,1200], [-0.4,965], [0.4,945], [1.2,945], [2.2,945], "DASHED", [2.7,945], [3.7,930], [9,930], [10,925], [11,925], "SOLID", [32.8,925], [35.2,925], [36.2,915], [39.8,915], [40.8,925], [43.2,925], [44.2,915], [46.3,915], [47.3, 925], [49.7,925], [50.7,915], [53.5,915], [54,910], [58.5,910] ],
	      platforms:[ 5, 14, 23, 34, 42, 48.5, 57 ]
	    };

// Switch track south of 59 St - 8 Av downtown express --> 6 Av downtown express [(D) train]
tracks[14] = { color:"#FF6319",
	       points:[ [57.5,510], [56.5,520], ["END",5] ]
	     };

// Switch track south of 59 St - 6 Av uptown express --> 8 Av uptown express [(D) train]
tracks[15] = { color:"#FF6319",
	       points:[ [56.5,560], [57.5,550], ["END",10] ]
	     };

// Switch track from - 53 St West --> 6 Av downtown local [(M) train]
tracks[16] = { color:"#FF6319",
	       points:[ [53.6,935], [52,895], [49.7,895], ["END",4] ]
	     };

// Switch track from - 6 Av downtown local -> 53 St East [(M) train]
tracks[21] = { color:"#FF6319",
	       points:[ [49.7,925], [51.4,925], "DASHED", [52.4,925], [53.4,955], ["END",13] ]
	     };

// Switches north of 47-50th Sts
// Downtown (F) to 6 Av downtown express
tracks[22] = { points:[ [49.7,905], [50.7,915], ["END",7] ] };

// 6 Av uptown express to (F)
tracks[23] = { points:[ [50.7,885], [49.7,875], ["END",5] ] };


// 8 Av
// Downtown C (and E)  ================================================================
tracks[8] = { color:"#0039A6",
	      points:[ [137,435], [129.3,435], [128.3,435], [127.3,435], [124.7,435], [123.7,445], [122,445], [118,525], [108,525], "DASHED", [107,525], [106,530], [68,530], [67,525], [66,525], "SOLID", [61.3,525], [60.3,510], [57.5,510], [54,510], [52,520], [48,520], [47,515], [45.5,515], [32,515], [26,515], [25,525], [17.3,525], [16.3,515], [12.8,515], [6.3,865], [2.2,865], [1.2,855], [0,855], [-2,889], [-9.5,1039], [-10.2,1039], [-12.7,1089], [-13.35,1102], [-14.2,1119], "DASHED", [-16.6,1165], [-17,1165], "SOLID", [-23.2,1165] ],
	      platforms:[ 116, 110, 103, 96, 87, 80, 71, 59, 50, 41, 34, 23, 15, 5, -5.25, -11.1, -22 ]
	    };

// Downtown A  ================================================================
tracks[9] = { color:"#0039A6",
	      points:[ [128.3,455], [127.3,455], [122.1,455], [118.1,535], [108,535], "DASHED", [107,535], [105,545], [69,545], [67,535], [66,535], "SOLID", [61.3,535], [60.3,530], [57.5,530], [53,530], [52,535], [37,535], [36,525], [32,525], [26,525], [25,535], [13,535], [6.3,895], [-1.5,895], [-2,901], [-12.05,1102], [-12.7,1115], [-13,1121], [-14,1135], [-30,1135] ],
	      platforms:[ 59, 41, 34.5, 15, 5, -10.7, -20 ]
	    };

// Uptown A  ================================================================
tracks[10] = { color:"#0039A6",
	       points:[ [-30,1155], [-14.2,1155], [-13,1133], [-8.8,1049], [-8.5,1043], [-2,913], [-1.5,905], [6.6,905], [13.3,545], "SOLID", [52,545], [53,550], [57.5,550], [60.3,550], [61.3,545], [66,545], "DASHED", [67,545], [68,550], [69,550], "SOLID", [105,550], "DASHED", [106,550], [107,545], [108,545], "SOLID", [118.2,545], [122.2,465], [127.3,465], [128.3,465], [129.3,465] ],
	       platforms:[ -20, -10.8, 5, 15, 34.5, 43, 59 ]
	     };

// Uptown C  ================================================================
tracks[11] = { color:"#0039A6",
	       points:[ [-23.2,1185], [-20.7,1185], [-19.7,1175], [-14,1175], [-11,1117], [-9,1077], [-9,1065], [-8.5,1055], [-8.2,1049], [-2,925], [1.2,925], [2.2,935], [6.5,935], [13.5,565], "SOLID", [13.7,565], [16.3,565], [17.3,555], [40.6,555], [41.6,565], [45.5,565], [47,565], [48,560], [52,560], [54,570], [57.5,570], [60.3,570], [61.3,555], [66,555], [67,555], [69,535], [105,535], [107,555], [118.3,555], [122.3,475], [123.7,475], [124.7,485], [127.3,485], [128.3,485], [129.3,485], [137,485] ],
	       platforms:[ -22, -10.4, -4.75, 5, 15, 23, 34, 43, 50, 59, 71, 80, 87, 96, 103, 116 ]
	     };

// Switches between 135 St - 145 St
// X-interchanges directly north of 135 St
tracks[32] = { points:[ [127.3,485], [128.3,465], ["END",10] ] }; // Uptown Local -> Uptown Express
tracks[33] = { points:[ [127.3,465], [128.3,485], ["END",11] ] }; // Uptown Express -> Uptown Local
tracks[34] = { points:[ [128.3,455], [127.3,435], ["END",8] ] }; // Downtown Express -> Downtown Local
tracks[35] = { points:[ [128.3,435], [127.3,455], ["END",9] ] }; // Downtown Local -> Downtown Express

// [36] & [37] JUST FOR LOOKS
tracks[36] = { points:[ [129.3,465], [129.8,455] ] }; // Express X
tracks[37] = { points:[ [129.8,465], [129.3,455] ] }; // Express Opposite X

// Uptown Local -> Uptown Middle
tracks[38] = { points:[ [129.3,485], [130.3,475], [138,475] ] };

// West 4 St switches
// Downtown 6 Av local -> Downtown 8 Av local
tracks[17] = { dashed:true,
	       points:[ [3.7,870], [2.2,855], "SOLID", [1.2,855], ["END",8] ] 
	     };

// Downtown 8 Av local -> Downtown 6 Av local
tracks[18] = { points:[ [2.2,865], [1.2,875], ["END",4] ] };

// Uptown 6 Av local -> Uptown 8 Av local
tracks[19] = { points:[ [1.2,945], [2.2,935], ["END",11] ] };

// Uptown 8 Av local -> Uptown 6 Av local
tracks[20] = { points:[ [1.2,925], [2.2,925], "DASHED", [3.2,925], [3.7,930], ["END",7] ] };


// World Trade Center switches
// Downtown (C) [8 Av local -> 8 Av express]
tracks[28] = { color:"#0039A6",
	       points:[ [-12.7,1089], [-12.7,1115], ["END",9] ]
	     };

// Downtown (Unused) [8 Av express -> World Trade Center]
tracks[29] = { points:[ [-12.05,1102], [-13.35,1102], ["END",8] ] };

// Uptown (C) [8 Av express -> 8 Av local]
tracks[30] = { color:"#0039A6",
	       points:[ [-8.8,1049], [-8.2,1049], ["END",11] ]
	     };

// Uptown (Unused) [World Trade Center -> 8 Av express]
tracks[31] = { points:[ [-8.5,1055], [-8.5,1043], ["END",10] ] };



// E train to 53 St
// Manhattan Bound (Downtown)
tracks[12] = { color:"#0039A6",
	       points:[ [53.4,1500], [53.4,1290], [53.6,1275], [53.6,935], [53.6, 590], "DASHED", [53.6,565], [51.6,525], [47,525], "SOLID", [46.5,525], [45.5,515], ["END", 8] ],
	       platforms:[ [1450], [1100], [720], 50 ]
	     };

// Queens Bound (Uptown)
tracks[13] = { color:"#0039A6",
	       points:[ [45.5,565], [46.5,555], [47,555], "DASHED", [51.4,555], [53.4,595], [53.4,955], [53.4,1275], [52.6,1315], [52.6,1330], "SOLID", [52.6,1500] ],
	       platforms:[ 50, [720], [1100], [1450] ]
	     };

// Downtown R  ================================================================
tracks[24] = { color:"#FCCC0A",
	       points:[ [10,1250], [-17.7,1250], [-18.8,1245], [-21.3,1245] ],
	       platforms:[ 7.5, 14 ]
	     };

// Downtown N/Q  ================================================================
tracks[25] = { color:"#FCCC0A",
	       points:[ [10,1260], [-9,1260] ],
	       platforms:[ 14 ]
	     };


// Uptown N/Q  ================================================================
tracks[26] = { color:"#FCCC0A",
	       points:[ [-9,1270], [10,1270] ],
	       platforms:[ 14 ]
	     };

// Uptown R  ================================================================
tracks[27] = { color:"#FCCC0A",
	       points:[ [-21.3,1285], [-18.7,1285], [-17.7,1280], [10,1280] ],
	       platforms:[ 7.5, 14 ]
	     };



var drawBefore = [ 14, 15 ];
var drawAfter = [];
var drawMiddle = [];
for(var x=0;x<tracks.length;x++){
    tracks[x].trains = [];

    if(tracks[x].color == undefined){
	tracks[x].color = "black";
	drawBefore.push(x);
    } else if(drawBefore.indexOf(x) == -1 && drawAfter.indexOf(x) == -1){
	drawMiddle.push(x);
    }
}




var platforms = [ 
    // Downtown 6, Uptown 6
    [-20,1335], [-20,1365],     // Brooklyn Bridge 
    [-10.8,1325], [-10.8,1375], // Canal St
    [-5,1325], [-4,1375],       // Spring St
    [1,1325], [2.5,1375],       // Bleecker St
    [7.5,1325], [8.5,1375],      // Astor Pl
    [13.75,1317,-21], [14.25,1343,-21],
    [23,1275], [23, 1325],
    [28,1275], [28, 1325],
    [33,1275], [33, 1325],
    [42.4,1336, 43], [41.6, 1364, 43],
    [51,1380], [51,1420],
    [59,1380], [59,1420],  [59,1371], [59,1429],
    [68,1380], [68,1420],
    [77,1380], [77,1420],
    [86,1380], [86,1420],  [86,1371], [86,1429],
    [96,1380], [96,1420],
    [103,1375], [103,1425],
    [110,1375], [113,1425],


    // Downtown F/M, Uptown F/M
    [5,880], [5,920],               // W 4 St
    [14,885], [14,915],
    [23,865], [23,935],
    [34,885], [34,915],
    [42,885], [42,915],
    [48.5,885], [48.5,915], 
    [57,900],


    // Downtown C, Uptown C
    [-22,1175], // (E)    World Trade Center
    [-20,1145], // (A)(C) Chambers St
    [-11.1,1070,-37], [-10.5,1095,-37], // Canal St
    [-5.5,945,-37], [-4.5,990,-37], // Spring St
    [15,525], [15,555],
    [23,515], [23,565],
    [34,505], [34,565], [34.5,535],
    [41,525], [43,555],
    [50,510], [50,570],
    [59,520], [59,540], [59,560],
    [71,520],
    [80,520],
    [87,520],
    [96,520],
    [103,520],
    [110,515],[110,565],
    [116,515],[116,565],
    [126,445], [126,475],
    [135,425], [135,495],


    // Downtown R, Uptown R
    [-20,1255], [-20,1262], [-20,1268], [-20,1275], // City Hall
    [-10.8,1240], [-10.8,1290], // Canal St
    [-3,1240], [-3,1290], // Prince St
    [7.5,1240], [7.5,1290],  // 8 St-NYU

    // 53rd Street (E)(M) and (B)(D)
    [53,720,90], // 7 Av (B)(D)(E)
    [53,1100,90], // 5 Av (E)(M)
    [53,1450,90] // Lex Av (E)(M)

];



var stationText = [
    //[text, x, y]


    // Lexington Av (4)(5)(6)
    ["Brooklyn Bridge",-20,1405],
    ["Canal St",-10.8,1405],
    ["Spring St",-4.3,1405],
    ["Bleecker St",2,1405],
    ["Astor Pl",8,1405],
    ["14 St",13.5,1390],
    ["23 St",23,1260],
    ["28 St",28,1260],
    ["33 St",33,1260],
    ["42 St",43.8,1320],
    ["51 St",51,1360],
    ["59 St",59,1360],
    ["68 St",68,1360],
    ["77 St",77,1360],
    ["86 St",86,1360],
    ["96 St",96,1360],
    ["103 St",103,1360],
    ["110 St",110,1360],


    // 6 Av (B)(D)(F)(M)
    ["W 4 St",5,850],
    ["14 St",14,850],
    ["23 St",23,850],
    ["34 St",34,850],
    ["42 St",42,850],
    ["47-50 Sts",48.5,850],
    ["57 St",57,850],

    // 8 Av (A)(C)(E)
    ["14 St",15,490],
    ["23 St",23,490],
    ["34 St",34,490],
    ["42 St",42,490],
    ["50 St",50,490],
    ["59 St",59,490],
    ["72 St",71,490],
    ["81 St",80,490],
    ["86 St",87,490],
    ["96 St",96,490],
    ["103 St",103,490],
    ["110 St",110,490],
    ["116 St",116,490],

    // Broadway (N)(Q)(R)
    ["City Hall",-20,1230],
    ["Canal St",-10.8,1230],
    ["Prince St",-3.5,1230],
    ["8 St",7.5,1230]
];





// presets
var BLOCK_LENGTH = 264 / 10;

var xOffset = BLOCK_LENGTH*10.5
var yOffset = 88.8

var TRAIN_SPACE = 40;
var PLATFORM_LENGTH = 600 / 10; // 600 ft / 20
var PLATFORM_WIDTH = 10;
var TRAIN_SIZE = 16;
var COLOR = {
    "1":"#EE352E",
    "2":"#EE352E",
    "3":"#EE352E",

    "4":"#00933C",
    "5":"#00933C",
    "6":"#00933C",

    "7":"#B933AD",

    "A":"#0039A6",
    "C":"#0039A6",
    "E":"#0039A6",

    "B":"#FF6319",
    "D":"#FF6319",
    "F":"#FF6319",
    "M":"#FF6319",

    "G":"#6CBE45",

    "J":"#996633",
    "Z":"#996633",

    "L":"#A7A9AC",

    "N":"#FCCC0A",
    "Q":"#FCCC0A",
    "R":"#FCCC0A",

    "S":"#808183"
};
var MAIN_STREETS = [ 0, 4, 14, 23, 34, 42, 57, 72, 79, 86, 96, 106, 116, 125, 135, 145 ];
var AVENUES = [
    0,    // 11 Av
    900,  // 10 Av
    1800, // 9 Av
    2700, // 8 Av
    3600, // 7 Av
    4500, // 6 Av
    5500, // 5 Av
    6000, // Madison Av
    6500, // Park Av
    7000, // Lexington Av
    7500, // 3 Av
    8200  // 2 Av
];
for(var x=0;x<AVENUES.length;x++){
    AVENUES[x] /= 5;//10;
}


var TRAIN_START = {
    "1": [],
    "2": [],
    "3": [],
    
    "4": [1,2],
    "5": [1,2],
    "6": [0,3],

    "7": [],

    "A": [9,10],
    "C": [8,10],
    "E": [12,11],

    "B": [8,6],
    "D": [9,6],
    "F": [4,7],
    "M": [12,7],

    "G": [],
    
    "J": [],
    "Z": [],

    "L": [],
    
    "N": [],
    "Q": [],
    "R": [],

    "S": []
};
    





var t = 0;
var c = document.getElementById("c");
var height = c.height;
var width = c.width;
var ctx = c.getContext("2d");
var lastTime = -1;




var point = function(n){
    return { x:n[0]*BLOCK_LENGTH - xOffset,
	     y:n[1] - yOffset
	   };
};



var Platform = function(x,y){
    this.x = x*BLOCK_LENGTH;
    this.y = y;

    this.draw = function(){
	ctx.fillStyle = "black";
	ctx.beginPath();
	ctx.moveTo(this.x+xOffset+PLATFORM_LENGTH/2, this.y+yOffset+PLATFORM_WIDTH/2);
	ctx.moveTo(this.x+xOffset+PLATFORM_LENGTH/2, this.y+yOffset-PLATFORM_WIDTH/2);
	ctx.moveTo(this.x-xOffset+PLATFORM_LENGTH/2, this.y+yOffset-PLATFORM_WIDTH/2);
	ctx.moveTo(this.x-xOffset+PLATFORM_LENGTH/2, this.y+yOffset+PLATFORM_WIDTH/2);
	ctx.fill();
    }

};



var Train = function(letter, argLine){

    this.constructor = function(letter, argLine){
	this.letter = letter;
	this.line = -1;
	this.setLine(argLine);

	this.switchTrack = false;

	tracks[this.line].trains.push(this);

	var pt = point(tracks[this.line].points[0]);

	this.x = tracks[this.line].points[0][0]*BLOCK_LENGTH;
	this.y = tracks[this.line].points[0][1];

	this.nextX = tracks[this.line].points[1][0]*BLOCK_LENGTH;
	this.nextY = tracks[this.line].points[1][1];
	this.nextNode = 1;
	
	var pt2 = point(tracks[this.line].points[1]);
	var dist = Math.sqrt(Math.pow(pt2.x-pt.x,2) + Math.pow(pt2.y-pt.y,2));
	this.dx = (pt2.x-pt.x)/dist;
	this.dy = (pt2.y-pt.y)/dist;


	this.wait = -1;
	this.platformIndex = -1;
    };



    this.move = function(){

	// START collision avoidance
	var trains = tracks[this.line].trains;
	if(trains.length > 1){
	    var foundMe = false;
	    for(var x=0;x<trains.length;x++){
		if(trains[x] == this){
		    foundMe = true;
		} else {

		    if(this.x == trains[x].x && this.y == trains[x].y){
			if(foundMe) this.wait = t+1;
		    } else if(this.y-trains[x].y == 0 && (
			(this.dx > 0 && trains[x].x-this.x < TRAIN_SPACE && trains[x].x-this.x > 0) ||
			    (this.dx < 0 && trains[x].x-this.x > -TRAIN_SPACE && trains[x].x-this.x < 0))){
			this.wait = t+1;
		    }

		}
	    }
	}
	// END collision avoidance

	if(t > this.wait){
	    this.x += this.dx;
	    this.y += this.dy;

	    // START platform check
	    if(tracks[this.line].platforms != undefined){
		if(this.platformIndex == -1){
		    for(var x=0;x<tracks[this.line].platforms.length;x++){
			var plat = tracks[this.line].platforms[x];

			// check for horizontal platform
			if(this.dx != 0){
			    if(Math.abs(this.x - plat*BLOCK_LENGTH) < Math.abs(this.dx)){
				this.platformIndex = x;
			    }
			} else {
			    if(typeof plat == "object"){
				if(Math.abs(this.y-plat[0]) < Math.abs(this.dy)){
				    this.platformIndex = x;
				}
			    }
			}
		    }
		}

		if(this.dx != 0){
		    if(Math.abs(this.x - tracks[this.line].platforms[this.platformIndex]*BLOCK_LENGTH) < Math.abs(this.dx)){
			this.wait = t+100;
			this.platformIndex++;
		    }
		} else {
		    if(typeof tracks[this.line].platforms[this.platformIndex] == "object"){
			if(Math.abs(this.y - tracks[this.line].platforms[this.platformIndex][0]) < Math.abs(this.dy)){
			    this.wait = t+100;
			    this.platformIndex++;
			}
		    }
		}
	    }
	    // END platform check


	    // START track node
	    if(Math.sqrt(Math.pow(this.nextX-this.x,2) + Math.pow(this.nextY-this.y,2)) < (Math.abs(this.dx)+Math.abs(this.dy))/2){

		this.x = this.nextX;
		this.y = this.nextY;
		this.nextNode++;


		// Check if switch track designated in route
		if(routeSwitches[this.letter] != undefined){
		    for(var z=0;z<routeSwitches[this.letter].length;z++){
			if(routeSwitches[this.letter][z][0] == this.line){
			    
			    if((routeSwitches[this.letter][z][1].length == 1 &&
				routeSwitches[this.letter][z][1][0] == this.y) || 
			       routeSwitches[this.letter][z][1]*BLOCK_LENGTH == this.x){
				this.switchTrack = true;
			    }
			}
		    }
		}
		    
		
		// If SWITCH TRACK is enabled, loop through all tracks
		// and if start position is equal to current location, switch
		if(this.switchTrack){
		    for(var z=0;z<tracks.length;z++){
			if(tracks[z].points[0][0]*BLOCK_LENGTH == this.x &&
			   tracks[z].points[0][1] == this.y){
			    this.setLine(z);
			    this.nextNode = 1;
			    this.platformIndex = -1;
			    this.switchTrack = false;
			    break;
			}
		    }
		} 

		    

		while(tracks[this.line].points[this.nextNode] == "DASHED" || tracks[this.line].points[this.nextNode] == "SOLID"){
		    this.nextNode++;
		}


		if(this.nextNode < tracks[this.line].points.length){

		    if(tracks[this.line].points[this.nextNode][0] == "END"){
			//this.line = tracks[this.line].points[this.nextNode][1];
			this.setLine(tracks[this.line].points[this.nextNode][1]);
			this.platformIndex = -1;

			for(var z=0;z<tracks[this.line].points.length;z++){
			    if(tracks[this.line].points[z][0]*BLOCK_LENGTH == this.x && 
			       tracks[this.line].points[z][1] == this.y){
				this.nextNode = z+1;
			    }
			}
		    }


		    if(this.nextNode < tracks[this.line].points.length){
			console.log(this.line+" - "+this.nextNode);
			this.nextX = tracks[this.line].points[this.nextNode][0]*BLOCK_LENGTH;
			this.nextY = tracks[this.line].points[this.nextNode][1];

			var dist = Math.sqrt(Math.pow(this.nextX-this.x,2) + Math.pow(this.nextY-this.y,2));
			this.dx = (this.nextX-this.x)/dist;
			this.dy = (this.nextY-this.y)/dist;
		    }
		}
	    }

	    
	    // END track node
	}
    };

    
    this.draw = function(){
	var x = this.x-xOffset, y = this.y-yOffset;
	ctx.fillStyle = COLOR[this.letter];
	ctx.fillRect(x-TRAIN_SIZE/2, y-TRAIN_SIZE/2, TRAIN_SIZE, TRAIN_SIZE);

	if(this.switchTrack) ctx.fillStyle = "#2EFEF7";
	else ctx.fillStyle = "white";
	ctx.font = TRAIN_SIZE+"px Arial";
	ctx.textAlign = "center"
	ctx.fillText(this.letter, x-TRAIN_SIZE/3+5.5, y+TRAIN_SIZE/3+1);

    };


    this.setLine = function(n){
	if(this.line != -1){
	    for(var x=0;x<tracks[this.line].trains.length;x++){
		if(tracks[this.line].trains[x] == this){
		    tracks[this.line].trains.splice(x,1);
		}
	    }
	}
	this.line = n;
	tracks[n].trains.push(this);
    };



    this.constructor(letter, argLine);

    return this;
};



var Screen = function(){

    this.trains = [];

    this.main = function(){
	/*
	for(var x=0;x<tracks.length;x++){
	    for(var y=4;y<=6;y++){
		this.trains.push(new Train(y+"",x));
	    }
	}*/
	

	for(var x in TRAIN_START){
	    addTrain(x,0);
	    addTrain(x,1);
	}

	
	
	this.animloop();
    };


    this.drawTracks = function(){
	this.drawTracksGo(drawBefore);
	this.drawTracksGo(drawMiddle);
	this.drawTracksGo(drawAfter);
    }

    this.drawTracksGo = function(n){
	for(var a=0;a<n.length;a++){
	    var x = n[a];

	    var plats = tracks[x].platforms;
	    var pts = tracks[x].points;
	    var platIndex = 0; // platform index

	    // START draw track
	    if(tracks[x].dashed){
		ctx.setLineDash([6,3]);
		ctx.lineWidth = 2;
	    } else {
		ctx.setLineDash([]);
		ctx.lineWidth = 4;
	    }

	    ctx.beginPath();
	    ctx.strokeStyle = tracks[x].color;

	    for(var y=0;y<tracks[x].points.length;y++){

		if(tracks[x].points[y] == "DASHED" || tracks[x].points[y] == "SOLID"){

		    ctx.stroke();
		    ctx.beginPath();

		    if(tracks[x].points[y] == "DASHED"){
			ctx.setLineDash([6,3]);
			ctx.lineWidth = 2;
		    } else {
			ctx.setLineDash([]);
			ctx.lineWidth = 4;
		    }

		    var lastPt = point(tracks[x].points[y-1]);
		    ctx.moveTo(lastPt.x, lastPt.y);
		} else {

		    var pt = point(tracks[x].points[y]);
		    if(y == 0) ctx.moveTo(pt.x, pt.y);
		    else ctx.lineTo(pt.x, pt.y);

		}
	    }
	    ctx.stroke();
	    // END draw track
	}
    };



    /*
    this.drawTracksGo = function(n){
	for(var x=0;x<tracks.length;x++){

	    var plats = tracks[x].platforms;
	    var pts = tracks[x].points;
	    var platIndex = 0; // platform index

	    // START draw track

	    ctx.lineWidth = 4;
	    ctx.setLineDash([]);
	    ctx.beginPath();
	    ctx.strokeStyle = tracks[x].color;

	    for(var y=0;y<tracks[x].points.length;y++){

		if(tracks[x].points[y] == "DASHED" || tracks[x].points[y] == "SOLID"){

		    ctx.stroke();
		    ctx.beginPath();

		    if(tracks[x].points[y] == "DASHED"){
			ctx.setLineDash([6,3]);
			ctx.lineWidth = 2;
		    } else {
			ctx.setLineDash([]);
			ctx.lineWidth = 4;
		    }

		    var lastPt = point(tracks[x].points[y-1]);
		    ctx.moveTo(lastPt.x, lastPt.y);
		} else {

		    var pt = point(tracks[x].points[y]);
		    if(y == 0) ctx.moveTo(pt.x, pt.y);
		    else ctx.lineTo(pt.x, pt.y);

		}
	    }
	    ctx.stroke();
	    // END draw track
	}
    };*/

    this.drawPlatforms = function(){
	for(var x=0;x<platforms.length;x++){
	    var k = platforms[x];
	    var angle = k.length==2? 0 : k[2]*Math.PI/180;

	    var sin = Math.sin(angle), cos = Math.cos(angle);
	    var length = PLATFORM_LENGTH/2, width = PLATFORM_WIDTH/2;

	    ctx.fillStyle = "black";
	    ctx.beginPath();
	    ctx.moveTo(k[0]*BLOCK_LENGTH-xOffset-length*cos-width*sin, k[1]-yOffset+width*cos-length*sin);
	    ctx.lineTo(k[0]*BLOCK_LENGTH-xOffset+length*cos-width*sin, k[1]-yOffset+width*cos+length*sin);
	    ctx.lineTo(k[0]*BLOCK_LENGTH-xOffset+length*cos+width*sin, k[1]-yOffset-width*cos+length*sin);
	    ctx.lineTo(k[0]*BLOCK_LENGTH-xOffset-length*cos+width*sin, k[1]-yOffset-width*cos-length*sin);
	    ctx.fill();
	}
    };


    this.drawGrid = function(){
	ctx.setLineDash([]);
	ctx.strokeStyle = "#dddddd";
	ctx.font = "20px Arial";
	ctx.textAlign = "center";
	ctx.fillStyle = "black";


	var block = Math.ceil(xOffset/BLOCK_LENGTH);
	if(xOffset < 0) block--;

	for(var x=xOffset%BLOCK_LENGTH;x<width;x+=BLOCK_LENGTH){
	    ctx.beginPath();
	    ctx.moveTo(x,0);
	    ctx.lineTo(x,height);

	    //if(block%10 == 0){
	    if(MAIN_STREETS.indexOf(block) != -1){
		//ctx.fillText(block, x-13*(block+"").length/2+2, 30);
//		ctx.fillText(block, x, 30);
		ctx.lineWidth = 4;
	    } else {
		ctx.lineWidth = 2;
	    }

	    ctx.stroke();
	    
	    block++;
	}

	ctx.lineWidth = 4;
	for(var x=0;x<AVENUES.length;x++){
	    if(AVENUES[x]-yOffset > 50){
		ctx.beginPath();
		ctx.moveTo(0,AVENUES[x]-yOffset);
		ctx.lineTo(width,AVENUES[x]-yOffset);
		ctx.stroke();
	    }
	}
	
	// CENTRAL PARK
	ctx.fillStyle = "#81F781";
	ctx.beginPath();
	ctx.moveTo(59*BLOCK_LENGTH+1 - xOffset, 540+2 - yOffset);
	ctx.lineTo(110*BLOCK_LENGTH-1 - xOffset, 540+2 - yOffset);
	ctx.lineTo(110*BLOCK_LENGTH-1 - xOffset, 1100-2 - yOffset);
	ctx.lineTo(59*BLOCK_LENGTH+1 - xOffset, 1100-2 - yOffset);
	ctx.fill();


    };


    this.drawStreetNumbers = function(){
	// Main street numbers
	for(var x=0;x<MAIN_STREETS.length;x++){
	    var locX = MAIN_STREETS[x]*BLOCK_LENGTH - xOffset;
	    ctx.fillStyle = "white";
	    ctx.fillRect(locX-BLOCK_LENGTH/2,10,BLOCK_LENGTH,25);
	    ctx.fillStyle = "black";
	    ctx.fillText(MAIN_STREETS[x], locX, 30);
	}
    };

    
    this.drawTrains = function(){
	for(var x=0;x<this.trains.length;x++){
	    this.trains[x].draw();

	}
    };

    
    this.drawStationText = function(){
	ctx.font = "bold 20px Arial";
	for(var x=0;x<stationText.length;x++){
	    ctx.fillText(stationText[x][0], stationText[x][1]*BLOCK_LENGTH - xOffset, stationText[x][2] - yOffset);
	}
    };


    this.clear = function(){
	ctx.fillStyle = "white";
	ctx.fillRect(0,0,width,height);
    };


    this.animloop = function(){
	this.clear();
	for(var x=0;x<this.trains.length;x++){
	    this.trains[x].move();
	}

	this.drawGrid();
	this.drawTracks();
	this.drawPlatforms();
	this.drawTrains();
	this.drawStreetNumbers();
	this.drawStationText();
    };

};



function addTrain(n,dir){
    if(TRAIN_START[n].length > 0){
	if(dir == undefined) dir = (document.getElementById("downtown").checked) ? 0 : 1;
	program.trains.push(new Train(n,TRAIN_START[n][dir]));
    }
}


function keydown(e){
    switch(e.keyCode){
    case 38: // Up arrow
	yOffset -= BLOCK_LENGTH;
	break;

    case 40: // Down arrow
	yOffset += BLOCK_LENGTH;
	break;

    case 39: // Right arrow
	xOffset += BLOCK_LENGTH;
	break;

    case 37: // Left arrow
	xOffset -= BLOCK_LENGTH;
	break;


    }
};

document.addEventListener("keydown",keydown, false);


var program = new Screen();
program.main();

var animloop = function(){
    program.animloop();
    window.requestAnimationFrame(animloop);
    t++;
};
animloop();
