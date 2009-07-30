<?php
/**
 * Main classes file for site
 *
 * Contains all the site wide functions
 *
 * @copyright  2009 Deckchair UK Ltd www.deckchair.co.uk
 * @author     Simon Pollard
 * @version    v1.0
*/

/**
 * Find the current root URL - ie http://www.sitename.co.uk
 */
function GetServerName()
{
	// if running locally
	if ($_SERVER["SERVER_NAME"]=="localhost")
	{
		return $outString .= "http://" . $_SERVER["SERVER_NAME"]."/stewartandfrank/";
	}
	// if online
	else
	{
		return $outString .= "http://" . $_SERVER["SERVER_NAME"]."/"; 
	}
}

/**
 * Display PHP errors
 */
ini_set("display_errors", 1);
error_reporting( E_ALL ^ E_NOTICE );

/**
 * Set up page header, set page name, meta tags and load in style sheet(s)
 */
function PageHeader($title,$description,$keywords,$css)
{
	echo "<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Strict//EN\" ";
	echo "\"http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd\">\n";
	echo "<html xmlns=\"http://www.w3.org/1999/xhtml\" xml:lang=\"en\" lang=\"en\">\n";
	echo "<head>\n";
	// Create page title with values sent from page
	echo "<title>";
	// if running localy edit title so its clear
	if ($_SERVER["SERVER_NAME"]=="localhost")
	{
		echo "LOCALHOST - ";
	}
	echo $title."</title>\n";
	echo "<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />\n";
	echo "<meta name='keywords' content='".$keywords."'/>\n";
	echo "<meta name='description' content='".$description."'/>\n";
	echo "<meta name='language' content='en' />\n";
	echo "<link rel='SHORTCUT ICON' href='http://www.deckchairdesign.co.uk/favicon.ico' />\n";
	/* if needed echo "<script type='text/javascript' src='js/newwindow.js'></script>\n"; */
	echo "<link href='".GetServerName()."style/main.css' rel='stylesheet' type='text/css' />\n";
	echo "<link href='".GetServerName()."style/fonts.css' rel='stylesheet' type='text/css' />\n";
	// Check to see if additional style sheet is needed
	If(!$css == "")
	{
	echo "<link href='".GetServerName()."style/".$css.".css' rel='stylesheet' type='text/css' />\n";
	}
	echo "</head>\n";
	echo "<body>\n";

	echo "<div id='main'>\n";
		echo "<div id='header'>\n";
			echo "<div id='logo'><a href='".GetServerName()."/index.php'></a></div>\n";		
		echo "</div>\n"; #header
		echo "<div id='content'>\n";
}

/**
 * Set up page footer
 */
function PageFooter()
{
		echo "</div>\n"; #content
		echo "<div id='footer'>\n";
			echo "<span id='copywrite'>\n";
				echo "&copy; Deckchair UK Ltd 2008\n";
			echo "</span>\n";
		echo "</div>\n"; #footer
	echo "</div>\n"; #main
	
	echo "</body>\n";
    echo "</html>\n";
}
?>