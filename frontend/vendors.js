function obtenerDatos() {
    // Obteniendo los valores de los campos
    let name = document.getElementById("vendors_name").value;
    let address = document.getElementById("vendors_address").value;
    let phone = document.getElementById("vendors_phone").value;
    let email = document.getElementById("vendors_email").value;
    let category = document.getElementById("vendors_category").value;
    let vendor = {name, address, phone, email, category};
    return tarea;
  }
  
  function newVendor() {
    let vendor = obtenerDatos();
    let token = sessionStorage.getItem("token");
    let options = {};
    options.headers = { token };
    axios
      .post("http://localhost:3000/vendors", vendor, options)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }