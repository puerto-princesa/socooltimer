function mary(n) { //배열
	this.length = n;
	for (var i = 1; i < n; i++)
		this[i] = 0;
	return this;
}

function bgrandom() { //배경색 바꾸는 함수
	a = new mary(6); //RGB 6자리의 배열 선언
	for (i = 0; i < 6; i++) { //문자형 변수로
		a[i] = new String
	}
	for (i = 0; i < 6; i++) { //각자 랜덤한 수 대입
		a[i] = Math.floor(Math.random() * 16);
		if (a[i] > 10) {
			switch (a[i]) { //10이상일경우 16진수로 바꾸는 작업

			case 10:
				a[i] = "a"
				break;

			case 11:
				a[i] = "b"
				break;

			case 12:
				a[i] = "c"
				break;

			case 13:
				a[i] = "d"
				break;

			case 14:
				a[i] = "e"
				break;

			case 15:
				a[i] = "f"
				break;
			}
		}
	}

	document.bgColor = "#" + a[0] + "" + a[1] + "" + a[2] + "" + a[3] + ""
			+ a[4] + "" + a[5] //색상코드 제작 + 배경색 바꿈
}

function fncSetValue() {
	with (document.change_bgcolor) {
		if (selected_bgcolor.selectedIndex == 0) {
			document.bgColor = '#FF0000';
		} else if (selected_bgcolor.selectedIndex == 1) {
			document.bgColor = '#3DB7CC';
		} else if (selected_bgcolor.selectedIndex == 2) {
			document.bgColor = '#9FC93C';
		} else
			document.bgColor = '#FFFFFF';
	}
}