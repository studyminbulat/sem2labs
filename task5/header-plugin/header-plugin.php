<?php
/*
	Plugin Name: Bulat Minnemullin header add today's date
*/
add_action('wp_footer', function($content) {
  echo $content . ' Buuuuuuulat time: '. date(DATE_ATOM, mktime(0, 0, 0, 7, 1, 2000));;
});
?>
