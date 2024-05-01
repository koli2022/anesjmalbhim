function verif() {
  nm = document.getElementById("nm").value;
  per = document.getElementById("per").value;
  ad = document.getElementById("ad").value;
  mp = document.getElementById("mp").value;
  gen = document.getElementById("sse").checked||gen = document.getElementById("se").checked;
  list = document.getElementById("ni").selectedIndex;
  if (nm.length == 0 || per.length == 0 || ad.length == 0 || mp.length == 0) {
    alert("saisir incorrect");
    return false;
  }
  if (list == 0) {
    alert("saisir incorrect");
    return false;
  }
  if (gen == false) {
    alert("saisir incorrect");
    return false;
  }
}
