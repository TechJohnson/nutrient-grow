function valueof(str) {
  if (str == "") {
    return 0;
  } else {
    return eval(str);
  }
}

function ppmclearFields() {
  document.ppmcalculator.containergrams.value = "";
  document.ppmcalculator.containermls.value = "";
  document.ppmcalculator.mixingunits.value = "";
  document.ppmcalculator.nitrate.value = "";
  document.ppmcalculator.ammonium.value = "";
  document.ppmcalculator.urea.value = "";
  document.ppmcalculator.percentn.value = "";
  document.ppmcalculator.percentp2o5.value = "";
  document.ppmcalculator.percentk2o.value = "";
  document.ppmcalculator.percentmg.value = "";
  document.ppmcalculator.percents.value = "";
  document.ppmcalculator.percentca.value = "";
  document.ppmcalculator.percentfe.value = "";
  document.ppmcalculator.percentb.value = "";
  document.ppmcalculator.percentmn.value = "";
  document.ppmcalculator.percentzn.value = "";
  document.ppmcalculator.percentmo.value = "";
  document.ppmcalculator.percentna.value = "";
  document.ppmcalculator.percentcu.value = "";
  document.ppmcalculator.percentcl.value = "";
  document.ppmcalculator.percentco.value = "";
  document.ppmcalculator.percentsi.value = "";
  document.ppmcalculator.percentse.value = "";
  document.ppmcalculator.resultppmno3display.value = "";
  document.ppmcalculator.resultppmnh4display.value = "";
  document.ppmcalculator.resultppmnh2display.value = "";
  document.ppmcalculator.resultppmndisplay.value = "";
  document.ppmcalculator.resultppmpdisplay.value = "";
  document.ppmcalculator.resultppmkdisplay.value = "";
  document.ppmcalculator.resultppmmgdisplay.value = "";
  document.ppmcalculator.resultppmsdisplay.value = "";
  document.ppmcalculator.resultppmcadisplay.value = "";
  document.ppmcalculator.resultppmfe.value = "";
  document.ppmcalculator.resultppmb.value = "";
  document.ppmcalculator.resultppmmn.value = "";
  document.ppmcalculator.resultppmzn.value = "";
  document.ppmcalculator.resultppmmo.value = "";
  document.ppmcalculator.resultppmna.value = "";
  document.ppmcalculator.resultppmcu.value = "";
  document.ppmcalculator.resultppmcl.value = "";
  document.ppmcalculator.resultppmco.value = "";
  document.ppmcalculator.resultppmsi.value = "";
  document.ppmcalculator.resultppmse.value = "";
  document.ppmcalculator.resultgramsperml.value = "";
}

function ghmicro() {
  ppmclearFields();
  document.ppmcalculator.containergrams.value = "4650";
  document.ppmcalculator.containermls.value = "3790";
  document.ppmcalculator.mixingunits.value = "8";
  document.ppmcalculator.nitrate.value = "4.7";
  document.ppmcalculator.resultppmno3display.value = "122";
  document.ppmcalculator.ammonium.value = "0.3";
  document.ppmcalculator.resultppmnh4display.value = "8";
  document.ppmcalculator.resultppmndisplay.value = "130";
  document.ppmcalculator.percentk2o.value = "1";
  document.ppmcalculator.resultppmkdisplay.value = "22";
  document.ppmcalculator.percentca.value = "5";
  document.ppmcalculator.resultppmcadisplay.value = "130";
  document.ppmcalculator.percentfe.value = "0.1";
  document.ppmcalculator.resultppmfe.value = "2.5932";
  document.ppmcalculator.percentmn.value = ".05";
  document.ppmcalculator.resultppmmn.value = "1.2966";
  document.ppmcalculator.percentmo.value = ".0008";
  document.ppmcalculator.resultppmmo.value = "0.0207";
  document.ppmcalculator.percentco.value = ".0005";
  document.ppmcalculator.resultppmco.value = "0.013";
  document.ppmcalculator.resultgramsperml.value = "1.22691";
}

function ghbloom() {
  ppmclearFields();
  document.ppmcalculator.containergrams.value = "4360";
  document.ppmcalculator.containermls.value = "3790";
  document.ppmcalculator.mixingunits.value = "16";
  document.ppmcalculator.percentp2o5.value = "5";
  document.ppmcalculator.resultppmpdisplay.value = "106";
  document.ppmcalculator.percentk2o.value = "4";
  document.ppmcalculator.resultppmkdisplay.value = "161";
  document.ppmcalculator.percentmg.value = "1.5";
  document.ppmcalculator.resultppmmgdisplay.value = "73";
  document.ppmcalculator.percents.value = "1";
  document.ppmcalculator.resultppmsdisplay.value = "49";
  document.ppmcalculator.resultgramsperml.value = "1.1504";
}

function ghgrow() {
  ppmclearFields();
  document.ppmcalculator.containergrams.value = "1050";
  document.ppmcalculator.containermls.value = "946";
  document.ppmcalculator.mixingunits.value = "0";
  document.ppmcalculator.nitrate.value = "1.75";
  document.ppmcalculator.ammonium.value = "0.25";
  document.ppmcalculator.percentp2o5.value = "1";
  document.ppmcalculator.percentk2o.value = "6";
  document.ppmcalculator.percentmg.value = "0.5";
  document.ppmcalculator.resultgramsperml.value = "1.10994";
}

function ppmcalcall() {
  document.ppmcalculator.percentn.value =
    valueof(document.ppmcalculator.nitrate.value) +
    valueof(document.ppmcalculator.ammonium.value) +
    valueof(document.ppmcalculator.urea.value);
  document.ppmcalculator.resultgramsperml.value =
    valueof(document.ppmcalculator.containergrams.value) /
    valueof(document.ppmcalculator.containermls.value);
  document.ppmcalculator.resultmixingunitsperliter.value =
    valueof(document.ppmcalculator.resultgramsperml.value) *
    valueof(document.ppmcalculator.mixingunits.value);
  document.ppmcalculator.resultppmno3.value =
    ((valueof(document.ppmcalculator.resultmixingunitsperliter.value) /
      valueof(document.ppmcalculator.literspergallon.value)) *
      valueof(document.ppmcalculator.mgpergram.value) *
      valueof(document.ppmcalculator.nitrate.value)) /
    valueof(document.ppmcalculator.percentdiv.value);
  document.ppmcalculator.resultppmno3display.value = Math.round(
    document.ppmcalculator.resultppmno3.value
  );
  document.ppmcalculator.resultppmnh4.value =
    ((valueof(document.ppmcalculator.resultmixingunitsperliter.value) /
      valueof(document.ppmcalculator.literspergallon.value)) *
      valueof(document.ppmcalculator.mgpergram.value) *
      valueof(document.ppmcalculator.ammonium.value)) /
    valueof(document.ppmcalculator.percentdiv.value);
  document.ppmcalculator.resultppmnh4display.value = Math.round(
    document.ppmcalculator.resultppmnh4.value
  );
  document.ppmcalculator.resultppmnh2.value =
    ((valueof(document.ppmcalculator.resultmixingunitsperliter.value) /
      valueof(document.ppmcalculator.literspergallon.value)) *
      valueof(document.ppmcalculator.mgpergram.value) *
      valueof(document.ppmcalculator.urea.value)) /
    valueof(document.ppmcalculator.percentdiv.value);
  document.ppmcalculator.resultppmnh2display.value = Math.round(
    document.ppmcalculator.resultppmnh2.value
  );
  document.ppmcalculator.resultppmn.value =
    valueof(document.ppmcalculator.resultppmno3display.value) +
    valueof(document.ppmcalculator.resultppmnh4display.value) +
    valueof(document.ppmcalculator.resultppmnh2display.value);
  document.ppmcalculator.resultppmndisplay.value = Math.round(
    document.ppmcalculator.resultppmn.value
  );
  document.ppmcalculator.resultppmp.value =
    (((valueof(document.ppmcalculator.resultmixingunitsperliter.value) /
      valueof(document.ppmcalculator.literspergallon.value)) *
      valueof(document.ppmcalculator.mgpergram.value) *
      valueof(document.ppmcalculator.percentp2o5.value)) /
      valueof(document.ppmcalculator.percentdiv.value)) *
    valueof(document.ppmcalculator.convp2o5.value);
  document.ppmcalculator.resultppmpdisplay.value = Math.round(
    document.ppmcalculator.resultppmp.value
  );
  document.ppmcalculator.resultppmk.value =
    (((valueof(document.ppmcalculator.resultmixingunitsperliter.value) /
      valueof(document.ppmcalculator.literspergallon.value)) *
      valueof(document.ppmcalculator.mgpergram.value) *
      valueof(document.ppmcalculator.percentk2o.value)) /
      valueof(document.ppmcalculator.percentdiv.value)) *
    valueof(document.ppmcalculator.convk2o.value);
  document.ppmcalculator.resultppmkdisplay.value = Math.round(
    document.ppmcalculator.resultppmk.value
  );
  document.ppmcalculator.resultppmmg.value =
    ((valueof(document.ppmcalculator.resultmixingunitsperliter.value) /
      valueof(document.ppmcalculator.literspergallon.value)) *
      valueof(document.ppmcalculator.mgpergram.value) *
      valueof(document.ppmcalculator.percentmg.value)) /
    valueof(document.ppmcalculator.percentdiv.value);
  document.ppmcalculator.resultppmmgdisplay.value = Math.round(
    document.ppmcalculator.resultppmmg.value
  );
  document.ppmcalculator.resultppms.value =
    ((valueof(document.ppmcalculator.resultmixingunitsperliter.value) /
      valueof(document.ppmcalculator.literspergallon.value)) *
      valueof(document.ppmcalculator.mgpergram.value) *
      valueof(document.ppmcalculator.percents.value)) /
    valueof(document.ppmcalculator.percentdiv.value);
  document.ppmcalculator.resultppmsdisplay.value = Math.round(
    document.ppmcalculator.resultppms.value
  );
  document.ppmcalculator.resultppmca.value =
    ((valueof(document.ppmcalculator.resultmixingunitsperliter.value) /
      valueof(document.ppmcalculator.literspergallon.value)) *
      valueof(document.ppmcalculator.mgpergram.value) *
      valueof(document.ppmcalculator.percentca.value)) /
    valueof(document.ppmcalculator.percentdiv.value);
  document.ppmcalculator.resultppmcadisplay.value = Math.round(
    document.ppmcalculator.resultppmca.value
  );
  document.ppmcalculator.resultppmfe.value =
    ((valueof(document.ppmcalculator.resultmixingunitsperliter.value) /
      valueof(document.ppmcalculator.literspergallon.value)) *
      valueof(document.ppmcalculator.mgpergram.value) *
      valueof(document.ppmcalculator.percentfe.value)) /
    valueof(document.ppmcalculator.percentdiv.value);
  document.ppmcalculator.resultppmb.value =
    ((valueof(document.ppmcalculator.resultmixingunitsperliter.value) /
      valueof(document.ppmcalculator.literspergallon.value)) *
      valueof(document.ppmcalculator.mgpergram.value) *
      valueof(document.ppmcalculator.percentb.value)) /
    valueof(document.ppmcalculator.percentdiv.value);
  document.ppmcalculator.resultppmmn.value =
    ((valueof(document.ppmcalculator.resultmixingunitsperliter.value) /
      valueof(document.ppmcalculator.literspergallon.value)) *
      valueof(document.ppmcalculator.mgpergram.value) *
      valueof(document.ppmcalculator.percentmn.value)) /
    valueof(document.ppmcalculator.percentdiv.value);
  document.ppmcalculator.resultppmzn.value =
    ((valueof(document.ppmcalculator.resultmixingunitsperliter.value) /
      valueof(document.ppmcalculator.literspergallon.value)) *
      valueof(document.ppmcalculator.mgpergram.value) *
      valueof(document.ppmcalculator.percentzn.value)) /
    valueof(document.ppmcalculator.percentdiv.value);
  document.ppmcalculator.resultppmmo.value =
    ((valueof(document.ppmcalculator.resultmixingunitsperliter.value) /
      valueof(document.ppmcalculator.literspergallon.value)) *
      valueof(document.ppmcalculator.mgpergram.value) *
      valueof(document.ppmcalculator.percentmo.value)) /
    valueof(document.ppmcalculator.percentdiv.value);
  document.ppmcalculator.resultppmna.value =
    ((valueof(document.ppmcalculator.resultmixingunitsperliter.value) /
      valueof(document.ppmcalculator.literspergallon.value)) *
      valueof(document.ppmcalculator.mgpergram.value) *
      valueof(document.ppmcalculator.percentna.value)) /
    valueof(document.ppmcalculator.percentdiv.value);
  document.ppmcalculator.resultppmcu.value =
    ((valueof(document.ppmcalculator.resultmixingunitsperliter.value) /
      valueof(document.ppmcalculator.literspergallon.value)) *
      valueof(document.ppmcalculator.mgpergram.value) *
      valueof(document.ppmcalculator.percentcu.value)) /
    valueof(document.ppmcalculator.percentdiv.value);
  document.ppmcalculator.resultppmcl.value =
    ((valueof(document.ppmcalculator.resultmixingunitsperliter.value) /
      valueof(document.ppmcalculator.literspergallon.value)) *
      valueof(document.ppmcalculator.mgpergram.value) *
      valueof(document.ppmcalculator.percentcl.value)) /
    valueof(document.ppmcalculator.percentdiv.value);
  document.ppmcalculator.resultppmco.value =
    ((valueof(document.ppmcalculator.resultmixingunitsperliter.value) /
      valueof(document.ppmcalculator.literspergallon.value)) *
      valueof(document.ppmcalculator.mgpergram.value) *
      valueof(document.ppmcalculator.percentco.value)) /
    valueof(document.ppmcalculator.percentdiv.value);
  document.ppmcalculator.resultppmsi.value =
    ((valueof(document.ppmcalculator.resultmixingunitsperliter.value) /
      valueof(document.ppmcalculator.literspergallon.value)) *
      valueof(document.ppmcalculator.mgpergram.value) *
      valueof(document.ppmcalculator.percentsi.value)) /
    valueof(document.ppmcalculator.percentdiv.value);
  document.ppmcalculator.resultppmse.value =
    ((valueof(document.ppmcalculator.resultmixingunitsperliter.value) /
      valueof(document.ppmcalculator.literspergallon.value)) *
      valueof(document.ppmcalculator.mgpergram.value) *
      valueof(document.ppmcalculator.percentse.value)) /
    valueof(document.ppmcalculator.percentdiv.value);
}

function MM_findObj(n, d) {
  //v4.01
  var p, i, x;
  if (!d) d = document;
  if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
    d = parent.frames[n.substring(p + 1)].document;
    n = n.substring(0, p);
  }
  if (!(x = d[n]) && d.all) x = d.all[n];
  for (i = 0; !x && i < d.forms.length; i++) x = d.forms[i][n];
  for (i = 0; !x && d.layers && i < d.layers.length; i++)
    x = MM_findObj(n, d.layers[i].document);
  if (!x && d.getElementById) x = d.getElementById(n);
  return x;
}

function KW_getVal(o) {
  //v1.2
  var retVal = "0";
  if (o.type == "select-one") {
    retVal = o.selectedIndex == -1 ? 0 : o.options[o.selectedIndex].value;
  } else if (o.length > 1) {
    for (var i = 0; i < o.length; i++) if (o[i].checked) retVal = o[i].value;
  } else if (o.type == "checkbox") {
    retVal = o.checked ? o.value : 0;
  } else {
    retVal = Number(o.value);
  }
  return parseFloat(retVal);
}

function KW_calcForm() {
  //v1.2.1
  var str = "",
    a = KW_calcForm.arguments;
  for (var i = 3; i < a.length; i++)
    str +=
      a[i].indexOf("#") == -1
        ? a[i] + " "
        : KW_getVal(MM_findObj(a[i].substring(1)));
  t = Math.round(a[1] * eval(str)) / a[1];
  tS = t.toString();
  if (a[2] > 0) {
    tSp = tS.indexOf(".");
    if (tSp == -1) tS += ".";
    tSp = tS.indexOf(".");
    while (tSp != tS.length - 1 - a[2]) {
      tS += "0";
      tSp = tS.indexOf(".");
    }
  }
  MM_findObj(a[0]).value = tS;
}
