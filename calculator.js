document.addEventListener('DOMContentLoaded', 
	function (){
		var orders = document.querySelectorAll('#buyer-ordertable > tbody.order-item-wraper');
		for (var k=0; k<orders.length; k++) {
			var order = orders[k];
			var buttonConfirm = order.querySelector('button.button-confirmOrderReceived');
			var buttonCancel = order.querySelector('button.button-cancelOrder');
			if (buttonConfirm || buttonCancel) {
				var e = order.querySelector("p.second-row > span.info-body");
		        e.style.color = "red";
		        var datestring = e.innerHTML.substr(6, e.innerHTML.length-6);
		        //alert(datestring);
		        var secondDate = secondDate = Date.parse(datestring, "MMM. dd yyyy");
		        var oneDay = 24*60*60*1000;
		        var diffDays = Math.round(Math.abs((Date.now() - secondDate)/(oneDay)));
		        e.innerHTML = e.innerHTML + ' (' + diffDays.toString() + ')'
	    	}
		}
	}, false); 