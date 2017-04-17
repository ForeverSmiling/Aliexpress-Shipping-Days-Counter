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
		//style="position: fixed; z-index: 2147483647; top: 10px; right: 10px; border: 0px; padding: 0px; margin: 0px;"
		var paginator = document.querySelector('div.ui-pagination-body');
		if (paginator)
		{
			paginator.style.position = "fixed";
			paginator.style.zindex = 2147483647;
			paginator.style.top = "10px";
			paginator.style.left = "10px";
		}
	}, false); 