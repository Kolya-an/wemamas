<?php
use yii\helpers\Html;
use yii\bootstrap\Nav;
use yii\bootstrap\NavBar;
use yii\widgets\Breadcrumbs;
use app\assets\AppAsset;

/* @var $this \yii\web\View */
/* @var $content string */

AppAsset::register($this);
?>
<?php $this->beginPage() ?>
<!DOCTYPE html>
<html lang="<?= Yii::$app->language ?>">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?></title>
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
                        <img class="pull-left" src="assets/img/toplogo.jpg" alt=""/>
                    </a>
                </div>
                <div class="col-xs-10">
                    <div class="text-b-gr">
                        Центр онлайн-обучения и поддержки материнства
                    </div>

                    <?php if ($loggedin) { ?>
                    <div class="userblock">
                        <img class="avatar-sm" src="<?=(!empty($userinfo->data->avatar)) ? 'public/upload/img/avatars/'.$userinfo->data->avatar : 'public/img/preview/placeholder.jpg';?>" alt=""/>
                    </div>
                    <?php } ?>

                </div>                    
            </div>
            <div class="row">
                <div class="col-xs-7">
                    <nav class="nav">
                        <li><a href="tracks" class="btn link-blue">Все курсы <span class="label label-white">198</span></a></li>
                        
                        <?php if ($loggedin) { ?>
                        <li><a href="tracks" class="link-red">Мои курсы</a></li>
                        <?php } ?>
                        
                        <li><a href="#soon">Скоро запуск</a></li>
                        <li><a href="#ras">Рассылка</a></li>
                        <li><a href="/cart" id="cart-link" class="link-red">Корзина (<span class="number"><?= $cart_count; ?></span>)</a></li>
                    </nav>
                </div>
                <div class="col-xs-5">
                    <?php if ($loggedin) { ?>
                    <div class="userblock">
                        <div class="name">
                            <?=$userinfo->data->fio;?>
                        </div>
                        <div class="dropdown">
                            <div  data-toggle="dropdown" class="profilemenu"></div>
                   
                            <ul class="dropdown-menu">
                                <?php 
                                if ($usercategory == 1) { ?>
                                    <li><a href="manage">Админка</a></li>
                             <?php     } else {
                                ?>
                                <li><a href="user/profile">Профиль</a></li>
                                <li><a href="user/profile">Мои курсы</a></li>
                                <li><a href="user/profile">Настройки</a></li>
                                <li><a href="user/logout">Выйти</a></li>
                             <?php } ?>
                            </ul>
                        </div>
                    </div>
                    <?php } else { ?>
                    <div class="reg">
                        <a href="user/login" class="btn btn-or">Войти</a>
                        <a href="user/reg" class="btn btn-red">Зарегистрироваться</a>
                    </div>
                    <?php } ?>
                </div>
            </div>
        </div>
    </div>
    <div class="subnav">
        <div class="container">
            <nav class="nav">
                <?php
                $out = '';
              /*  foreach($sections as $key => $i) {
                    $active = '';
                    if ($key == $id) $active = 'class="active"';
                    $uri = Model_Alias::uri("tracks/cat/$key");
                    $out .= '<li '.$active.'><a href="'. $uri .'">'.$i.'</a></li>';
                }
                echo $out;*/
                ?>
            </nav>
        </div>
    </div>
</header>

    <div class="wrap">
        
            <?= $content ?>
        </div>
    </div>

    <footer class="footer">
        <div class="container">
            <p class="pull-left">&copy; My Company <?= date('Y') ?></p>
            <p class="pull-right"><?= Yii::powered() ?></p>
        </div>
    </footer>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
