<?php

header('X-Frame-Options: DENY');
header('X-XSS-Protection: 1; mode=block');
header('X-Content-Type-Options: nosniff');
header('Strict-Transport-Security: max-age=63072000');
header('Content-type:application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: X-Requested-With');
header('X-Robots-Tag: noindex, nofollow', true);

$msg = [];

$url = '';
if(isset($_GET['url'])){
    $url = $_GET['url'];
}

try
{

    if (empty($url))
    {
        throw new Exception('false');
    }

    $ch = curl_init();
    curl_setopt ($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, false);
    curl_setopt($ch, CURLOPT_IPRESOLVE, CURL_IPRESOLVE_V4);
    curl_setopt($ch, CURLOPT_ENCODING, 'gzip');
    curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36');
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_VERBOSE, 0);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
    curl_setopt($ch, CURLOPT_TIMEOUT, 20);
    $data = curl_exec($ch);
    curl_close($ch);
    $html_encoded = htmlentities($data);

    $msg['success'] = true;

    if ($sdLink = getSDLink($data))
    {   
        $msg['links']['low_quality'] = $sdLink;

    } elseif ($sdLink == null)
    {
        $msg['links']['low_quality'] = 'Not Found';

    } else {

        $msg = false;
    }

    if ($hdLink = getHDLink($data))
    {
        $msg['links']['high_quality'] = $hdLink;

    } elseif ($hdLink == null)
    {
        $msg['links']['high_quality'] = 'Not Found';
    } else {

        $msg = false;
    }
    echo json_encode($msg, JSON_PRETTY_PRINT);
}

catch(Exception $e)
{
    echo $e->getMessage();
}

function getSDLink($curl_content)
{
    $regexRateLimit = '/sd_src_no_ratelimit:"([^"]+)"/';
    $regexSrc = '/sd_src:"([^"]+)"/';

    if (preg_match($regexRateLimit, $curl_content, $match))
    {
        return $match[1];
    }
    elseif (preg_match($regexSrc, $curl_content, $match))
    {
        return $match[1];
    }
    else
    {
        return false;
    }
}

function getHDLink($curl_content)
{
    $regexRateLimit = '/hd_src_no_ratelimit:"([^"]+)"/';
    $regexSrc = '/hd_src:"([^"]+)"/';

    if (preg_match($regexRateLimit, $curl_content, $match))
    {
        return $match[1];
    }
    elseif (preg_match($regexSrc, $curl_content, $match))
    {
        return $match[1];
    }
    else
    {
        return false;
    }
}