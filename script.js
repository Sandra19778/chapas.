let selectProduct ="";

function customize(productType) {
    //Guardar el producto seleccionado
    selectProduct = productType;
}
//Actualizar el nombre del producto seleccionado en el HTML
let productName ="";
if (productType ==="badge") {
    productName ="Insignia Personalizada";
} else if (productType ==="Keychain") ¨{
    productName ="Llavero Personalizado";
} else if (productType ==="magnet") {
    productName = "Imán Personalizado";
}

document.getElementById('product-name').innerText = productName;

//Mostrarla sección de personalización

document.getElementById('customizer').scrollIntoView({ behavior:'smooth '});

function applycustomization() {
    //Obtener el texto personalizadony el color
    const customText =
    document.getElementById('custom-text').value;
    const color = document.getElementById('color-picker').value;

    //Aplicar la personalización en la vista previa
    const previewText = document.getElementById('preview-text');
    previewText.innerText = customText ? customText :"Texto Personalizado";
    previewText.style.color = color ;
}
