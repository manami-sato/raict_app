<?php

  // クロスオリジンを許可する
  header( "Access-Control-Allow-Origin:*" );
  // ヘッダーにコンテンツの種類を設定する
  header( "Content-Type:application/json" );

$products = [
	"artist" => [
		[
			"artistId" => "1",
			"name" => "ryuzie",
			"img" => "search_artist_1.png",
		],
		[
			"artistId" => "2",
			"name" => "たなかあきお",
			"img" => "search_artist_3.png",
		],
		[
			"artistId" => "3",
			"name" => "坂倉正樹",
			"img" => "search_artist_4.jpg",
		],
		[
			"artistId" => "4",
			"name" => "御三家",
			"img" => "search_artist_2.png",
		],
	],
	"event" => [
		[
			"eventId" => "1",
			"artistId" => "1",
			"artistName" => "ryuzie",
			"ttl" => "Ryuzie 1stワンマンツアー 〜俺のこと馬鹿にしとるやろ〜",
			"date" => [
				"from" => [
					"year" => "2021",
					"month" => "12",
					"day" => "31",
				],
				"to" => [
					"year" => "2021",
					"month" => "12",
					"day" => "31",
				],
			],
			"place" => "大阪府",
			"img" => "search_artist_1.png",
			"start" => "19:00",
			"preStart" => "18:00",
		],
		[
			"eventId" => "2",
			"artistId" => "4",
			"artistName" => "御三家",
			"ttl" => "御三家 2st合同ライブ Supported by momo",
			"date" => [
				"from" => [
					"year" => "2021",
					"month" => "12",
					"day" => "31",
				],
				"to" => [
					"year" => "2021",
					"month" => "12",
					"day" => "31",
				],
			],
			"place" => "大阪府",
			"img" => "search_artist_2.png",
			"start" => "19:00",
			"preStart" => "18:00",
		],
		[
			"eventId" => "3",
			"artistId" => "1",
			"artistName" => "ryuzie",
			"ttl" => "Ryuzie ファンミーティング in 北海道（リモート）",
			"date" => [
				"from" => [
					"year" => "2021",
					"month" => "12",
					"day" => "31",
				],
				"to" => [
					"year" => "2021",
					"month" => "12",
					"day" => "31",
				],
			],
			"place" => "北海道",
			"img" => "search_artist_3.png",
			"start" => "19:00",
			"preStart" => "18:00",
		],
		[
			"eventId" => "4",
			"artistId" => "2",
			"artistName" => "たなかあきお",
			"ttl" => "たなかあきお 3RD LIVE TOUR 僕の身長は5m",
			"date" => [
				"from" => [
					"year" => "2021",
					"month" => "12",
					"day" => "31",
				],
				"to" => [
					"year" => "2021",
					"month" => "12",
					"day" => "31",
				],
			],
			"place" => "大阪府",
			"img" => "search_artist_1.png",
			"start" => "19:00",
			"preStart" => "18:00",
		],
		[
			"eventId" => "5",
			"artistId" => "2",
			"artistName" => "たなかあきお",
			"ttl" => "田中明夫と写真撮影オンライン行脚 vol.8",
			"date" => [
				"from" => [
					"year" => "2021",
					"month" => "12",
					"day" => "31",
				],
				"to" => [
					"year" => "2021",
					"month" => "12",
					"day" => "31",
				],
			],
			"place" => "京都府",
			"img" => "search_artist_3.png",
			"start" => "19:00",
			"preStart" => "18:00",
		],
		[
			"eventId" => "6",
			"artistId" => "3",
			"artistName" => "坂倉正樹",
			"ttl" => "MASAKI SAKAKURA Concert Tour 2021 Memorial",
			"date" => [
				"from" => [
					"year" => "2021",
					"month" => "12",
					"day" => "31",
				],
				"to" => [
					"year" => "2021",
					"month" => "12",
					"day" => "31",
				],
			],
			"place" => "大阪府",
			"img" => "search_artist_4.jpg",
			"start" => "19:00",
			"preStart" => "18:00",
		],
		[
			"eventId" => "7",
			"artistId" => "3",
			"artistName" => "坂倉正樹",
			"ttl" => "MASAKI SAKAKURA Concert Tour 2021 Memorial -ANOTHER-",
			"date" => [
				"from" => [
					"year" => "2021",
					"month" => "12",
					"day" => "31",
				],
				"to" => [
					"year" => "2021",
					"month" => "12",
					"day" => "31",
				],
			],
			"place" => "佐賀県",
			"img" => "search_artist_3.png",
			"start" => "19:00",
			"preStart" => "18:00",
		],
	],
];

print json_encode($products);