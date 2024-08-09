
for (let i = 1; i <= 12; i++ ) {
  output = [
  "\n",
  "sctar:et-sextus-l5t" + i,
	"  rdf:type sctar:expressionType ;",
	"  dc:title 'Liber Sextus, Liber 5, Titulus " + i + "' ;",
  "  dc:description 'Liber Sextus, Liber 5, Titulus "+ i +"' ;",
	"  sctap:shortId 'et-sextus-l5t" + i +"' ."
  ]
  console.log(output.join('\n'));
}``

