// You can use positive look-behind to ensure that your desired match follows a given pattern.
// This feature can be especially useful when scanning system and application log files for specific types of messages.


// Sample log file data from Apache web server logs
// Credit: http://www.almhuette-raith.at/apache-log/access.log

var logData = `
178.204.119.130 - - [12/Dec/2015:18:40:58 +0100] "GET /administrator/ HTTP/1.1" 200 4263 "-" "Mozilla/5.0 (Windows NT 6.0; rv:34.0) Gecko/20100101 Firefox/34.0" "-"
178.204.119.130 - - [12/Dec/2015:18:40:58 +0100] "POST /administrator/index.php HTTP/1.1" 200 4494 "http://almhuette-raith.at/administrator/" "Mozilla/5.0 (Windows NT 6.0; rv:34.0) Gecko/20100101 Firefox/34.0" "-"
178.35.0.41 - - [12/Dec/2015:18:44:48 +0100] "GET /administrator/ HTTP/1.1" 200 4263 "-" "Mozilla/5.0 (Windows NT 6.0; rv:34.0) Gecko/20100101 Firefox/34.0" "-"
178.35.0.41 - - [12/Dec/2015:18:44:48 +0100] "POST /administrator/index.php HTTP/1.1" 200 4494 "http://almhuette-raith.at/administrator/" "Mozilla/5.0 (Windows NT 6.0; rv:34.0) Gecko/20100101 Firefox/34.0" "-"
92.252.165.97 - - [12/Dec/2015:18:44:53 +0100] "GET /administrator/ HTTP/1.1" 200 4263 "-" "Mozilla/5.0 (Windows NT 6.0; rv:34.0) Gecko/20100101 Firefox/34.0" "-"
92.252.165.97 - - [12/Dec/2015:18:44:53 +0100] "POST /administrator/index.php HTTP/1.1" 200 4494 "http://almhuette-raith.at/administrator/" "Mozilla/5.0 (Windows NT 6.0; rv:34.0) Gecko/20100101 Firefox/34.0" "-"
31.202.233.212 - - [12/Dec/2015:18:46:21 +0100] "GET /administrator/ HTTP/1.1" 200 4263 "-" "Mozilla/5.0 (Windows NT 6.0; rv:34.0) Gecko/20100101 Firefox/34.0" "-"
31.202.233.212 - - [12/Dec/2015:18:46:21 +0100] "POST /administrator/index.php HTTP/1.1" 200 4494 "http://almhuette-raith.at/administrator/" "Mozilla/5.0 (Windows NT 6.0; rv:34.0) Gecko/20100101 Firefox/34.0" "-"
83.219.151.232 - - [12/Dec/2015:18:46:25 +0100] "GET /administrator/ HTTP/1.1" 200 4263 "-" "Mozilla/5.0 (Windows NT 6.0; rv:34.0) Gecko/20100101 Firefox/34.0" "-"
83.219.151.232 - - [12/Dec/2015:18:46:25 +0100] "POST /administrator/index.php HTTP/1.1" 200 4494 "http://almhuette-raith.at/administrator/" "Mozilla/5.0 (Windows NT 6.0; rv:34.0) Gecko/20100101 Firefox/34.0" "-"
46.72.184.174 - - [12/Dec/2015:18:51:08 +0100] "GET /administrator/ HTTP/1.1" 200 4263 "-" "Mozilla/5.0 (Windows NT 6.0; rv:34.0) Gecko/20100101 Firefox/34.0" "-"
46.72.184.174 - - [12/Dec/2015:18:51:08 +0100] "POST /administrator/index.php HTTP/1.1" 200 4494 "http://almhuette-raith.at/administrator/" "Mozilla/5.0 (Windows NT 6.0; rv:34.0) Gecko/20100101 Firefox/34.0" "-"
176.116.138.82 - - [12/Dec/2015:18:51:25 +0100] "GET /administrator/ HTTP/1.1" 200 4263 "-" "Mozilla/5.0 (Windows NT 6.0; rv:34.0) Gecko/20100101 Firefox/34.0" "-"
176.116.138.82 - - [12/Dec/2015:18:51:25 +0100] "POST /administrator/index.php HTTP/1.1" 200 4494 "http://almhuette-raith.at/administrator/" "Mozilla/5.0 (Windows NT 6.0; rv:34.0) Gecko/20100101 Firefox/34.0" "-"
178.47.189.163 - - [12/Dec/2015:18:53:10 +0100] "GET /administrator/ HTTP/1.1" 200 4263 "-" "Mozilla/5.0 (Windows NT 6.0; rv:34.0) Gecko/20100101 Firefox/34.0" "-"
178.47.189.163 - - [12/Dec/2015:18:53:11 +0100] "POST /administrator/index.php HTTP/1.1" 200 4494 "http://almhuette-raith.at/administrator/" "Mozilla/5.0 (Windows NT 6.0; rv:34.0) Gecko/20100101 Firefox/34.0" "-"
178.44.144.231 - - [12/Dec/2015:18:57:24 +0100] "GET /administrator/ HTTP/1.1" 200 4263 "-" "Mozilla/5.0 (Windows NT 6.0; rv:34.0) Gecko/20100101 Firefox/34.0" "-"
178.44.144.231 - - [12/Dec/2015:18:57:24 +0100] "POST /administrator/index.php HTTP/1.1" 200 4494 "http://almhuette-raith.at/administrator/" "Mozilla/5.0 (Windows NT 6.0; rv:34.0) Gecko/20100101 Firefox/34.0" "-"
213.24.134.32 - - [12/Dec/2015:18:58:50 +0100] "GET /administrator/ HTTP/1.1" 200 4263 "-" "Mozilla/5.0 (Windows NT 6.0; rv:34.0) Gecko/20100101 Firefox/34.0" "-"
213.24.134.32 - - [12/Dec/2015:18:58:51 +0100] "POST /administrator/index.php HTTP/1.1" 200 4494 "http://almhuette-raith.at/administrator/" "Mozilla/5.0 (Windows NT 6.0; rv:34.0) Gecko/20100101 Firefox/34.0" "-"
191.182.199.16 - - [12/Dec/2015:19:02:35 +0100] "GET / HTTP/1.1" 200 10439 "http://top1-seo-service.com/try.php?u=http://almhuette-raith.at" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36" "-"
191.182.199.16 - - [12/Dec/2015:19:02:35 +0100] "GET /modules/mod_bowslideshow/tmpl/css/bowslideshow.css HTTP/1.1" 200 1725 "http://almhuette-raith.at/" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36" "-"
191.182.199.16 - - [12/Dec/2015:19:02:36 +0100] "GET /templates/_system/css/general.css HTTP/1.1" 404 239 "http://almhuette-raith.at/" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36" "-"
191.182.199.16 - - [12/Dec/2015:19:02:36 +0100] "GET /media/system/js/caption.js HTTP/1.1" 200 1963 "http://almhuette-raith.at/" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36" "-"
191.182.199.16 - - [12/Dec/2015:19:02:36 +0100] "GET /templates/jp_hotel/css/template.css HTTP/1.1" 200 10004 "http://almhuette-raith.at/" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36" "-"
191.182.199.16 - - [12/Dec/2015:19:02:36 +0100] "GET /templates/jp_hotel/css/layout.css HTTP/1.1" 200 1801 "http://almhuette-raith.at/" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36" "-"
191.182.199.16 - - [12/Dec/2015:19:02:36 +0100] "GET /templates/jp_hotel/css/menu.css HTTP/1.1" 200 1457 "http://almhuette-raith.at/" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36" "-"
191.182.199.16 - - [12/Dec/2015:19:02:36 +0100] "GET /templates/jp_hotel/css/suckerfish.css HTTP/1.1" 200 3465 "http://almhuette-raith.at/" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36" "-"
191.182.199.16 - - [12/Dec/2015:19:02:36 +0100] "GET /templates/jp_hotel/js/moomenu.js HTTP/1.1" 200 4890 "http://almhuette-raith.at/" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36" "-"
191.182.199.16 - - [12/Dec/2015:19:02:36 +0100] "GET /modules/mod_bowslideshow/tmpl/js/sliderman.1.3.0.js HTTP/1.1" 200 33472 "http://almhuette-raith.at/" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36" "-"
191.182.199.16 - - [12/Dec/2015:19:02:36 +0100] "GET /media/system/js/mootools.js HTTP/1.1" 200 74434 "http://almhuette-raith.at/" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36" "-"
191.182.199.16 - - [12/Dec/2015:19:02:38 +0100] "GET /images/stories/slideshow/almhuette_raith_01.jpg HTTP/1.1" 200 88161 "http://almhuette-raith.at/" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36" "-"
191.182.199.16 - - [12/Dec/2015:19:02:38 +0100] "GET /images/stories/slideshow/almhuette_raith_02.jpg HTTP/1.1" 200 62918 "http://almhuette-raith.at/" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36" "-"
191.182.199.16 - - [12/Dec/2015:19:02:38 +0100] "GET /images/stories/slideshow/almhuette_raith_03.jpg HTTP/1.1" 200 87782 "http://almhuette-raith.at/" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36" "-"
191.182.199.16 - - [12/Dec/2015:19:02:38 +0100] "GET /images/stories/slideshow/almhuette_raith_06.jpg HTTP/1.1" 200 68977 "http://almhuette-raith.at/" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36" "-"
191.182.199.16 - - [12/Dec/2015:19:02:39 +0100] "GET /images/stories/slideshow/almhuette_raith_04.jpg HTTP/1.1" 200 80637 "http://almhuette-raith.at/" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36" "-"
191.182.199.16 - - [12/Dec/2015:19:02:39 +0100] "GET /images/stories/slideshow/almhuette_raith_05.jpg HTTP/1.1" 200 77796 "http://almhuette-raith.at/" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36" "-"
191.182.199.16 - - [12/Dec/2015:19:02:39 +0100] "GET /templates/jp_hotel/images/logo.jpg HTTP/1.1" 200 369 "http://almhuette-raith.at/" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36" "-"
191.182.199.16 - - [12/Dec/2015:19:02:39 +0100] "GET /images/stories/slideshow/almhuette_raith_07.jpg HTTP/1.1" 200 94861 "http://almhuette-raith.at/" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36" "-"
191.182.199.16 - - [12/Dec/2015:19:02:39 +0100] "GET /images/stories/raith/almhuette_raith.jpg HTTP/1.1" 200 43300 "http://almhuette-raith.at/" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36" "-"
191.182.199.16 - - [12/Dec/2015:19:02:39 +0100] "GET /images/stories/raith/wohnraum.jpg HTTP/1.1" 200 43586 "http://almhuette-raith.at/" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36" "-"
191.182.199.16 - - [12/Dec/2015:19:02:39 +0100] "GET /images/stories/raith/grillplatz.jpg HTTP/1.1" 200 55303 "http://almhuette-raith.at/" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.143 Safari/537.36" "-"
`

// Objective: Let's find the "minute" from the log timestamp, for each HTTP request coming from an IPv4 address starting with 17x.x.x.x
// In this example, we'll use both positive look-behind to validate the IP address, as well as positive look-ahead to validate that the "minute" field
// is followed by the "second" field.
var regex = /(?<=^17.*?)(\d{2})(?=:\d{2}\s)/gm;

console.log(logData.match(regex));