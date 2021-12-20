<?php

  // クロスオリジンを許可する
  header( "Access-Control-Allow-Origin:*" );
  // ヘッダーにコンテンツの種類を設定する
  header( "Content-Type:application/json" );

$products = [
	[
		"name" => "須田優斗",
		"live" => [
			[
				"title" => "須田優斗1stワンマンツアー 〜シャルル〜",
				"date" => "",
				"place" => "大阪府",
				"img" => "",
			],
			[
				"title" => "須田優斗",
				"date" => "",
				"place" => "",
				"img" => "",
			],
			[
				"title" => "須田優斗",
				"date" => "",
				"place" => "",
				"img" => "",
			],
		],
	],
	[
		"name" => "東江楓音",
		"live" => [
			[
				"title" => "",
				"date" => "",
				"place" => "",
				"img" => "",
			],
			[
				"title" => "",
				"date" => "",
				"place" => "",
				"img" => "",
			],
			[
				"title" => "",
				"date" => "",
				"place" => "",
				"img" => "",
			],
		],
	],
];

print json_encode($products);