<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;
use dosamigos\datepicker\DatePicker;

/* @var $this yii\web\View */
/* @var $model app\models\Reg */
/* @var $form yii\widgets\ActiveForm */
?>

<div class="regform">

    <?php $form = ActiveForm::begin(); ?>
    <div class="row">
    <div class="col-xs-4">

    </div>
    <div class="col-xs-8">
        <div class="fields">
 <div class="row">
                <div class="col-xs-6">

                    <div class="form-group">
                        <label>E-mail *</label>
    <?= $form->field($model, 'email')->textInput(['maxlength' => true, 'class'=>'form-control','placeholder'=>'введите адрес эл. почты']) ?>
       </div>
                </div>
                <div class="col-xs-6">
                    <div class="form-group">
                        <label>Пароль *</label>
    <?= $form->field($model, 'password')->passwordInput(['maxlength' => true, 'class'=>'form-control','placeholder'=>'введите пароль']) ?>
  </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xs-6">
                    <div class="form-group">
                        <label>Имя *</label>
    <?= $form->field($model, 'name')->textInput(['maxlength' => true, 'class'=>'form-control','placeholder'=>'введите ваше имя']) ?>
 </div>
                </div>
                <div class="col-xs-6">
                    <div class="form-group">
                        <label>Фамилия</label>
    <?= $form->field($model, 'surname')->textInput(['maxlength' => true, 'class'=>'form-control','placeholder'=>'введите вашу фамилию']) ?>
 </div>
                </div>
            </div>
            <div class="row">
                
    <div class="col-xs-6">
                    <div class="form-group">
                        <label>Местоположение*</label>
    <?= $form->field($model, 'city')->textInput(['maxlength' => true, 'class'=>'form-control','placeholder'=>'откуда вы?']) ?>
  

   
</div>
                        </div>              
                
                <div class="col-xs-6">
                    <div class="form-group">
                        <label>Дата рождения *</label>
                    
  <?php //birthday ?>
 <?= DatePicker::widget([
    'model' => $model,
    'attribute' => 'birthday',
     'class'=>'form-control',
     'value' => '01-Янв-1980',
     'language' => 'ru',
    'template' => '{addon}{input}',
        'clientOptions' => [
            'autoclose' => true,
            'format' => 'dd-M-yyyy',
         
            
        ]
]);?>
   
                  </div>
                </div>
              
        </div>
        <p class="p-text-i">
            * - поля обязательные к заполнению
        </p>
        <button class="btn btn-blue center-block">Создать аккаунт</button>
    </div>
    </div></div>
    <?php ActiveForm::end(); ?>
</div>

