
	function postBlog()
	{
		var input_title = document.getElementById('input_title').value;
		var input_fname = document.getElementById('input_fname').value;
		var input_mname = document.getElementById('input_mname').value;
		var input_lname = document.getElementById('input_lname').value;
		var input_content = document.getElementById('input_content').value;

		//console.log(input_content);
		document.getElementById('displayTitle').innerHTML = "Title: " + input_title;
		var date_today = new Date();
		document.getElementById('displayName').innerHTML = "Name: " + input_fname + " " + input_mname + " " + input_lname;
		document.getElementById('displayContent').innerHTML = "Content:" + input_content;
	}
	