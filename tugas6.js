function angka1() {
    let nil = document.getElementById("nilai");
    nil.bagian1.value = "";
  }
  function angka2() {
    let nil = document.getElementById("nilai");
    nil.bagian2.value = "";
  }
  function ditambah() {
    let nil = document.getElementById("nilai");
    let satu = nil.bagian1.value;
    let dua = nil.bagian2.value;
    if (isNaN(satu) || (satu == "" && isNaN(dua)) || dua == "") {
      alert("HARAP ISI DATA BERUPA ANGKA");
    } else {
      let total = parseInt(satu) + parseInt(dua);
      nil.hasil.value = total;
    }
  }
  function dikurang() {
    let nil = document.getElementById("nilai");
    let satu = nil.bagian1.value;
    let dua = nil.bagian2.value;
    if (isNaN(satu) || (satu == "" && isNaN(dua)) || dua == "") {
      alert("HARAP ISI DATA BERUPA ANGKA");
    } else {
      let total = parseInt(satu) - parseInt(dua);
      nil.hasil.value = total;
    }
  }
  function dikali() {
    let nil = document.getElementById("nilai");
    let satu = nil.bagian1.value;
    let dua = nil.bagian2.value;
    if (isNaN(satu) || (satu == "" && isNaN(dua)) || dua == "") {
      alert("HARAP ISI DATA BERUPA ANGKA");
    } else {
      let total = parseInt(satu) * parseInt(dua);
      nil.hasil.value = total;
    }
  }
  function dibagi() {
    let nil = document.getElementById("nilai");
    let satu = nil.bagian1.value;
    let dua = nil.bagian2.value;
    if (isNaN(satu) || (satu == "" && isNaN(dua)) || dua == "") {
      alert("HARAP ISI DATA BERUPA ANGKA");
    } else {
      let total = parseInt(satu) / parseInt(dua);
      nil.hasil.value = total;
    }
  }
  function dipangkat() {
    let nil = document.getElementById("nilai");
    let satu = nil.bagian1.value;
    let dua = nil.bagian2.value; 
    if (isNaN(satu) || (satu == "" && isNaN(dua)) || dua == "") {
      alert("HARAP ISI DATA BERUPA ANGKA");
    } else { 
      let total = parseInt(satu) ** parseInt(dua);
      nil.hasil.value = total;
    }
  }
  function dikosongin() {
    let nil = document.getElementById("nilai");
    nil.bagian1.value = "";
    nil.bagian2.value = "";
    nil.hasil.value = "";
  }