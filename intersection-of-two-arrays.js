var intersect = function(nums1, nums2) {
	let hash1 = {};
	let hash2 = {};

	// hash 1
	for(let i=0; i<nums1.length; i++) {
		let item = nums1[i];
		if(hash1.hasOwnProperty(item)) {
			hash1[item]++;
		} else {
			hash1[item]=1;
		}
	}   
 
	for(let i=0; i<nums2.length; i++) {
        let item = nums2[i];
        if(hash2.hasOwnProperty(item)) {
            hash2[item]++;
        } else {
            hash2[item]=1;
        }
    }

	// test
	console.log('--');
	console.log(hash1);
	console.log(hash2);

	let buf = [];
	for(let prop1 in hash1) {
		if(hash1.hasOwnProperty(prop1)) {
			
			if(hash2.hasOwnProperty(prop1)) {
				let propNum1 = parseInt(hash1[prop1]);
				let propNum2 = parseInt(hash2[prop1]);

				if(propNum1 <= propNum2) {
					for(let i=0; i<propNum1; i++) {
						buf.push(parseInt(prop1));
					} // end
				} else {
					for(let i=0; i<propNum2; i++) {
                        buf.push(parseInt(prop1));
                    } // end
				}
			} else {
				// not in hash2
			}	

		} else {

		}
	}	

	return buf;
};

let num1 = [1,2,2,1]
let num2 = [2];
let out = intersect(num1, num2);
console.log(out);
