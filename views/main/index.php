<?php
use app\components\PromoWidget;
use app\components\CatsWidget;
use app\components\IncludeWidget;
use app\components\BuyWidget;
use app\components\ReviewsWidget;
use app\components\RasWidget;
use app\components\SocialWidget;
/* @var $this yii\web\View */
?>
<?=PromoWidget::widget(); ?>
<?=CatsWidget::widget(); ?>
<?=IncludeWidget::widget(); ?>
<?=BuyWidget::widget(); ?>
<?=ReviewsWidget::widget(); ?>
<?=RasWidget::widget(); ?>
<?=SocialWidget::widget(); ?>
