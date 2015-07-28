function make_phase_step(arr_len,step_loc){
	// define phase array
	var ph_arr=[];
	for (var i=0;i<arr_len;i++){
		if (i<step_loc) {
			ph_arr[i]=0;
		}else{
			ph_arr[i]=3.14159;
		}
	}
	return ph_arr;
}