/**
 * Created by Polomkin Anton on 04.07.2016.
 */

var form = document.getElementById('form');
form.style.display = 'none';
document.getElementById('showForm').onclick = function() {
	form.style.display = 'block';
};
document.getElementById('closeForm').onclick = function() {
	form.style.display = 'none';
};