<?php
/**
 * Index page for site
 *
 * @copyright  2009 Deckchair UK Ltd www.deckchair.co.uk
 * @author     Simon Pollard
 * @version    v1.0
*/

// included all classes needed
include("classes/main.php");
	
// set up meta description
$description = "";
// set up meta keywords
$keywords = "";

echo "<p>This is from the testing branch</p>\n";
echo "<p>and so is this</p>\n";
	
// load page header - sends to classes/main.php (title, meta desc, meta keyword, css (if needed))
PageHeader("Welcome",$description,$keywords,"indexpage");

// load page footer - sends to classes/main.php
PageFooter();
?>