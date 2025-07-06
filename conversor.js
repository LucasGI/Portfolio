
    function convertirKmAMi() {
      const km = parseFloat(document.getElementById("km").value);
      const mi = km * 0.621371;
      document.getElementById("resKmMi").textContent = isNaN(km) ? "Ingresa un valor válido" : `${km} km = ${mi.toFixed(2)} mi`;
    }

    function convertirMiAKm() {
      const mi = parseFloat(document.getElementById("mi").value);
      const km = mi / 0.621371;
      document.getElementById("resMiKm").textContent = isNaN(mi) ? "Ingresa un valor válido" : `${mi} mi = ${km.toFixed(2)} km`;
    }

    function convertirCaF() {
      const c = parseFloat(document.getElementById("c").value);
      const f = (c * 9 / 5) + 32;
      document.getElementById("resCaF").textContent = isNaN(c) ? "Ingresa un valor válido" : `${c}°C = ${f.toFixed(2)}°F`;
    }

    function convertirFaC() {
      const f = parseFloat(document.getElementById("f").value);
      const c = (f - 32) * 5 / 9;
      document.getElementById("resFaC").textContent = isNaN(f) ? "Ingresa un valor válido" : `${f}°F = ${c.toFixed(2)}°C`;
    }

    function convertirArsUsd() {
      const ars = parseFloat(document.getElementById("ars").value);
      const usd = ars / 1200;
      document.getElementById("resArsUsd").textContent = isNaN(ars) ? "Ingresa un valor válido" : `$${ars} ARS = U$D ${usd.toFixed(2)}`;
    }

    function convertirUsdArs() {
      const usd = parseFloat(document.getElementById("usd").value);
      const ars = usd * 1200;
      document.getElementById("resUsdArs").textContent = isNaN(usd) ? "Ingresa un valor válido" : `U$D ${usd} = $${ars.toFixed(2)} ARS`;
    }
 