
// this function updates the copyright year automaticly
getCurrentYear = function(){
  $('#copyright').html(function(){
    var date = new Date;
    return '&copy; physiosa PRAXIS FÜR PHYSIOTHERAPIE '+date.getFullYear()+' | <a href="impressum.html">Impressum</a>'
  })
}

getCurrentYear()