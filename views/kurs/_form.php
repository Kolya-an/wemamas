<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use app\models\KursStatus;
use yii\helpers\ArrayHelper;

/* @var $this yii\web\View */
/* @var $model app\models\Kurs */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="kurs-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'kurs_name')->textInput(['maxlength' => true]) ?>
    
    <?= $form->field($model, 'kurs_url') ?>
    
    <?= $form->field($model, 'kursStatus')->dropDownList(ArrayHelper::map(KursStatus::find()->all(),'kursStatus', 'kursStatusName')); ?>
    
    <?= $form->field($model, 'kurs_brief')->textInput(['maxlength' => true]) ?>
    
    <?= $form->field($model, 'kurs_subscribe')->textInput(['maxlength' => true]) ?>
    
    <?= $form->field($model, 'kurs_teacher_id') ?>
   
    <?= $form->field($model, 'kurs_anons') ?>
    
    <?= $form->field($model, 'kurs_tizer') ?>
    
    <?= $form->field($model, 'kurs_whom')->textInput(['maxlength' => true]) ?>

    <div class="form-group">
        <?= Html::submitButton($model->isNewRecord ? 'Create' : 'Update', ['class' => $model->isNewRecord ? 'btn btn-success' : 'btn btn-primary']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
