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
    var telefono = document.getElementById("telefono").value;
    var direccion = document.getElementById("direccion").value;
    var propiedad = document.getElementById("propiedad").value;

    if (nombre == "" || email == "" || telefono == "" || direccion == ""
        || propiedad == "") {
        swal('No ha llenado todos los campos requeridos');
    } else {
        db.collection("vender_inmueble").add(
            {
                nombre: nombre,
                email: email,
                telefono: telefono,
                direccion: direccion,
                propiedad: propiedad
            }
        ).then(function (docRef) {
            document.getElementById('nombre').value = '';
            document.getElementById("email").value = '';
            document.getElementById("telefono").value = '';
            document.getElementById("direccion").value = '';
            document.getElementById("propiedad").value = '';
            swal('¡Excelente!', 'Se han enviado correctamente los datos', 'success');
        }).catch(function (error) {
            console.error("Error", error);
            alert(error);
        });
    }
}