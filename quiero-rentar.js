//configuración personal de Firebase
firebase.initializeApp({
    apiKey: "AIzaSyBUMKe1u-mQDERC_IlBfFLa6lmvn77r5J8",
    authDomain: "pagina-safetoc.firebaseapp.com",
    projectId: "pagina-safetoc",
    storageBucket: "pagina-safetoc.appspot.com",
    messagingSenderId: "763740438039",
    appId: "1:763740438039:web:ae7a791435d958ba4ce652",
    measurementId: "G-VHL8YJKY0R"
});

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
var forma = document.getElementById("formulario");
forma["enviar"].addEventListener("click", guardar, false);

//inputs
function guardar() {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById("email").value;
    var celular = document.getElementById("celular").value;
    var propiedad = document.getElementById("propiedad").value;
    var ubicacion = document.getElementById("ubicacion").value;
    var presupuesto = document.getElementById("presupuesto").value;
    var no_recamaras = document.getElementById("no_recamaras").value;
    var caract = document.getElementById("caract").value;
    //var fecha = document.getElementById("fecha").value;

    if (nombre == "" || email == "" || celular == "" || propiedad == ""
        || ubicacion == "" || presupuesto == "" || no_recamaras == "" || caract == "") {
        swal('No ha llenado todos los campos requeridos');
    } else {
        db.collection("quiero_rentar").add(
            {
                nombre: nombre,
                email: email,
                celular: celular,
                propiedad: propiedad,
                ubicacion: ubicacion,
                presupuesto: presupuesto,
                no_recamaras: no_recamaras,
                //fecha:fecha,
                caract: caract
            }
        ).then(function (docRef) {
            document.getElementById('nombre').value = '';
            document.getElementById("email").value = '';
            document.getElementById("celular").value = '';
            document.getElementById("propiedad").value = '';
            document.getElementById("ubicacion").value = '';
            document.getElementById("presupuesto").value = '';
            document.getElementById("no_recamaras").value = '';
            document.getElementById("caract").value = '';
            swal('¡Excelente!', 'Se han enviado correctamente los datos', 'success');
        }).catch(function (error) {
            console.error("Error", error);
            alert(error);
        });
    }
}