<?php

/**
 * @Author: web1804gz
 * @Date:   2018-07-11 17:27:12
 * @Last Modified by:   web1804gz
 * @Last Modified time: 2018-07-11 18:32:38
 */
$url1 = "https://moment.douban.com/api/auth_authors/all?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6";
$url2 = "https://moment.douban.com/api/auth_authors/rec?alt=json&apikey=0bcf52793711959c236df76ba534c0d4&app_version=1.7.4&count=20&douban_udid=d623045db9fcb0d5243174c1bf1a675f887047c0&start=0&udid=9a34d8b038ff38971050199b0c5ee9c60c6d1ca3&version=6";
$a = file_get_contents($url1);
$b = file_get_contents($url2);
echo json_encode(array("0"=>$a,"1"=>$b));