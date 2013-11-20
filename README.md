jQuery-Ajax-File-Upload
=======================

Plugin to add support for file uploads using jQuery $.ajax()

##What is this?
All this plugin does is:

1. Grabs the files from file fields on change events and adds the data to an array.
2. On form submit it does a pre-ajax call to the back-end with the file post data.
3. After uploading, information about those files is passed back and appended to a normal $.ajax() call.

## Usage
It's easy enough to use, just include it on your page and attach it to your form with:

	$('#myform').fileUpload();

You can pass the following parameters to it:

	$('#myform').fileUpload({
		uploadData    : { 'extra_data' : 'blah' }, // Append POST data to the upload
		submitData    : { 'moar_extra_data' : 'blah' }, // Append POST data to the form submit
		uploadOptions : { dataType : 'json' }, // Customise the parameters passed to the $.ajax() call on uploads. You can use any of the normal $.ajax() params
		submitOptions : { dataType : 'json' }, // Customise the parameters passed to the $.ajax() call on the form submit. You can use any of the normal $.ajax() params
		before	      : function(){}, // Run stuff before the upload happens
		beforeSubmit  : function(uploadData){ console.log(uploadData); return true; }, // access the data returned by the upload return false to stop the submit ajax call
		success       : function(data, textStatus, jqXHR){ console.log(data); }, // Callback for the submit success ajax call
		error 	      : function(jqXHR, textStatus, errorThrown){ console.log(jqXHR); }, // Callback if an error happens with your upload call or the submit call
		complete      : function(jqXHR, textStatus){ console.log(jqXHR); } // Callback on completion
	});

