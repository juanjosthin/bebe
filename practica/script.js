document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btnEntrar');
    const inicio = document.getElementById('inicio');
    const contenido = document.getElementById('contenido');

    btn.addEventListener('click', () => {
        inicio.style.display = 'none';
        contenido.style.display = 'block';
    });
});