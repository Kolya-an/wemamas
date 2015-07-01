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
    <?php if ($profile->photo) { ?>
        <?php echo "<img width='100'src='http://wemamas.ru/" . $profile->photo . "' />"; ?>
    <?php } ?>
    <?= $form->field($profile, 'file')->fileInput() ?>
    <?= $form->field($user, 'email') ?>
    <?= $form->field($profile, 'subscribe')->widget(CheckboxX::classname()) ?>
    <?= $form->field($user, 'category_id')->dropDownList(ArrayHelper::map(Category::find()->all(),'category_id','category_name')); ?>
    <?= $form->field($profile, 'website') ?>
    <?= $form->field($profile, 'location') ?>
    <?= $form->field($profile, 'office') ?>
    <?= $form->field($profile, 'salary') ?>
    <?= $form->field($profile, 'phone') ?>
    <?= $form->field($profile, 'bio')->textarea() ?>
    <?= $form->field($profile, 'work')->textarea() ?>
    <?php if ($profile->logo) { ?>
        <?php echo "<img width='100'src='http://wemamas.ru/" . $profile->logo . "' />"; ?>
    <?php } ?>
    <?= $form->field($profile, 'fileLogo')->fileInput() ?>
    <?= $form->field($profile, 'achievements')->textarea() ?>
    <?= $form->field($profile, 'experience') ?>
    <?= $form->field($profile, 'percent') ?>


    <div class="form-group">
        <div class="col-lg-offset-3 col-lg-9">
            <?= Html::submitButton(Yii::t('user', 'Update'), ['class' => 'btn btn-block btn-success']) ?>
        </div>
    </div>

    <?php ActiveForm::end(); ?>

<?php $this->endContent() ?>
