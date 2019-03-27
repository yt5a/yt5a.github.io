session = 0;
menuelement = [];
menuelement[0] = '基本ゲームルール'+'<br>' + '<select id="gamemode">'+
'<option value="0">オセロ</option>'+
'<option value="1">チェス</option>'+
'<option value="2">陣取りゲーム</option>'+
'</select>'
menuelement[1] = '<form name="masutx">' + 'マスの数<input type="text" id="masu" value="' +
10 +
'"onchange="setmasu()">' + '</form>';
