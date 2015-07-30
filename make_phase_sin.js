function make_phase_sin(freq_unif,cent_loc,rep_len,amp){
	// number of pixels
	var n_pix=640;
	
	// convert to pixel space
	var wl_unit = (1050-650)/n_pix;
	var cent_pix=Math.floor((cent_loc-650)/wl_unit);
	var rep_pix=rep_len/wl_unit;
	// define phase array
	var ph_vs_pix=[];
	var f_pix_no=[];
	var ph_vs_f=[];
	for (var i=0;i<n_pix;i++){
		ph_vs_pix[i]=0.5*amp*Math.sin(2*Math.PI*(i-cent_pix)/rep_pix);
	}
	for (var i=0;i<freq_unif.length;i++){
		ph_vs_f[i]=ph_vs_pix[Math.floor((c/freq_unif[i]-650)/wl_unit)];
	}
	return ph_vs_f;
}

function make_phase_rfr(freq_unif,cent_loc,flt_wdth,amp){
	// number of pixels
	var n_pix=640;
	
	// convert to pixel space
	var wl_unit = (1050-650)/n_pix;
	var cent_pix=Math.floor((cent_loc-650)/wl_unit);
	var rep_pix=flt_wdth/wl_unit;
	// define phase array
	var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691];
	var ph_vs_pix_temp=[];
	var ph_vs_pix_temp2=[];
	var f_pix_no=[];
	var ph_vs_f=[];
	var tog_num=0;
	
	for (var i=0;i<n_pix;i++){
		if (i<rep_pix/2){
			ph_vs_pix_temp[i]=amp;
		}else{
			if (Math.floor(i-rep_pix/2)==primes[0]){
				primes.shift();
				tog_num = toggle(tog_num);
			}
			ph_vs_pix_temp[i]=tog_num*amp;
		}	
	}
	var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691];
	var tog_num=0;
	for (var i=0;i<n_pix;i++){
		if (i<rep_pix/2){
			ph_vs_pix_temp2[i]=amp;
		}else{
			if (Math.floor(i-rep_pix/2)==primes[0]){
				primes.shift();
				tog_num = toggle(tog_num);
			}
			ph_vs_pix_temp2[i]=tog_num*amp;
		}	
	}
	ph_vs_pix_temp2.reverse();
	ph_vs_pix=((ph_vs_pix_temp2).concat(ph_vs_pix_temp)).slice(n_pix-cent_pix,2*n_pix-cent_pix);
	for (var i=0;i<freq_unif.length;i++){
		ph_vs_f[i]=ph_vs_pix[Math.floor((c/freq_unif[i]-650)/wl_unit)];
	}
	return ph_vs_f;
}
function toggle(tog_num){
		return Math.abs(tog_num-1);
	}