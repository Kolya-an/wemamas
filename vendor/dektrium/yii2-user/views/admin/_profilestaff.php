<?php

/* 
 * This file is part of the Dektrium project
 * 
 * (c) Dektrium project <http://github.com/dektrium>
 * 
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

use yii\bootstrap\ActiveForm;
use yii\helpers\Html;
use yii\helpers\ArrayHelper;
use app\models\Category;
use kartik\checkbox\CheckboxX;
//use yii\jui\DatePicker;
use dosamigos\datepicker\DatePicker;
//use kartik\widgets\ActiveForm;

/**
 * @var yii\web\View $this
 * @var dektrium\user\models\User $user
 */

?>

<?php $this->beginContent('@dektrium/user/views/admin/update.php', ['user' => $user]) ?>

    <?php $form = ActiveForm::begin([
        'options' => ['enctype' => 'multipart/form-data'],
        'layout' => 'horizontal',
        'enableAjaxValidation'   => true,
        'enableClientValidation' => false,
        'fieldConfig' => [
            'horizontalCssClasses' => [
                'wrapper' => 'col-sm-9',
            ]
        ],
    ]); ?>

    <?= $form->field($profile, 'name') ?>
    <?= $form->field($user, 'email') ?>
    <?= $form->field($profile, 'location') ?>
    <?= $form->field($profile, 'phone') ?>
    <?= $form->field($profile, 'office') ?>
    <?= $form->field($profile, 'website') ?>

    <div class="form-group">
        <div class="col-lg-offset-3 col-lg-9">
            <?= Html::submitButton(Yii::t('user', 'Update'), ['class' => 'btn btn-block btn-success']) ?>
        </div>
    </div>

    <?php ActiveForm::end(); ?>

<?php $this->endContent() ?>
