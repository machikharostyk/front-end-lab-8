var rootNode = document.getElementById("root");
var Tree = document.createElement('div');

function createTree(arr, root) {
	for (var i = 0; i < arr.length; i++) {
		var ul = document.createElement('ul');
		var li = document.createElement('li');
		var p = document.createElement('p');
		var span = document.createElement('span');
		span.innerHTML = arr[i].title;
		var icon = document.createElement('i');
		icon.className = 'material-icons';

		if (arr[i].folder) {
			icon.innerHTML = 'folder';
		} else {
			icon.innerHTML = 'insert_drive_file';
			p.className = 'file';
		}


		p.appendChild(icon);
		p.appendChild(span);
		li.appendChild(p);
		root.appendChild(li);
		p.onclick = function (event) {
			if (this.nextElementSibling.style.display === 'none') {
				this.nextElementSibling.style.display = 'block';
				this.children[0].innerHTML = 'folder_open';
			} else {
				this.nextElementSibling.style.display = 'none';
				this.children[0].innerHTML = 'folder';
			}
		}

		if (arr[i].children) {
			li.appendChild(ul);
			if (arr[i].folder) {
				icon.innerHTML = 'folder';
			} else {
				icon.innerHTML = 'insert_drive_file';
			}

			ul.style.display = 'none';
			createTree(arr[i].children, ul);
		}
		if (arr[i].folder && !arr[i].children) {
			var empty = document.createElement('li');
			empty.className = 'emptyFolder';
			empty.innerHTML = 'Folder is empty';
			empty.style.display = 'none';
			li.appendChild(empty);
			root.appendChild(ul);
		}
	}
}


createTree(structure, Tree);

rootNode.appendChild(Tree);
