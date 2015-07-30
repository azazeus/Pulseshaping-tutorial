function get_freq_unif(wavel){
	//declare array for non-uniformly spaced frequency 
	var freq_non_unif=[];
	
	// convert wavelength to non-uniformly spaced frequency
	for (var i=0;i<wavel.length;i++){
		freq_non_unif[i]=3e6/wavel[i];
	}
	
	//find lowest multiple of f_step > min(freq_non_unif)
	freq_low=f_step*Math.ceil((Math.min.apply(null, freq_non_unif))/f_step);
	console.log("nul: ",(Math.min.apply(null, freq_non_unif))," < ul: ",freq_low)
	//find highest multiple of f_step < max(freq_non_unif)
	freq_high=f_step*Math.floor((Math.max.apply(null, freq_non_unif))/f_step);
	console.log("nuh: ",(Math.max.apply(null, freq_non_unif))," > uh: ",freq_high)
	
	
	var freq_unif=[];
	for (var i=0;i<(freq_high-freq_low)/f_step;i++){
		freq_unif[i]=freq_low+i*f_step;
	}
	
	return [freq_unif,freq_non_unif];
}