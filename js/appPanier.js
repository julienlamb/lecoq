$(document).ready(function () {
	$.ajaxSetup({
		cache: false
	});
	getElementCookie();

	$(function () {
		$('button').click(function () {
			if (this.name == "btnPanier") {
				var produit = $('#titreTaille').html();
				var quantite = $('#quantite').val();

				var cookiePanier = $.jCookie('cookieL');
				var varCookie = null;
				console.log(cookiePanier);
				if (cookiePanier === undefined || cookiePanier === null || cookiePanier === "null") {

					varCookie = JSON.stringify({ panier: [{ id: produit.replace(" ", ""), produit: produit, quantite: quantite }] });
					$.jCookie('cookieL', varCookie, 7, { path: "/", secure: true });
					console.log($.jCookie('cookieL'));
				} else {
					//Mise à jour du cookie
					var isMaj = new Boolean(majCookie(produit.replace(" ", ""), quantite, '+'));
					if (isMaj == false) {
						var json = JSON.parse(cookiePanier);
						json.panier.splice(json.length, 0, { id: produit.replace(" ", ""), produit: produit, quantite: quantite });
						$.jCookie('cookieL', JSON.stringify(json), 7, { path: "/", secure: true });
					}
				}
			}
			getElementCookie();
		});
	});

	$('tbody').html(getTbody());

	$(function () {
		$('tbody').on("click", "#btnPlus", function () {
			majQuantite("+", $(this).attr("name"), "btnPlus");
		});
	});

	$(function () {
		$('tbody').on("click", "#btnMoins", function () {
			majQuantite("-", $(this).attr("name"), "btnMoins");
		});
	});

	$(function () {
		$('tbody').on("click", "#btnSuppr", function () {
			supprElement($(this).attr("name"), "btnSuppr");
		});
	});
});


function getId(name_, idBtn_) {
	return name_.slice(idBtn_.length, name_.length)
}

function getTbody() {
	$.ajaxSetup({
		cache: false
	});
	var varCookie = $.jCookie('cookieL');
	if (varCookie !== undefined && varCookie !== null) {
		var listeTable = '';
		var json = JSON.parse(varCookie);
		//var json = getJon();
		if (json !== null) {
			
			var nbrElement = json.panier.length;
			for (var i = 0; i < nbrElement; i++) {
				if (json.panier[i] !== null) {
					var id = json.panier[i].id;
					listeTable += '<tr>' +
						'<td><a class="btn btn-outline-primary" id="btnSuppr" name="btnSuppr' + id + '"><i class="fa fa-trash-o fa-w"></i></a></td>' +
						'<td id="produit' + id + '">' + json.panier[i].produit + '</td>' +
						'<td id="qte' + id + '">' + json.panier[i].quantite + '</td>' +
						'<td><a class="btn btn-primary border-dark" id="btnPlus" name="btnPlus' + id + '">+</a>' +
						'<a class="btn btn-primary border-dark" id="btnMoins" name="btnMoins' + id + '">-</a></td>' +
						'</tr>';
				}
			}
			listeTable += '<tr>' +
				'<td></td>' +
				'<td></td>' +
				'<td>' +
				'<div class="btn-group"> <button class="btn btn-primary dropdown-toggle"' +
				'data-toggle="dropdown">Continuer à réserver</button>' +
				'<div class="dropdown-menu">' +
				'<a class="dropdown-item" href="../pages/espoulet.html">Poulet</a> <a class="dropdown-item" href="../pages/espintade.html">Pintade</a><a class="dropdown-item" href="../pages/esrillette.html">Rillettes</a><a class="dropdown-item" href="../pages/esplats.html">Plats préparées</a>' +
				'</div>' +
				'</div>' +
				'</td>' +
				'<td><a class="btn btn-primary" href="../pages/panierValid.html">Réserver</a></td>' +
				'</tr>';
			$('tbody').html(listeTable);
		}
		return listeTable;
	}
}

function majQuantite(operation_, name_, idBtn_) {
	$.ajaxSetup({
		cache: false
	});
	var id_ = getId(name_, idBtn_);
	var qte = $('#qte' + id_).html();
	var qteModif = 0;
	if (operation_ == '+') {
		qteModif = parseInt(qte) + 1;
	} else {
		qteModif = parseInt(qte) - 1;
	}
	if (qteModif >= 1) {
		$('#qte' + id_).html(qteModif);
		majCookie(id_, 1, operation_);
		getElementCookie();
	}
}

function supprElement(name_, idBtn_) {
	$.ajaxSetup({
		cache: false
	});
	var id_ = getId(name_, idBtn_);
	var cookiePanier = $.jCookie('cookieL');
	if (cookiePanier === undefined || cookiePanier === null) {
		return
	}
	var json = JSON.parse(cookiePanier);
	if (json !== null) {
		var nbrElement = json.panier.length;
		for (var i = 0; i < nbrElement; i++) {
			if (json.panier[i] !== null && json.panier[i].id == id_) {
				delete json.panier[i];
			}
		}
		$.jCookie('cookieL', JSON.stringify(json), 7, { path: "/", secure: true });
		getTbody();
		getElementCookie();
	}
}

function getElementCookie() {
	$.ajaxSetup({
		cache: false
	});
	var cookieJson = $.jCookie('cookieL');
	if (cookieJson !== undefined && cookieJson !== null) {
		var json = JSON.parse(cookieJson);
		if (json !== null) {
			var nbrElementJson = json.panier.length;
			var nbrElement = 0;
			for (var i = 0; i < nbrElementJson; i++) {
				if (json.panier[i] !== null) {
					nbrElement = parseInt(json.panier[i].quantite) + parseInt(nbrElement);
				}
			}
			if (parseInt(nbrElement) == 0) {
				$.jCookie('cookieL', null, 7, { path: "/", secure: true });
				$('#nbPanier').text("");
				return
			}
			$('#nbPanier').text(nbrElement);
			if (nbrElement === 28) {
				alert("Le pannier a atteint ça taille maximum");
			}
		}
	}
}


function majCookie(id_, quantite, operateur) {
	$.ajaxSetup({
		cache: false
	});
	var cookiePanier = $.jCookie('cookieL');
	if (cookiePanier !== undefined && cookiePanier !== null) {
		var json = JSON.parse(cookiePanier);
		if (json !== null) {
			var nbrElement = json.panier.length;
			for (var i = 0; i < nbrElement; i++) {
				if (json.panier[i] !== null && json.panier[i].id == id_) {
					if (operateur == '+') {
						json.panier[i].quantite = parseInt(json.panier[i].quantite) + parseInt(quantite);
					} else {
						json.panier[i].quantite = parseInt(json.panier[i].quantite) - parseInt(quantite);
					}
					$.jCookie('cookieL', JSON.stringify(json), 7, { path: "/", secure: true });
					return true;
				}
			}
		}
	}
	return false;
}

function getJon() {
	var json = JSON.parse(JSON.stringify({ panier: [{ id: "Petitpoulet", produit: "Petit poulet", quantite: "2" }] }));
	console.log(json);
	json.panier.splice(json.length, 0, { id: "Pouletmoyen", produit: "Poulet moyen", quantite: "2" });
	json.panier.splice(json.length, 0, { id: "Grospoulet", produit: "Gros poulet", quantite: "2" });
	return json;
}