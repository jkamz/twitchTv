// user_id = s8u8udgtg6zpgumrly26wtfzu66sr2

$(function(){

	var streams = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "hgagy"]


	$.getJSON ("https://api.twitch.tv/kraken/streams/freecodecamp?client_id=s8u8udgtg6zpgumrly26wtfzu66sr2", function (data){

		if (data.stream === null) {

			$("#fccstatus").html(" Offline")

		} else{

			$("#fccstatus").html(" <strong>ONLINE</strong>")
		}


	})

	for (i=0; i<streams.length; i++) {

		$.ajax ({

			type: 'GET',
			url: 'https://api.twitch.tv/kraken/channels/' + streams[i] + '?client_id=s8u8udgtg6zpgumrly26wtfzu66sr2',
			success: function(data1) {

				console.log(data1)
				
				var name = data1.name;
				var link = data1.url;
				var logo = data1.logo;

				//console.log(link)

				$.getJSON ("https://api.twitch.tv/kraken/streams/" + name + "?client_id=s8u8udgtg6zpgumrly26wtfzu66sr2", function (data2){

					console.log(data2)

					if (data2.stream === null) {

						$("#user").append("<a href = "+link+" target='blank'>" + name + "</a><br/>")
						//$("#user").append(name + "<br/>")
						$("#status").append("Offline <br/>")
						$("#game").append("N/A <br/>")

					} else{

						var game = data2.stream.game;
						console.log (game)

						//$("#user").append(name + "<br/>")
						$("#user").append("<a href = "+link+" target='blank'>" + name + "</a><br/>")
						$("#status").append("<span style='color: red'><strong>ONLINE</strong></span> <br/>")
						$("#game").append(game + "<br/>")

			 
		} 


	})



				//console.log(name);
			},

			error: function() {

						$("#user").append(streams[i] + "<br/>")
						$("#status").append("Inexistent <br/>")
						$("#game").append("N/A <br/>")

			},


		})

		


	}


})


