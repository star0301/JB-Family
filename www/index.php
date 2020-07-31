<!doctype html>
<html lang="ko">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
  <title>인스타그램 호출</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <style>
    body {
      background: #fafafa;
    }

    .playon-instagarm {
      width: 800px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    .instagram {
      width: 250px;
      margin-bottom: 30px;
    }

    .instagram-thum {
      width:250px;
      height:250px;
      background-size:cover;
    }
  </style>
</head>
<body>

<!-- 인스타 사진이 들어가는 영역-->
<div class="playon-instagarm"></div>


<script>
$(document).ready(function() {
  $.ajax({
    url: "instagram.php",
    success: function (response) {
      console.log("here is success...");
      console.log(response);
      var list = '';
      var result = JSON.parse(response);
      $.each(result, function(key, val) {
        /*
        val.username+
        val.link+
        val.thum+
        val.text+
        */
        list += '<div class="instagram">'+
        '<div class="instagram-thum" style="background:url('+val.thum+') no-repeat top center;"></div></a>'+
        '</div>';
      });
      $('.playon-instagarm').append(list);
    }
  });
});
</script>

<p>hh</p>

</body>
</html>