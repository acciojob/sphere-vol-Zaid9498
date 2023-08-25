function volume_sphere() {
    //Write your code here
  const radiusInput = document.getElementById('radius');
  const volumeInput = document.getElementById('volume');

  const radius = parseFloat(radiusInput.value);
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

   volumeInput.value = volume.toFixed(6);
  
  return false; 
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
