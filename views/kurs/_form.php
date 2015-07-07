<?php

use yii\helpers\Html;
//use yii\widgets\ActiveForm;
use app\models\KursStatus;
use app\models\CategoryKurs;
use yii\helpers\ArrayHelper;
use yii\bootstrap\ActiveForm;
//use dektrium\user\models\Profile;
/* @var $this yii\web\View */
/* @var $model app\models\Kurs */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="kurs-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'kurs_name')->textInput(['maxlength' => true]) ?>
    
    <?= $form->field($model, 'kurs_url') ?>
    
    <?= $form->field($model, 'categoryKurs')->dropDownList(ArrayHelper::map(CategoryKurs::find()->all(),'category_kurs_id', 'category_kurs_name')); ?>
    
    <?= $form->field($model, 'kursStatus')->dropDownList(ArrayHelper::map(KursStatus::find()->all(),'kurs_status_id', 'kurs_status_name')); ?>
    
    <?= $form->field($model, 'kurs_brief')->textarea() ?>
    
    <?= $form->field($model, 'kurs_subscribe')->textarea() ?>
    
 <?php /*   <?= $form->field($model, 'kursTeacher')->dropDownList(ArrayHelper::map(Profile::find()->where(Profile::getUserCategory(), '2')->all(),'user_id', 'name')); ?>
    
    */ ?>
   
    <?= $form->field($model, 'kurs_anons') ?>
    
  
    
    <?= $form->field($model, 'kurs_whom')->textarea() ?>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
