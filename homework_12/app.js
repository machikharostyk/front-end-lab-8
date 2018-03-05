var root = document.getElementById('root');
var header1_lvl = document.createElement('h1');
header1_lvl.innerHTML = 'Most popular tanks';
root.appendChild(header1_lvl);
var main = document.createElement('main');
main.className = 'main_content';
root.appendChild(main);

function createMenu(arr) {
	for (var i = 0; i < arr.length; i++) {

		/// creating div for tanks
		var div = document.createElement('div');
		main.appendChild(div);
		div.className = 'tank_div';

		var tank_link = document.createElement('a');
		tank_link.href = '#' + tanks[i].model;
		div.appendChild(tank_link);

		/// add images for tanks
		var tank_img = document.createElement('img');
		tank_img.className = 'tank_img';
		tank_link.appendChild(tank_img);
		tank_img.src = arr[i].preview;


		/// info of tanks under images
		var tank_info_div = document.createElement('div');
		tank_info_div.className = 'tank_info_div';
		tank_link.appendChild(tank_info_div);


		var country_img = document.createElement('img');
		country_img.className = 'country_img';
		tank_info_div.appendChild(country_img);
		country_img.src = arr[i].country_image;

		var level_tank = document.createElement('p');
		tank_info_div.appendChild(level_tank);
		level_tank.innerHTML = arr[i].level;

		var model_tank = document.createElement('p');
		tank_info_div.appendChild(model_tank);
		model_tank.innerHTML = arr[i].model;


	
	}
}

function detailsTank(arr) {
	header1_lvl.innerHTML='';
	
	
	var info_text_tank = document.createElement('div');
	info_text_tank.className='info_text_tank';
	main.appendChild(info_text_tank);
	var detail_country = document.createElement('img');
	info_text_tank.appendChild(detail_country);
	detail_country.src=tanks[i].country_image;
	
	var detail_model = document.createElement('p');
	info_text_tank.appendChild(detail_model);
	detail_model.innerHTML = tanks[i].model;
	
	
	var detail_level = document.createElement('p');
	info_text_tank.appendChild(detail_level);
	detail_level.innerHTML='(level ' + tanks[i].level + ')';
	
	var detail_tank_div = document.createElement('div');
	main.appendChild(detail_tank_div);
	detail_tank_div.className='detail_tank_div';
	
	
	var preview_text = document.createElement('h2');
	detail_tank_div.appendChild(preview_text);
	preview_text.innerHTML = 'Preview';
	
	
	
	var detail_tank_img = document.createElement('img');
	detail_tank_div.appendChild(detail_tank_img);
	detail_tank_img.src = tanks[i].preview;
	
	var back_to_list_view = document.createElement('a');
	detail_tank_div.appendChild(back_to_list_view);
	back_to_list_view.innerHTML = 'Back to list view';
	back_to_list_view.href = 'index.html';
	back_to_list_view.className = 'back_to_list_view';
	
	
	/// creating table
	var table = document.createElement('table');
	main.appendChild(table);
	var caption = document.createElement('caption');
	table.appendChild(caption);
	caption.innerHTML='Characteristic';
	
	for(var prop in arr.details){
		var tr = document.createElement('tr');
		table.appendChild(tr);
		var td = document.createElement('td');
		tr.appendChild(td);
		var td2 = document.createElement('td');
		tr.appendChild(td2);
		td.innerHTML = prop.replace(/_/g, ' ');
		td2.innerHTML = tanks[i].details[prop];
		
	}
	

}

if (location.hash === '') {
	createMenu(tanks);
}
var hash_detail = location.hash.slice(1);
for (var i = 0; i < tanks.length; i++) {
	if (hash_detail === tanks[i].model) {
		detailsTank(tanks[i]);
	}
}
	




