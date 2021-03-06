<?php

$params = require(__DIR__ . '/params.php');

$config = [
    'id' => 'basic',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'layout' => 'basic',
    'defaultRoute' => 'main/index',
    'language' => 'ru_RU',
    'charset' => 'UTF-8',
    'name' => 'Wemamas',
    'components' => [
        'urlManager' => [
            'showScriptName' => false,
            'enablePrettyUrl' => FALSE,
        ],
        'request' => [
            // !!! insert a secret key in the following (if it is empty) - this is required by cookie validation
            'cookieValidationKey' => '6-7__57nOOrEEWhZvLHa8xRw7nY3L5Rg',
        ],
        
        'cache' => [
            'class' => 'yii\caching\FileCache',
        ],
        'user' => [
            'identityClass' => 'app\models\User',
            'enableAutoLogin' => true,
            
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'mailer' => [
            'class' => 'yii\swiftmailer\Mailer',
            // send all mails to a file by default. You have to set
            // 'useFileTransport' to false and configure a transport
            // for the mailer to send real emails.
            'useFileTransport' => true,
        ],
       /* 'assetManager'=>[
        'class'=>'yii\web\AssetManager',
        'linkAssets'=>true,
       ], */
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],
        'db' => require(__DIR__ . '/db.php'),
		
    ],
    'modules' => [
    'user' => [
        'class' => 'dektrium\user\Module',
        'enableConfirmation' => FALSE,
        'admins' => ['admin'],
        
       
       
    ],
],
    'params' => $params,
];

if (YII_ENV_DEV) {
    // configuration adjustments for 'dev' environment
    $config['bootstrap'][] = 'debug';
    $config['modules']['debug'] = [
        'class' => 'yii\debug\Module',
         'allowedIPs' => ['127.0.0.1', '91.217.60.242'],
    ];
    

    $config['bootstrap'][] = 'gii';
   $config['modules']['gii'] = [
        'class' => 'yii\gii\Module',
        'allowedIPs' => ['127.0.0.1', '91.217.60.242'],
    ];
    
}

return $config;
