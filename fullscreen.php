<?php
	if(isset($_GET['mode'])) { $mode = $_GET['mode']; } else { $mode = 'outside'; }
	if(isset($_GET['valign'])) { $valign = $_GET['valign']; } else { $valign = 'middle'; }
	if(isset($_GET['halign'])) { $halign = $_GET['halign']; } else { $halign = 'center'; }
	if(isset($_GET['force'])) { $force = $_GET['force']; } else { $force = 'true'; }
?>
<!doctype html>
<html lang="en" class="demo2">
<head>
	<meta charset="UTF-8">
	<title>ImageFit beta</title>
	<link rel="stylesheet" type="text/css" href="css/main.css" />
	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	<script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/jquery.cycle2/20130801/jquery.cycle2.min.js"></script>
	<script type="text/javascript" src="js/jquery.imagefit.js"></script>
	<script type="text/javascript">
		function fitting() {
			$('div.cycle-slideshow').imagefit({
				mode : '<?=$mode;?>',
				valign : '<?=$valign;?>',
				halign : '<?=$halign;?>',
				force: <?=$force;?>
			});
		}

		$(window).load(function(){
			fitting();

			$(window).resize(function(){  fitting();  });

		});

		$(function() {

			$('#mode').find('option[value="<?=$mode;?>"]').attr("selected", "selected");
			$('#force').find('option[value="<?=$force;?>"]').attr("selected", "selected");
			$('#halign').find('option[value="<?=$halign;?>"]').attr("selected", "selected");
			$('#valign').find('option[value="<?=$valign;?>"]').attr("selected", "selected");

			$('select').change(function() {
				var mode = $('#mode').val();
				var force = $('#force').val();
				var halign = $('#halign').val();
				var valign = $('#valign').val();
				document.location.href = 'fullscreen.php?mode='+mode+'&force='+force+'&halign='+halign+'&valign='+valign;
			});
		});
	</script>
</head>
<body class="demo2">

	<div id="opts">
		<span>Jquery Imagefit + Cycle 2</span>
		fullscreen &amp; responsive<br><br>

		<fieldset>	
			<label>Mode:</label><br>
			<select id="mode" class="wide" value="outside">
				<option value="outside">outside</option>
				<option value="inside">inside</option>
			</select>
		</fieldset>

		<fieldset>	
			<label>Force size:</label><br>
			<select id="force" class="wide" value="true">
				<option value="true">true</option>
				<option value="false">false</option>
			</select>
		</fieldset>
		
		<fieldset>
			<label>Hor. align:</label><br>
			<select id="halign" class="wide">
				<option value="center">center</option>
				<option value="left">left</option>
				<option value="right">right</option>
			</select>
		</fieldset>
		
		<fieldset>
			<label>Vert. align:</label><br>
			<select id="valign" class="wide">
				<option value="middle">middle</option>
				<option value="top">top</option>
				<option value="bottom">bottom</option>
			</select>
		</fieldset>

	</div>

	<div class="cycle-slideshow" data-cycle-slide-css='{ "position": "absolute" }'>
		<img src="images/01.jpg" alt="">
		<img src="images/02.jpg" alt="">
		<img src="images/03.jpg" alt="">
		<img src="images/04.jpg" alt="">
		<img src="images/05.jpg" alt="">
		<img src="images/06.jpg" alt="">
	</div>
	
</body>
</html>