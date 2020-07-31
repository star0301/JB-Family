<?php
$post = array (
  'fields' => 'id,media_type,media_url,permalink,thumbnail_url,username,caption',
  'access_token' => 'IGQVJYOXZAKWHc5OFdybEFNNVIwMmk0OFdFWl9XTmhOUVBtSmFUaThYdWNsN3NwZA1NyQVRLQm43RXdnUXRtVFAyLTBjaTQ5d2tvdXQ2OWlza3pTTEI1emJnaDFrRmRiUzJlQmZAWTWJVY2JvNXNVMFRuM2tYLXhCc0J3UzdZA',
);
$url = "https://graph.instagram.com/17841407321653863/media?".http_build_query($post);

try {
  $curl_connection = curl_init($url);
  curl_setopt($curl_connection, CURLOPT_CONNECTTIMEOUT, 30);
  curl_setopt($curl_connection, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($curl_connection, CURLOPT_SSL_VERIFYPEER, false);
  $result = curl_exec($curl_connection);
  curl_close($curl_connection);
} catch(Exception $e) {
  return $e->getMessage();
}


$data = json_decode($result, true);
$image_array= array();


foreach ($data['data'] as $key => $row) {
  $code = $row['id'];
  $username = $row['username'];
  $type = $row['media_type'];
  $link = $row['permalink'];
  $thum = ($type === 'VIDEO') ? $row['thumbnail_url'] : $row['media_url'];
  $text = $row['caption'];
  array_push($image_array, array('username'=>$username, 'link'=>$link, 'thum'=>$thum, 'text'=>$text));
}

echo json_encode($image_array);
?>