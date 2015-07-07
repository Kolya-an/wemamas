<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\KursSearch */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="kurs-search">

    <?php $form = ActiveForm::begin([
        'action' => ['index'],
        'method' => 'get',
    ]); ?>

    <?= $form->field($model, 'kurs_id') ?>

    <?= $form->field($model, 'kurs_name') ?>

    <?= $form->field($model, 'kurs_url') ?>

    <?= $form->field($model, 'kurs_status') ?>

    <?= $form->field($model, 'kurs_brief') ?>

    <?php // echo $form->field($model, 'kurs_subscribe') ?>

    <?php // echo $form->field($model, 'kurs_teacher_id') ?>

    <?php // echo $form->field($model, 'kurs_anons') ?>

    <?php // echo $form->field($model, 'kurs_tizer') ?>

    <?php // echo $form->field($model, 'kurs_whom') ?>

    <div class="form-group">
        <?= Html::submitButton('Search', ['class' => 'btn btn-primary']) ?>
        <?= Html::resetButton('Reset', ['class' => 'btn btn-default']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
