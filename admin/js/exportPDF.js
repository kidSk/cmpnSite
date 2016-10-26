function genPDF(){
	var doc = new jsPDF();
	doc.fromHTML($('#export').get(0),20,20,{
		'width':500,
	});
	doc.save('test.pdf');
}