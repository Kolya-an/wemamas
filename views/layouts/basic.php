<?php
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\bootstrap\Modal;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;
use yii\widgets\ActiveForm;




/* @var $this \yii\web\View */
/* @var $content string */
AppAsset::register($this);

?>
<?php $this->beginPage() ?>
<!DOCTYPE html>

<html lang="<?=Yii::$app->language ?>">
    <head>
        <meta charset="<?=Yii::$app->charset ?>">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?> 
        <title><?=Yii::$app->name ?></title>
         <?php $this->head() ?>
       
    </head>
  <body>
      <?php $this->beginBody() ?>
        <header>
        <div class="top">
            <div class="container text-right">
                 <div class="row l1">
                <div class="col-xs-2">
                    <a href="/">
                        <img class="pull-left" src="/img/toplogo.jpg" alt=""/>
                    </a>
                </div>
                <div class="col-xs-10">
                    <div class="text-b-gr">
                        Центр онлайн-обучения и поддержки материнства
                    </div>

                    
                </div>
          
    <div class="wrap">
        <?php/*
                     
        <div class="container">
            <?= Breadcrumbs::widget([
                'links' => isset($this->params['breadcrumbs']) ? $this->params['breadcrumbs'] : [],
            ]) ?>
     */   ?>  
        </div>
  
       </div>
<div class="row">
                <div class="col-xs-7">
                    <nav class="nav">
                        <li><a href="tracks" class="btn link-blue">Все курсы <span class="label label-white">198</span></a></li>
                        
                        <?php if (!Yii::$app->user->isGuest) { ?>
                        <li><a href="tracks" class="link-red">Мои курсы</a></li>
                        <?php } ?>
                        
                        <li><a href="#soon">Скоро запуск</a></li>
                        <li><a href="#ras">Рассылка</a></li>
                        <li><a href="/cart" id="cart-link" class="link-red">Корзина (<span class="number"><?= $cart_count; ?></span>)</a></li>
                    </nav>
                </div>
                <div class="col-xs-5">
                    <nav class="navbar-nav navbar-right">
                       
                   
                    
                    
                    <?php 
                     echo Nav::widget([
                'options' => ['class' => 'navbar-nav navbar-right'],
                'items' => [
                
                  
                    !Yii::$app->user->isGuest ?
                     ['label' => Yii::$app->user->identity->username, 'items' => [
  ['label' => 'Админка', 'url' => ['/user/admin/index']],
  ['label' => 'Выход (' . Yii::$app->user->identity->username . ')',
                         'url' => ['/user/security/logout'],
                         'linkOptions' => ['data-method' => 'post']]
   ]
]
                             
                 :
                       ['label' => 'Вход', 'url' => ['/user/security/login'], 'linkOptions' => ['class' => 'btn link-blue']],
                   Yii::$app->user->isGuest ?
                    ['label' => 'Регистрация', 'url' => ['/user/registration/register'], 'linkOptions' => ['class' => 'btn link-blue']] :
        ['label' => '', 'url' => ['']]
                         ]
                        
            ]); 
                    ?>
                </nav></div>
            </div>
                
     </div>
        </div>
            <div class="subnav">
        <div class="container">
            <nav class="nav">
                <?php /*
                $out = '';
                foreach($sections as $key => $i) {
                    $active = '';
                    if ($key == $id) $active = 'class="active"';
                    $uri = Model_Alias::uri("tracks/cat/$key");
                    $out .= '<li '.$active.'><a href="'. $uri .'">'.$i.'</a></li>';
                }
                echo $out;
               */ ?>
            </nav>
        </div>
    </div>
     </header>
        <?= $content ?>
        <footer>
    <div class="container">
        <div class="row blocks">
            <div class="col-xs-3">
                <p class="pr100">
                    <img src="img/100.png" alt="">
                    Если до прохождения 50%
                    первого курса обучение 
                    покажется Вам неполезным, 
                    мы вернем Вам деньги
                </p>
                
            </div>
            <div class="col-xs-3">
                <p class="zag">О проекте</p>
                <p>О проекте "МыМамы</p>
                <p>Преподаватели</p>
                <p>Все курсы</p>
                <p>Партнеры</p>
                <p><a href="/page/contact">Контакты</a></p>
                <p><a href="page/politic">Пользовательское соглашение</a></p>
            </div>
            <div class="col-xs-3">
                <p class="zag">СОТРУДНИЧЕСТВО</p>
                <p>Станьте нашим преподавателем!</p>
                <p>Партнерам</p>
                <p><a href="idea">Есть идея/пожелание? Нашли ошибку?  Поделитесь с нами!</a></p>
            </div>
            <div class="col-xs-3">
                <p class="zag">РАСТЕМ ВМЕСТЕ!</p>
                <p>Пописаться на рассылку</p>
                <p>Зарегистрироваться на курс</p>
            </div>
        </div>
    </div>
    <div class="bottom">
        <div class="container">
            <div class="row">
                <div class="col-xs-5">
                    <p>Получайте ценные знания и навыки не выходя из дома!</p>
                </div>
                <div class="col-xs-7">
                    <p class="text-right">
                        <img src="img/botphone.png" alt=""/>
                        <span class="botphone">+7(495) 999 99 99</span>
                        <span class="blank"></span>
                        <img src="img/botpin.png" alt=""/>
                        Контакты
                        <span class="blank"></span>
                        <img src="img/botemail.png" alt=""/>
                        e-mail
                        <span class="blank"></span>
                        ©2014
                    </p>
                </div>
            </div>

        </div>
    </div>
</footer>


      
      <?php $this->endBody() ?>
    </body>
</html>
<?php $this->endPage() ?>
