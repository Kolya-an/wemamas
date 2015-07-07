<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/* @var $this yii\web\View */
/* @var $model app\models\LoginForm */
/* @var $form ActiveForm */
?>
<div class="regform">
    <div class="row">
        <div class="col-xs-4">

        </div>
        <div class="col-xs-8">
            <div class="loginform">
                <p class="p-title text-center">Вход</p>

    <?php $form = ActiveForm::begin(); ?>
 <div class="center-block text-center">
                    <div class="form-group">
        <?= $form->field($model, 'email')->textInput(['maxlength' => true, 'class'=>'form-control','placeholder'=>'введите e-mail'])->label('') ?>
                        </div>
                    <div class="form-group">
        <?= $form->field($model, 'password')->passwordInput(['maxlength' => true, 'class'=>'form-control','placeholder'=>'введите пароль'])->label('') ?>
    </div>
        <div class="form-group">
            <?= Html::submitButton('Submit', ['class' => 'btn btn-primary']) ?>
        <span>или</span>
                    <a href="/user/create" class="btn btn-blue">Зарегистрироваться</a>
                </div> </div>
    <?php ActiveForm::end(); ?>

  
       
    </div> </div>
</div>
</div>